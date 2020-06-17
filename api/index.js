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

app.all('*', (req, res) => {
  res.status(404).send({ success: false, message: 'Endpoint not found.' })
})

//Exporting the serverMiddleware so that the express server runs with an endpoint
// localhost:3000/api/

module.exports = {
  path: '/api',
  handler: app
}
