const express = require('express')
const definitionCtrl = require('../controllers/definitionCtrl')
const router = express.Router()

router.get('/', definitionCtrl.getAllTodos)
router.get('/:title', definitionCtrl.getOneTodo)
router.post('/', definitionCtrl.createTodo)
router.delete('/:title', definitionCtrl.deleteTodo)

module.exports = router