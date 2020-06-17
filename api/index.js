import express from 'express'
import bodyParser from 'body-parser'

const app = express()

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true
  })
)
// app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/randomString', (req, res) => {
  //basic code to generate a random string of length 10
  let randomString = ''
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
  const charactersLength = characters.length
  for (let i = 0; i < 20; i++) {
    randomString += characters.charAt(
      Math.floor(Math.random() * charactersLength)
    )
  }
  res.send(randomString)
})

app.post('/name', (req, res) => {
  if (req.body.name) {
    res.send(`Hello ${req.body.name}`)
  } else {
    res.send('No name entered')
  }
})

app.all('*', (req, res) => {
  res.status(404).send({ success: false, message: 'Endpoint not found.' })
})

//Exporting the serverMiddleware so that the express server runs with an endpoint
// localhost:3000/api/

module.exports = {
  path: '/api',
  handler: app
}
