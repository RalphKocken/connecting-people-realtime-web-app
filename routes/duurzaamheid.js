import express from 'express'

dotenv.config()

const duurzaamheid = express.Router()
duurzaamheid.get('/duurzaamheid', (request, response) => {
    response.render('duurzaamheid')
})

export default duurzaamheid

