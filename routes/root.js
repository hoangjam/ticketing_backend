// import the Express.js module
const express = require('express')

// create a new router object
const router = express.Router()

// import the built-in Node.js ‘path’ module
const path = require('path')

// set up a route handler for GET requests to the root URL '/' or '/index' or 'index.html'
// when a client makes a GET request to any of these URLs, server sends response index.html
router.get('^/$|/index(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'index.html'))
})

// export the router object
module.exports = router
