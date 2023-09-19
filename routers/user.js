const express = require('express');
const router  = express.Router();
const userController = require('../controllers/userController')
const auth = require('../middlewares/auth')
const checks = require('../middlewares/loginChecks')
const {validarChecks} = require('../middlewares/validarChecks')
const validarToken =require('../middlewares/validarToke');


router.get('/session', userController.pruebaSession)
router.get('/test',auth, userController.test)
router.get('/borrar', userController.borrarSession)
router.post('/login',checks,validarChecks, userController.login)
router.delete('/logout', userController.logout)
// metodo http , urn , middleware , callback

// tokens

router.post('/generador', userController.generador)
router.get('/validar', validarToken, userController.pasoElToken)
router.post('/loginjwt',checks,validarChecks, userController.loginJWT)



module.exports = router