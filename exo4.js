const fs = require('fs')
const [node, path, filePath] = process.argv
const callback = (error, content) => {
  if (error) {
    return console.error(error)
  }

  const lines = content.split('\n')
  console.log(lines.length - 1)
}

fs.readFile(filePath,'utf8', callback)
