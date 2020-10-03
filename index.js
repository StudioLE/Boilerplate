const app = require('./lib/app')
const { port } = require('./lib/config')

app.listen(port, function() {
  console.log(`Server available at http://0.0.0.0:${port}`)
})
