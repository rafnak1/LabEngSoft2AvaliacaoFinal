const express = require('express')
const app = express()
const port = 3001
const {read, write, init} = require('./utils')

init()

app.get('/', (req, res) => {
  res.sendFile('index.html', {root: __dirname })
})

app.get('/lugares', (req, res) => {
    const data = read()
    res.json(data)
})

app.post('/reservou', (req, res) => {
  console.log(1234)
  const data = read()
  data[req.body.numeroAssento] = 'ocupado'
  write(data)
  res.sendStatus(200)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
