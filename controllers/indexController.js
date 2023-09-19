const indexController = (req/*request */, res/*response*/) => {
    res.send('Hello World!') // response . send sirve para enviar contenido estatifo o texto plano 
}

module.exports = { indexController }