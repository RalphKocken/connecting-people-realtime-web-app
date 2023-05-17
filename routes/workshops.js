import express from 'express'

dotenv.config()

const workshops = express.Router()
workshops.get('/workshops', (request, response) => {
    response.render('workshops')
})

export default workshops