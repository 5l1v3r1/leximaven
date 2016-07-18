## leximaven

[![Build Status](https://travis-ci.org/drawnepicenter/leximaven.svg?branch=master)](https://travis-ci.org/drawnepicenter/leximaven) [![Dependency Status](https://gemnasium.com/badges/github.com/drawnepicenter/leximaven.svg)](https://gemnasium.com/github.com/drawnepicenter/leximaven) [![Coverage Status](https://coveralls.io/repos/github/drawnepicenter/leximaven/badge.svg?branch=master)](https://coveralls.io/github/drawnepicenter/leximaven?branch=master) [![Code Climate](https://codeclimate.com/github/drawnepicenter/leximaven/badges/gpa.svg)](https://codeclimate.com/github/drawnepicenter/leximaven) [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

[![Standard Version](https://img.shields.io/badge/release-standard%20version-brightgreen.svg)](https://github.com/conventional-changelog/standard-version) [![MIT Licence](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/mit-license.php) [![Semver 2.0.0](https://img.shields.io/badge/semver-2.0.0-ff69b4.svg)](http://semver.org/spec/v2.0.0.html)

---

Read some [prose](https://github.com/drawnepicenter/leximaven/blob/master/PROSE.md)...

### Introduction

Leximaven is powerful. It can fetch acronyms, anagrams, bi-gram phrases, definitions, etymologies, example uses, hyphenation, offensive word flags, portmanteaus, pronunciations (Arpabet & IPA), related words, rhymes, slang, and syllable stress and count. See the [wiki](https://github.com/drawnepicenter/leximaven/wiki) for more info.

### Installation

[Get a Wordnik API key](http://developer.wordnik.com/) and put it in an environment variable WORDNIK. Add it to .bashrc, .zshrc, Windows env, etc.
Then run:

    npm install -g leximaven
    leximaven config init

### Usage

Leximaven has a built-in help system for CLI parameters and options. Access it with `leximaven -h|--help [command] [subcommand]`. There is also the [wiki](https://github.com/drawnepicenter/leximaven/wiki).

Here are some examples:

```
// Get antonyms for 'noise'
leximaven wordnik relate --canon --type antonym noises

// Get anagrams with at least 2 letters in each word and a maximum of 3 words
// per anagram using short form flags and exporting to JSON
leximaven anagram -n2 -w3 -o anagrams.json toomanysecrets

// Get a wordmap for 'ubiquity'
leximaven map ubiquity
```

### Resources

The following links can help you use Leximaven or perform related tasks.

- ISO 639-1 [Language Codes](http://www.loc.gov/standards/iso639-2/php/English_list.php) for Rhymebrain functions
- [ARPABET](http://en.wikipedia.org/wiki/Arpabet) phoneme list and [IPA](http://en.wikipedia.org/wiki/Help:IPA_for_English) equivalents
- [Dewey Decimal Classes](http://en.wikipedia.org/wiki/List_of_Dewey_Decimal_classes) for acronyms
- Browse Datamuse's Onelook [dictionaries](http://www.onelook.com/?d=all_gen), use its [dictionary lookup](http://www.onelook.com/), [thesaurus/reverse lookup](http://www.onelook.com/thesaurus/), and [RhymeZone](http://www.rhymezone.com/)
- [proselint](https://github.com/amperser/proselint) checks your writing style and has plugins for multiple editors
- [write-good](https://github.com/btford/write-good) Naive linter for English prose for developers who can't write good and wanna learn to do other stuff good too.

### Contributing

See [CONTRIBUTING](https://github.com/drawnepicenter/leximaven/blob/master/CONTRIBUTING.md).

### Gratitude

Many thanks to all contributors to the libraries used in this project! And thanks to the creators and maintainers of the APIs that this tool consumes. Acronym Server, Datamuse, Onelook, Rhymebrain, Urban Dictionary, Wordnik, and Wordsmith are awesome!
