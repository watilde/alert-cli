const os = require('os')
const pkg = require('./package.json')

module.exports = (message) => {
  switch (os.type()) {
    case 'Darwin':
      return `osascript -e 'display notification "${message}" with title "${pkg.name}"'`
    case 'Linux':
      return `notify-send "${pkg.name}" "${message}"`
    case 'Windows_NT':
    default:
      return ''
  }
}
