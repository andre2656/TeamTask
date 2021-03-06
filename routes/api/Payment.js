const router = require("express").Router();
const Payment = require("../../controllers/Payment");
const db = require("../../models");
// const stripe = require("stripe")("sk_test_Z0pBJjfsDeS7oveij5bkKQZK00rUl2BdOQ");
router.post("/payments", (req, res) => {
    db.Payment.create({
        email: req.body.email,
        cardholderName: req.body.cardholderName,
        cvv: req.body.cvv,
        cardNumber: req.body.cardNumber,
        month: req.body.month,
        year: req.body.year,
    }).then(() => {
        res.json({ message: "Card Saved" });
    })
});
router.get('/premium', (req, res) => {
    db.Payment.findAll({
        where: { email: req.query.email }
    }).then(premium => {
        if (!premium){
            res.json(premium)
        }else{
            res.json(premium)
        }
        
    })
})


module.exports = router;