const mongoose = require("mongoose");
var validateEmail = function (email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter your name!"],
        minlength: [3, "Name must be a minimum of 3 characters!"]
    },
    email: {
        type: String,
        required: [true, "Please enter your email!"],
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    message: {
        type: String,
        required: [true, "Message is required!"],
        minlength: [5, "Message must be a minimum of 5 characters!"]
    },
})

module.exports = {
    User: mongoose.model('User', UserSchema),
}