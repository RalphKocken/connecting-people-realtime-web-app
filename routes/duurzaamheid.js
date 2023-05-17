import express from 'express'

const duurzaamheid = express.Router()
duurzaamheid.get('/duurzaamheid', (request, response) => {
    response.render('duurzaamheid')
})

export default duurzaamheid

