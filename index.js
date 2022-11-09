import { sentence } from 'txtgen'
import fetch from 'node-fetch'
import express from 'express'

// Create an instance of an express application
const app = express()

app.use(express.json())

// Set the port the application will be running on
const port = process.env.PORT || 3001

// Set up a response for the root path of the application
app.get('/', (req, res) => {
  // req.query has data from the URL querystring (?key=value&anotherKey=anotherValue)
  console.log(req.query)

  const randomSentence = sentence()

  res.json({ text: randomSentence })
})

// Example of an application route with URL parameters
app.get('/firstName/:firstName/lastName/:lastName', (req, res) => {
  console.log(req.params)

  res.json({ data: `The full name is ${req.params.firstName} ${req.params.lastName}` })
})

// Example of an application route set up to recieve POST data
app.post('/submit', (req, res) => {
  console.log(req.body)

  res.json({ data: req.body })
})

// Example of an application route that makes a request to another server
app.get('/advice', async (req, res) => {
  // Make a request to another wbesite and wait for a response
  const response = await fetch('https://api.adviceslip.com/advice')

  // Read the response
  const body = await response.json()

  // Print the repsonse body to the console
  console.log(body)

  // Get the advice text string from the response body object
  const advice = body.slip.advice

  res.json({ data: advice })
})

// Set the application to listen a port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
