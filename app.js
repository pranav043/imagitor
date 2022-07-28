const express = require('express')
const ejs = require('ejs')

const app = express()
const port = process.env.PORT || 3000

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.listen(port, function () {
  console.log(`Imagitor listening on port ${port}`)
})
