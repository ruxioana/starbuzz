// import express from 'express' // es6 module
const express = require('express') // node.js module

// cream serverul si setam portul
const server = express()
const port = 3000

const message = { message: 'hello from the other side!' }

// configuram rutele
server.get('/hello', (request, response) => response.send(message))
server.get('/test', (request, response) => response.send({message: 'this is just a test'}))

// pornim serverul
server.listen(
    port, 
    () => console.log(`Server started on http://localhost:${port}`)
)