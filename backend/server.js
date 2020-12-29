const http = require('http')
const app = require('./app')
const mongoose = require('mongoose')
require('dotenv').config()

const port = 3000

const connectMongoose = () => {
	const mongoURL = `mongodb://${process.env.HOST}:27017/dictionary`

	mongoose
		.connect(mongoURL, { useNewUrlParser: true })
		.then(() => console.log(`MongoDB Connected ${mongoURL}`))
		.catch(err => {
			console.log(err)
			setTimeout(connectMongoose, 3000);
		})
}
connectMongoose();

const server = http.createServer(app)

server.listen(port, (err) => {
	if (err) {
		console.error(err)
	}
	console.log('Server is running on port ' + port)
})