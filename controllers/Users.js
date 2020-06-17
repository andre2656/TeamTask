const db = require("../models");

module.exports = {
    createUser: function (req, res) {
        db.Users.Create({
                firstName: req.firstname,
                lastName: req.lastname,
                email: req.email,
                phone: req.phone,
                password: req.password
            })
            .then(dbModel => {
                res.json(dbModel);
            });
    }
};