const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config({
	path: './.env'
});

const app = express();

mongoose.connect(process.env.DATABASE_URL, {
	useUnifiedTopology: true,
	useNewUrlParser: true,
	useFindAndModify: true
});

// Setting
app.use(express.static(__dirname + '/project/dist/project'));

app.use(express.json());
app.use(
	express.urlencoded({
		extended: true
	})
);

require('./server/config/routes.js')(app);

// Localhost
app.listen(process.env.PORT || 8000);