express = require('express')
server = express()
server.get(/^(.+)$/, (req, res) ->
  console.log('static file request : ' + req.params[0])
  res.sendFile( __dirname + '/public/' + req.params[0])
)

server.listen(3000)
console.log('Server listening on port 3000!')