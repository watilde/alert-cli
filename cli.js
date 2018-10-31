#!/usr/bin/env node

const exec = require('child_process').exec
const alert = require('./')

if (process.argv.length !== 3) {
  console.log('You need to specify one argument')
  return
}

exec(alert(process.argv[2]))
