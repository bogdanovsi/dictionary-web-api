const mongoose = require('mongoose')

const definitionSchema = new mongoose.Schema({
	title: { type: String, unique: true, required: true },
	description: { type: String, required: true }
})

module.exports = mongoose.model('Definition', definitionSchema)