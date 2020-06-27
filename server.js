const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config();
var MONGODB_URI = process.env.MONGODB_URL || "mongodb://localhost/Hiring";

const options = {
	useNewUrlParser: true,
	useCreateIndex: true,
	useFindAndModify: false,
	family: 4 // Use IPv4, skip trying IPv6
};
const app = express();

mongoose.connect(MONGODB_URI, options)

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