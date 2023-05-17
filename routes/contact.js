import express from 'express'

const contact = express.Router()
contact.get('/contact', (request, response) => {
    response.render('contact')
})

export default contact
