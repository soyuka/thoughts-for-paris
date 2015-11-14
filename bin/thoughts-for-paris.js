#!/usr/bin/env node
var argv = require('minimist')(process.argv.slice(2));
var r = require('ansi-rainbow')
var chalk = require('chalk')

var str = argv._.join(' ')

while(str.length % 3 !== 0) {
  str += ' '
}

var l = str.length

var spaces = ''
var i = 0
for (;i < l; i++) {
  spaces += ' ' 
}

r
.options({color_space: true, gap: l / 3})
.skip(r._backgrounds)
.skip(r._colors)
.add('bgBlue bgWhite bgRed')

console.log(r.bg(spaces))
console.log(chalk.black(r.bg(str)))
console.log(r.bg(spaces))
