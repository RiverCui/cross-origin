let express = require('express')
let app = express()
let whiteList = ['http://localhost:3000']
app.use(function (req, res, next) {
  let origin = req.headers.origin
  if (whiteList.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin)
    res.setHeader('Access-Control-Allow-Headers', 'name, xxx, xxx')
    res.setHeader('Access-Control-Allow-Methods', 'PUT')
  }
  next()
})
app.put('/getData', function (req, res) {
  res.end('World')
})
app.get('/getData', function (req, res) {
  console.log(req.headers)
  res.end('World')
})
app.use(express.static(__dirname))
app.listen(4000)