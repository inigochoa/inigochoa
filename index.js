const markdownlint = require('markdownlint')

const options = {
  'files': ['README.md'],
}

markdownlint(options, (err, result) => {
  if (!err) {
    console.log(result.toString())
  }
})
