const express = require('express')
const app = express()
const port = 3000
const {read, write, init} = require('./utils')
const axios = require('axios')


var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

init()


app.get('/', (req, res) => {
  res.sendFile('index.html', {root: __dirname })
})

app.post('/', (req, res) => {
    const data = read()
    console.log(req.body)
    data[req.body.numeroAssento] = 'ocupado'
    console.log('post')
    write(data)
    axios.post('http://localhost:3001/reservou', {
        numeroAssento: req.body.numeroAssento 
    }).then(() => {
        res.sendStatus(200)
    })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
