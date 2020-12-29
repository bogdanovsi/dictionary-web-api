const Definition = require('../models/definition')

exports.getAllDefinition = (req, res) => {
	Definition.find().then((items) => {
		res.status(200).json(items)
	}).catch((err) => {
		res.status(400).json({
			error: err,
		})
	})
}

exports.getOneDefinition = (req, res) => {
	Definition.findOne({ title: req.params.title }).then((item) => {
		res.status(200).json(item)
	}).catch((err) => {
		res.status(400).json({
			error: err,
		})
	})
}

exports.createDefinition = (req, res) => {
	const def = new Definition({
		title: req.body.title,
		description: req.body.description
	})
	def.save().then(() => {
		res.status(201).json({
			message: 'Successfully save definition',
		})
	}).catch((err) => {
		res.status(400).json({
			error: err,
		})
	})
}

exports.deleteDefinition = (req, res) => {
	console.log(req.params);
	Definition.deleteOne({ title: req.params.title }).then(() => {
		res.status(200).json({
			message: 'Successfully deleted definition',
		})
	}).catch((err) => {
		res.status(400).json({
			error: err,
		})
	})
}