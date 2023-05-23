import index from './routes/index.js'
import plants from './routes/plants.js'
import plant from './routes/plant.js'
import workshops from './routes/workshops.js'
import duurzaamheid from './routes/duurzaamheid.js'
import contact from './routes/contact.js'
import tuinieren from './routes/tuinieren.js'

import * as path from 'path'
import { Server } from 'socket.io'
import express from 'express'
import http from "http"

const app = express()
const server = http.createServer(app)
const ioServer = new Server(server)

// Stel de public map in
app.use(express.static(path.resolve('public')))

// start van socket server
ioServer.on('connection', (client) => {
  console.log( client.id + ' user connected');

  // user disconnected
  client.on("disconnect", () =>{
    console.log( client.id + ' user disconnected')
  })

});

// Stel de view engine in
app.set('view engine', 'ejs')
app.set('views', './views')

app.use(express.json())
app.use(express.urlencoded({
  extended: true
}))

// gebruik maken van verschillende imports
app.use(index, plants, workshops, duurzaamheid, plant, contact, tuinieren)

// Start met luisteren
server.listen(8000, () => {
  console.log('listening on http://localhost:8000');
});