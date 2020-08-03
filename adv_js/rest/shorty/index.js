// import express from 'express' // es6 module
const express = require('express') // node.js module
const redis = require('redis')

// cream serverul si setam portul
const server = express()
const port = 3000

// cream cientul de redis
const client = redis.createClient()

// decodeaza body-ul request-ului in json 
server.use(express.json)

function shortify(request, response) {
    const longUri = request.body.longUri /* am luat din request uri pe care trebuie sa il transformam */
    // generam uri-ul scurt
    const shortUriId = Math.random().toString(16).subtr(2, 8) /* este uri-ul scurt */
    const shortUri = `http://localhost:${port}/uris/${shortUriId}`
    //salvam legatura intre shortUri si longUri in redis
    client.set(shortUri, longUri)
    // trimitem raspunsul cu uri-ul scurt
    response.send({shortUri})
}

function longify(request, response) {
    const shortUriId = request.params.shortUriId
    const shortUri = `http://localhost:${port}/uris/${shortUriId}`
    const longUri = client.get(shortUri, (error, longUri) => response.send({longUri}))
}

// configuram rutele
server.post('/uris', shortify)
server.get('/uris/:shortUriId', longify)

// pornim serverul
server.listen(
    port, 
    () => console.log(`Server started on http://localhost:${port}`)
)