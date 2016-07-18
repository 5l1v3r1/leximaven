'use strict';

/* eslint max-len:0, no-unused-vars:0 */
var themes = require('../../themes');
var tools = require('../../tools');

var chalk = require('chalk');
var needle = require('needle');

exports.command = 'info';
exports.desc = 'Datamuse metrics';
exports.builder = {};
exports.handler = function (argv) {
  var url = 'http://api.datamuse.com/metrics';
  needle.get(url, function (error, response) {
    if (!error && response.statusCode === 200) {
      var body = response.body;
      var version = body[0];
      var qps = body[1];
      var sugf = body[2];
      var sugn = body[3];
      var wordf = body[4];
      var wordn = body[5];
      console.log(chalk.white('Current queries per second (v' + Math.round(version.value * 100) / 100.0 + '): ' + Math.round(qps.value * 100) / 100.0));
      console.log(chalk.white('Latency (/words): ' + Math.round(wordf.value * 100000) / 100.0 + ' ms (median), ' + Math.round(wordn.value * 100000) / 100.0 + ' ms (99 %ile)'));
      console.log(chalk.white('Latency (/sug): ' + Math.round(sugf.value * 100000) / 100.0 + ' ms (median), ' + Math.round(sugn.value * 100000) / 100.0 + ' ms (99 %ile)'));
    } else {
      console.error(chalk.red.bold('HTTP ' + response.statusCode + ':') + ' ' + chalk.red(error));
    }
  });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtZHMvZG11c2VfY21kcy9pbmZvLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQSxJQUFNLFNBQVMsUUFBUSxjQUFSLENBQWY7QUFDQSxJQUFNLFFBQVEsUUFBUSxhQUFSLENBQWQ7O0FBRUEsSUFBTSxRQUFRLFFBQVEsT0FBUixDQUFkO0FBQ0EsSUFBTSxTQUFTLFFBQVEsUUFBUixDQUFmOztBQUVBLFFBQVEsT0FBUixHQUFrQixNQUFsQjtBQUNBLFFBQVEsSUFBUixHQUFlLGtCQUFmO0FBQ0EsUUFBUSxPQUFSLEdBQWtCLEVBQWxCO0FBQ0EsUUFBUSxPQUFSLEdBQWtCLFVBQUMsSUFBRCxFQUFVO0FBQzFCLE1BQU0sTUFBTSxpQ0FBWjtBQUNBLFNBQU8sR0FBUCxDQUFXLEdBQVgsRUFBZ0IsVUFBQyxLQUFELEVBQVEsUUFBUixFQUFxQjtBQUNuQyxRQUFJLENBQUMsS0FBRCxJQUFVLFNBQVMsVUFBVCxLQUF3QixHQUF0QyxFQUEyQztBQUN6QyxVQUFNLE9BQU8sU0FBUyxJQUF0QjtBQUNBLFVBQU0sVUFBVSxLQUFLLENBQUwsQ0FBaEI7QUFDQSxVQUFNLE1BQU0sS0FBSyxDQUFMLENBQVo7QUFDQSxVQUFNLE9BQU8sS0FBSyxDQUFMLENBQWI7QUFDQSxVQUFNLE9BQU8sS0FBSyxDQUFMLENBQWI7QUFDQSxVQUFNLFFBQVEsS0FBSyxDQUFMLENBQWQ7QUFDQSxVQUFNLFFBQVEsS0FBSyxDQUFMLENBQWQ7QUFDQSxjQUFRLEdBQVIsQ0FBWSxNQUFNLEtBQU4sbUNBQTRDLEtBQUssS0FBTCxDQUFXLFFBQVEsS0FBUixHQUFnQixHQUEzQixJQUFrQyxLQUE5RSxXQUF5RixLQUFLLEtBQUwsQ0FBVyxJQUFJLEtBQUosR0FBWSxHQUF2QixJQUE4QixLQUF2SCxDQUFaO0FBQ0EsY0FBUSxHQUFSLENBQVksTUFBTSxLQUFOLHdCQUFpQyxLQUFLLEtBQUwsQ0FBVyxNQUFNLEtBQU4sR0FBYyxNQUF6QixJQUFtQyxLQUFwRSxzQkFBMEYsS0FBSyxLQUFMLENBQVcsTUFBTSxLQUFOLEdBQWMsTUFBekIsSUFBbUMsS0FBN0gsbUJBQVo7QUFDQSxjQUFRLEdBQVIsQ0FBWSxNQUFNLEtBQU4sc0JBQStCLEtBQUssS0FBTCxDQUFXLEtBQUssS0FBTCxHQUFhLE1BQXhCLElBQWtDLEtBQWpFLHNCQUF1RixLQUFLLEtBQUwsQ0FBVyxLQUFLLEtBQUwsR0FBYSxNQUF4QixJQUFrQyxLQUF6SCxtQkFBWjtBQUNELEtBWEQsTUFXTztBQUNMLGNBQVEsS0FBUixDQUFpQixNQUFNLEdBQU4sQ0FBVSxJQUFWLFdBQXVCLFNBQVMsVUFBaEMsT0FBakIsU0FBbUUsTUFBTSxHQUFOLENBQVUsS0FBVixDQUFuRTtBQUNEO0FBQ0YsR0FmRDtBQWdCRCxDQWxCRCIsImZpbGUiOiJjbWRzL2RtdXNlX2NtZHMvaW5mby5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludCBtYXgtbGVuOjAsIG5vLXVudXNlZC12YXJzOjAgKi9cbmNvbnN0IHRoZW1lcyA9IHJlcXVpcmUoJy4uLy4uL3RoZW1lcycpXG5jb25zdCB0b29scyA9IHJlcXVpcmUoJy4uLy4uL3Rvb2xzJylcblxuY29uc3QgY2hhbGsgPSByZXF1aXJlKCdjaGFsaycpXG5jb25zdCBuZWVkbGUgPSByZXF1aXJlKCduZWVkbGUnKVxuXG5leHBvcnRzLmNvbW1hbmQgPSAnaW5mbydcbmV4cG9ydHMuZGVzYyA9ICdEYXRhbXVzZSBtZXRyaWNzJ1xuZXhwb3J0cy5idWlsZGVyID0ge31cbmV4cG9ydHMuaGFuZGxlciA9IChhcmd2KSA9PiB7XG4gIGNvbnN0IHVybCA9ICdodHRwOi8vYXBpLmRhdGFtdXNlLmNvbS9tZXRyaWNzJ1xuICBuZWVkbGUuZ2V0KHVybCwgKGVycm9yLCByZXNwb25zZSkgPT4ge1xuICAgIGlmICghZXJyb3IgJiYgcmVzcG9uc2Uuc3RhdHVzQ29kZSA9PT0gMjAwKSB7XG4gICAgICBjb25zdCBib2R5ID0gcmVzcG9uc2UuYm9keVxuICAgICAgY29uc3QgdmVyc2lvbiA9IGJvZHlbMF1cbiAgICAgIGNvbnN0IHFwcyA9IGJvZHlbMV1cbiAgICAgIGNvbnN0IHN1Z2YgPSBib2R5WzJdXG4gICAgICBjb25zdCBzdWduID0gYm9keVszXVxuICAgICAgY29uc3Qgd29yZGYgPSBib2R5WzRdXG4gICAgICBjb25zdCB3b3JkbiA9IGJvZHlbNV1cbiAgICAgIGNvbnNvbGUubG9nKGNoYWxrLndoaXRlKGBDdXJyZW50IHF1ZXJpZXMgcGVyIHNlY29uZCAodiR7TWF0aC5yb3VuZCh2ZXJzaW9uLnZhbHVlICogMTAwKSAvIDEwMC4wfSk6ICR7TWF0aC5yb3VuZChxcHMudmFsdWUgKiAxMDApIC8gMTAwLjB9YCkpXG4gICAgICBjb25zb2xlLmxvZyhjaGFsay53aGl0ZShgTGF0ZW5jeSAoL3dvcmRzKTogJHtNYXRoLnJvdW5kKHdvcmRmLnZhbHVlICogMTAwMDAwKSAvIDEwMC4wfSBtcyAobWVkaWFuKSwgJHtNYXRoLnJvdW5kKHdvcmRuLnZhbHVlICogMTAwMDAwKSAvIDEwMC4wfSBtcyAoOTkgJWlsZSlgKSlcbiAgICAgIGNvbnNvbGUubG9nKGNoYWxrLndoaXRlKGBMYXRlbmN5ICgvc3VnKTogJHtNYXRoLnJvdW5kKHN1Z2YudmFsdWUgKiAxMDAwMDApIC8gMTAwLjB9IG1zIChtZWRpYW4pLCAke01hdGgucm91bmQoc3Vnbi52YWx1ZSAqIDEwMDAwMCkgLyAxMDAuMH0gbXMgKDk5ICVpbGUpYCkpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoYCR7Y2hhbGsucmVkLmJvbGQoYEhUVFAgJHtyZXNwb25zZS5zdGF0dXNDb2RlfTpgKX0gJHtjaGFsay5yZWQoZXJyb3IpfWApXG4gICAgfVxuICB9KVxufVxuIl19