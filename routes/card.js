const router = require('express').Router();
const {createCard} = require('../controllers/card')
router.post('/', createCard)

module.exports = router
