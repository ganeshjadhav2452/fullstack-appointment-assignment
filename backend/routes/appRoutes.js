const express = require('express')
const appController = require('../controllers/appControllers')
const router = express.Router()


router.post('/saveapp',appController.saveApp)

router.get('/getallapps',appController.fetchAllAppointments)

router.delete('/delete/:id',appController.deleteApp)

router.put('/edit/:id',appController.editApp)
module.exports = router