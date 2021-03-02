const express = require('express')
const app = express()
const axios = require('axios')

const going = []
const notGoing = []

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

app.get('/going', (req, res) => {
    res.json(going)
})

app.get('/not-going', (req, res) => {
    res.json(notGoing)
})


app.post('/mark-invitee', (req, res) => {
    const guest = req.body
    console.log(req.body)
   if(guest.isGoing == true){
       going.push(guest)
   } else {
       notGoing.push(guest)
   }
    res.json(guest)
})


app.listen(3001, (req, res) => {
    console.log('listening on port 3001')
})