const express = require('express')
const definitionCtrl = require('../controllers/definitionCtrl')
const router = express.Router()

router.get('/', definitionCtrl.getAllDefinition)
router.get('/:title', definitionCtrl.getOneDefinition)
router.post('/', definitionCtrl.createDefinition)
router.delete('/:title', definitionCtrl.deleteDefinition)

module.exports = router