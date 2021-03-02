const express = require('express')
const app = express()
const axios = require('axios')


app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.get('/test', (req, res) => {
    axios.get('https://randomuser.me/api')
    .then(resp => {
        const randomPerson = resp.data.results[0]
        const newPerson = {
            phone: randomPerson.phone,
            email: randomPerson.email,
            first: randomPerson.name.first,
            last: randomPerson.name.last,
            thumbnail: randomPerson.picture.large

        }
    res.json(newPerson)
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
    users.push()
    res.json(user)
})

//

app.listen(3001, (req, res) => {
    console.log('listening on port 3001')
})