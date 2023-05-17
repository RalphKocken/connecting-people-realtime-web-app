import express from 'express'

dotenv.config()

const BASE_URL = 'https://api.buurtcampus-oost.fdnd.nl/api/v1';

const plants = express.Router()
// Maak een route voor de index
plants.get('/plants', async (request, response) => {

    // voeg base url toe met stekjes = stekjes url
    const urlStekjes = BASE_URL + '/stekjes'

    const data = await fetch(urlStekjes).then(response => response.json());

    console.log(data)

    response.render('plants', data)
})

export default plants