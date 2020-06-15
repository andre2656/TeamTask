const router = require("express").Router();
const db = require("../../models");

router.get('/password', (req, res) => {
   res.json({password: 'AdminPassword'})
})




module.exports = router;