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
ioServer.on('connection', ( socket ) => { 
  console.log( socket.server.engine.clientsCount + ' user connected'); 

  // disconnect
  socket.on("disconnect", () =>{
    console.log( socket.server.engine.clientsCount + ' user disconnected')
   
  })

  // active users afhandeling 
  socket.on('active-users', () =>{
    let count = socket.server.engine.clientsCount 

    ioServer.emit('active-users', count)
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