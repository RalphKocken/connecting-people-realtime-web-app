import express from 'express'

const tuinieren = express.Router()
tuinieren.get('/tuinieren', async function (request, response) {
    response.render('tuinieren')
  })

export default tuinieren