const router = require("express").Router();
const Settings = require("../../controllers/Settings");
const db = require("../../models");

router.post("/settings", (req, res) => {
    db.Settings.create({
        email: req.body.email,
    }).then(() => {
        res.json({message: "Settings Saved"});
    })
})





module.exports = router;