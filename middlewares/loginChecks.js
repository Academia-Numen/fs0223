const {check} = require('express-validator')
const checks = [
    check('email')
        .notEmpty().withMessage("el campo email es obligatorio")
        .isString().withMessage("el campo email debe ser tipo string")
        .isEmail().withMessage("el campo email tiene que poseer el formato de un mail"),
    check('password')
        .notEmpty().withMessage("el campo password es obligatorio")
        .isString().withMessage("el campo password debe ser un string")
]

module.exports = checks