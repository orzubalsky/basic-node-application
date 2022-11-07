// Import the random text generator library
import { sentence } from 'txtgen'

// Import the express library and assign it to a variable
import express from 'express'

// Create an instance of an express application
const app = express()

// Set the port the application will be running on
const port = process.env.PORT || 3001

// Set up a response for the root path of the application
app.get('/', (req, res) => {
  const randomSentence = sentence()

  res.send(randomSentence)
})

// Set the application to listen a port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
