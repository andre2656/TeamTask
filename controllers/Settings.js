const db = require("../models");

module.exports = {
    createSettings: function (req, res) {
        db.Settings.Create({
            email: req.body.email,
        })
            .then(dbModel => {
                res.json(dbModel);
            });
    }
};