import express from 'express'
import index from './routes/index.js'
import plants from './routes/plants.js'
import plant from './routes/plant.js'
import workshops from './routes/workshops.js'
import duurzaamheid from './routes/duurzaamheid.js'
import contact from './routes/contact.js'
const server = express()

// Stel het poortnummer in
server.set('port', process.env.PORT || 8000)

// Stel de view engine in
server.set('view engine', 'ejs')
server.set('views', './views')

// Stel de public map in
server.use(express.static('public'))

server.use(express.json())
server.use(express.urlencoded({ extended: true }))

server.use(index)
server.use(plants)
server.use(workshops)
server.use(duurzaamheid)
server.use(plant)
server.use(contact)
// Start met luisteren
server.listen(server.get('port'), () => {
  console.log(`Application started on http://localhost:${server.get('port')}`)
})


