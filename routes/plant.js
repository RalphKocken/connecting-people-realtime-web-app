import express from 'express'

const BASE_URL = 'https://api.buurtcampus-oost.fdnd.nl/api/v1';

const plant = express.Router()

plant.get('/stekje', async function (request, response) {
    // console log request dat is gemaakt met de anchor
    // console.log(request)
  
    // nieuwe url gemaakt met daarachter de nodige data voor de API request (zoals id)
    const urlId = BASE_URL + '/stekjes?id=' + request.query.id
    // maak een nieuwe const en fetch nu de unieke stekje met de url + de meegegeven id
    const data = await fetch(urlId).then(response => response.json());
  
    response.render('plant', data)
  })

export default plant