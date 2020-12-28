const Definition = require('../models/definition')

exports.getAllTodos = (req, res) => {
	Definition.find().then((items) => {
		res.status(200).json(items)
	}).catch((err) => {
		res.status(400).json({
			error: err,
		})
	})
}

exports.getOneTodo = (req, res) => {
	Definition.findOne({ title: req.params.title }).then((item) => {
		res.status(200).json(item)
	}).catch((err) => {
		res.status(400).json({
			error: err,
		})
	})
}

exports.createTodo = (req, res) => {
	const Definition = new Definition({
		title: req.body.title,
		desctiption: req.body.desctiption
	})
	Definition.save().then(() => {
		res.status(201).json({
			message: 'Successfully save definition',
		})
	}).catch((err) => {
		res.status(400).json({
			error: err,
		})
	})
}

exports.deleteTodo = (req, res) => {
	Todo.deleteOne({ title: req.params.title }).then(() => {
		res.status(200).json({
			message: 'Successfully deleted definition',
		})
	}).catch((err) => {
		res.status(400).json({
			error: err,
		})
	})
}