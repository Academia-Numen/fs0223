const {User}= require('../models/user')
const bcrypt = require('bcryptjs')
const generadorJWT = require('../utils/generador')

class UserController {
    testApi  (req/*request */, res/*response*/)  {
        res.send('Hello0000!') // response . send sirve para enviar contenido estatifo o texto plano 
    }
    pruebaSession (req, res){
        const user = {
            id: "qwertyuiop1234567890",
            name: "juan",
        }
        req.session.user = user
        res.cookie('miPrimeraCookie',user.id,{ maxAge: 120000 })
        res.json(req.session)
    }
    test (req, res){
        res.json({session: req.session, cookie: req.cookies.session})
    }
    borrarSession (req, res){
        req.session.destroy()
        res.clearCookie('miPrimeraCookie')
        res.json({
            msg: "session cerrada"
        })
    }

    async login (req, res) {
        try {
            const persona = await User.findOne({email: req.body.email})
            if (persona == null) {
                return res.json({
                    msg: "la contraseña o el email son invalidos"
                })
            }
            if (!bcrypt.compareSync(req.body.password, persona.password)) {
                return res.json({
                    msg: "la contraseña o el email son invalidos"
                })
            }
            const usuario = {
                id: persona._id,
                nombre: persona.name
            }
            req.session.usuario = usuario
            if (req.body.remember) {
                res.cookie('session',req.session.usuario,{maxAge: 120000})
            }
            res.json({
                msg: "session creada"
            })

        } catch (error) {
            res.json(error)
        }
    }
    logout (req, res){
        req.session.destroy(),
        res.clearCookie('session')
        res.json({
            msg: "session cerrada"
        })
    }


    // tokens 
    generador (req, res){
        const token = generadorJWT(req.body)
        res.json({token})
    }

    pasoElToken (req, res) {
        res.send("el token es valido")
    }

    async loginJWT (req, res) {
        try {
            const persona = await User.findOne({email: req.body.email})
            if (persona == null) {
                return res.json({
                    msg: "la contraseña o el email son invalidos"
                })
            }
            if (!bcrypt.compareSync(req.body.password, persona.password)) {
                return res.json({
                    msg: "la contraseña o el email son invalidos"
                })
            }
            const token = generadorJWT({id: persona._id, name: persona.name})

            res.json({
                msg: "token generador",
                token
            })
           
        } catch (error) {
            res.json(error)
        }
    }


}


module.exports = new UserController