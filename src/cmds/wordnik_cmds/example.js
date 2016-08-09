/* eslint max-len:0 */
const themes = require('../../themes')
const tools = require('../../tools')

const _ = require('lodash')
const chalk = require('chalk')
const moment = require('moment')
const http = require('good-guy-http')()
const noon = require('noon')

const CFILE = `${process.env.HOME}/.leximaven.noon`

exports.command = 'example <word>'
exports.desc = 'Wordnik examples'
exports.builder = {
  out: {
    alias: 'o',
    desc: 'Write cson, json, noon, plist, yaml, xml',
    default: '',
    type: 'string',
  },
  force: {
    alias: 'f',
    desc: 'Force overwriting outfile',
    default: false,
    type: 'boolean',
  },
  save: {
    alias: 's',
    desc: 'Save flags to config file',
    default: false,
    type: 'boolean',
  },
  limit: {
    alias: 'l',
    desc: 'Limit number of results',
    default: 5,
    type: 'number',
  },
  canon: {
    alias: 'c',
    desc: 'Use canonical',
    default: false,
    type: 'boolean',
  },
  skip: {
    alias: 'k',
    desc: 'Number of results to skip',
    default: 0,
    type: 'number',
  },
}
exports.handler = (argv) => {
  tools.checkConfig(CFILE)
  let config = noon.load(CFILE)
  let proceed = false
  const stamp = new Date(config.wordnik.date.stamp)
  const minutes = moment(new Date).diff(stamp, 'minutes')
  let reset = false
  if (minutes < 60) {
    config.wordnik.date.remain = config.wordnik.date.remain - 1
    noon.save(CFILE, config)
  } else if (minutes >= 60) {
    reset = true
    config.wordnik.date.stamp = moment().format()
    config.wordnik.date.remain = config.wordnik.date.limit
    console.log(chalk.white(`Reset API limit to ${config.wordnik.date.limit}/${config.wordnik.date.interval}.`))
    config.wordnik.date.remain = config.wordnik.date.remain - 1
    noon.save(CFILE, config)
  }
  if (config.wordnik.date.remain === 0) {
    proceed = false
  } else if (config.wordnik.date.remain < 0) {
    proceed = false
    config.wordnik.date.remain = 0
    noon.save(CFILE, config)
  } else {
    proceed = true
  }
  if (proceed) {
    const userConfig = {
      wordnik: {
        example: {
          canon: argv.c,
          limit: argv.l,
          skip: argv.k,
        },
      },
    }
    if (config.merge) config = _.merge({}, config, userConfig)
    const theme = themes.loadTheme(config.theme)
    if (config.verbose) themes.label(theme, 'down', 'Wordnik')
    const word = argv.word
    const task = 'examples'
    const prefix = 'http://api.wordnik.com:80/v4/word.json/'
    const apikey = process.env.WORDNIK
    const uri = `${prefix}${word}/${task}?`
    const pcont = []
    pcont.push(`useCanonical=${config.wordnik.example.canon}&`)
    pcont.push('includeDuplicates=false&')
    pcont.push(`limit=${config.wordnik.example.limit}&`)
    if (!config.wordnik.example.skip) {
      pcont.push('skip=0&')
    } else {
      pcont.push(`skip=${config.wordnik.example.skip}&`)
    }
    pcont.push(`api_key=${apikey}`)
    const rest = pcont.join('')
    let url = `${uri}${rest}`
    url = encodeURI(url)
    const tofile = {
      type: 'example',
      source: 'http://www.wordnik.com',
      url,
    }
    http({ url }, (error, response) => {
      if (!error && response.statusCode === 200) {
        const body = JSON.parse(response.body)
        const list = body.examples
        for (let i = 0; i <= list.length - 1; i++) {
          const item = list[i]
          themes.label(theme, 'right', 'Example', item.text)
          tofile[[`example${i}`]] = item.text
        }
        if (argv.o) tools.outFile(argv.o, argv.f, tofile)
        if (argv.s && config.merge) noon.save(CFILE, config)
        if (argv.s && !config.merge) throw new Error("Can't save user config, set option merge to true.")
        if (reset) {
          console.log(`${config.wordnik.date.remain}/${config.wordnik.date.limit} requests remaining this hour.`)
        } else {
          if (config.usage) console.log(`${config.wordnik.date.remain}/${config.wordnik.date.limit} requests remaining this hour, will reset in ${59 - minutes} minutes.`)
        }
      } else {
        throw new Error(`HTTP ${response.statusCode}: ${error}`)
      }
    })
  } else {
    throw new Error(`Reached this hour's usage limit of ${config.wordnik.date.limit}.`)
  }
}
