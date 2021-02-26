const express = require('express')
const app = express()
const axios = require('axios')

const users = [{id: 1, name:"john"}]

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.get('/test', (req, res) => {
    axios.get('https://jsonplaceholder.typicode.com/todos')
    .then(resp => {
    res.json(resp.data[0])
    })
})

app.get('/going', (req, res) => {
    res.json({hello: true})
})

app.get('/testing', (req, res) => {
    res.json({hello: true})
})

app.listen(3001, (req, res) => {
    console.log('listening on port 3001')
})