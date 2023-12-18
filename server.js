// import the Express.js module and create an Express.js application
const express = require('express')
const app = express()

// import the built-in Node.js ‘path’ module
const path = require('path')

// set the port on which the server will listen
const PORT = process.env.PORT || 3500

// tell the server to serve static files (HTML, CSS, and JS files) from the ‘public’ directory when the client navigates to the root URL (/).
app.use('/', express.static(path.join(__dirname, '/public')))

// import a router object from the ‘root’ module in the ‘routes’ directory and mounts it at the root URL (/)
app.use('/', require('./routes/root'))

// set up a catch-all route handler that responds with a 404 error when the client navigates to a URL that doesn’t match any of the defined routes
app.all('*', (req, res) => {
    res.status(404)
    if (req.accepts('html')){
        res.sendFile(path.join(__dirname, 'views', '404.html'))
    } else if (req.accepts('json')){
        res.json({message: '404 Not Found'})
    } else{
        res.type('txt').send('404 Not Found')
    }
})

// starts the server and makes it listen for requests on the specified port
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
