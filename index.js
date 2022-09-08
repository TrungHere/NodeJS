const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)
//tao 1 nhanh moi tren git 
//git checkout -b REPO