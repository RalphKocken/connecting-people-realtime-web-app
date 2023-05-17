import express from 'express'

import { fetchJson } from '../helpers/fetchWrapper.js'

dotenv.config()
const API_URL = 'https://api.buurtcampus-oost.fdnd.nl/api/v1';
const index = express.Router()
// Maak een route voor de index
index.get('/', async (request, response) => { 
   const urlStekjes = API_URL + '/stekjes?first=3'
   const data = await fetch(urlStekjes).then(response => response.json());
 
   response.render('index', data)
      })  
export default index
