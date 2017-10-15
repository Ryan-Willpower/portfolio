const 	express 	= require("express"),
		sass		= require("node-sass-middleware")
    	app 		= express()

const index = require("./routes/index")

const setup = {
	src: './public',
	dst: './public',
	indentedSyntax: true,
	debug: true
}

app.use(sass(setup))

app.use(express.static('public'))

app.set('view engine', 'pug')

app.get('/', index)

module.exports = app