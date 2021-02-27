const express = require('express')
const app = express()
const axios = require('axios')
const users = [{id: 1, name:"john"}]


app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.get('/test', (req, res) => {
    axios.get('https://randomuser.me/api')
    .then(resp => {
    res.json(resp.data.results[0])
    })
})

app.post('/going', (req, res) => {
    res.json({hello: true})
})

app.get('/testing', (req, res) => {
    res.json({hello: true})
})


app.post('/users', (req, res) => {
    const user = req.body
    // console.log(req.body)
    users.push({...user, id: 0})
    res.json(user)
})

//

app.listen(3001, (req, res) => {
    console.log('listening on port 3001')
})