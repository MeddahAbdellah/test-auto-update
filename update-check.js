var http = require('http')
var createHandler = require('github-webhook-handler')
var handler = createHandler({ path: 'https://d832-2001-861-30c3-2870-e10c-b2df-6a50-9792.ngrok.io', secret: '' })

http.createServer(function (req, res) {
  handler(req, res, function (err) {
    res.statusCode = 404
    res.end('no such location')
  })
}).listen(7777)

handler.on('error', function (err) {
  console.error('Error:', err.message)
})

handler.on('push', function (event) {
  console.log('Received a push event for %s to %s',
    event.payload.repository.name,
    event.payload.ref)
})
