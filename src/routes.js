const express = require('express')
const persons = require('./controllers/users')

const router = express.Router()


router.post('/persons', persons.createUser)
router.get('/', persons.redirect)
router.get('/persons', persons.getUsers)
router.get('/persons/:id', persons.getUser)
router.patch('/persons/:id', persons.updateUser)
router.delete('/persons/:id', persons.deleteUser)

module.exports=router

