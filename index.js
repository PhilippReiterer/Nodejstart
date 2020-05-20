var express = require('express')
var path = express('path')

var app = express()
app.set('port', (process.env.PORT || 5000))

app.use(express.static(__dirname + 'public', 'ceasar_Test.html')

app.get('/', function(request, response) {
  //response.send('Hello World!')
  response.sendFile(dateipfad)
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
