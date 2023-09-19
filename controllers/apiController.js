const {Series} = require('../models/series')
const axios = require('axios')


class ApiController {
    testApi  (req/*request */, res/*response*/)  {
        res.send('Hello0000!') // response . send sirve para enviar contenido estatifo o texto plano 
    }
    async getApi  (req/*request */, res/*response*/)  {
        const list = await Series.find();
        res.status(200).json(list) // response . send sirve para enviar contenido estatifo o texto plano 
    }
    async postApi  (req/*request */, res/*response*/)  {
        try {
            const newSerie = new Series(req.body)
            await newSerie.save()
            res.status(201).json(newSerie)
        } catch (error) {
            res.status(400).json(error)
        }
    }
    putApi  (req/*request */, res/*response*/)  {
        res.status(201).send('Esto es un api put') // response . send sirve para enviar contenido estatifo o texto plano 
    }
    patchApi  (req/*request */, res/*response*/)  {
        res.status(404).send('Esto es una api patch') // response . send sirve para enviar contenido estatifo o texto plano 
    }
    deleteApi  (req/*request */, res/*response*/)  {
        res.status(204).send() // response . send sirve para enviar contenido estatifo o texto plano 
    }
    async busquedaPokemon  (req/*request */, res/*response*/)  {
        try {
            const {data,status} = await axios.get('https://pokeapi.co/api/v2/pokemon/ditt')
            res.json(status,data)
        } catch (error) {
            res.status(404).json({status: error.response.status, data: error.response.data})
        } 
    }
}


module.exports = new ApiController