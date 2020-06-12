const {
    User
} = require('../models/users_model.js')

module.exports = {
    showUsers: (req, res) => {
        User.find()
            .then(data => {
                res.json({
                    message: "Success!",
                    data
                })
            })
            .catch(err => {
                res.json({
                    message: "Error!",
                    err
                })
            })
    },

    createUser: function (req, res) {
        User.create({
            name: req.body.name,
            email: req.body.email,
            message: req.body.message,
        }, function (err, data) {
            if (err) {
                res.json({
                    message: "Error!",
                    error: err,
                });
            } else {
                res.json({
                    message: "Success!",
                    added: true,
                    data: data
                });
            }
        })
    },

    oneUser: (req, res) => {
        User.find({
                _id: req.params.id,
            })
            .then(user_data => {
                res.json(user_data)
            })
            .catch(err => {
                res.json(err)
            })
    },

}