const router = require("express").Router();
const User = require('./User');
const Settings = require('./Settings');
const Payment = require('./Payment');
const Chat = require('./Chat');
const Admin = require ('./Admin');

/**
 * API routes 
 * Each call of `router.use` here defines a new sub path under `/api` that uses a new router.
 *   (Everything is under `/api` because `../routes/index.js` called `router.use("/api", apiRoutes);`)
 * 
 * Ex. This line will setup routes under `/api/login/` which may contain routes like `/api/login/authenticate`
 * (You would need to define loginRoutes, this is just an example)
 * `router.use("/login", loginRoutes);`
 */

// contains routes for `/api/motivation/`
// router.use("/motivation", motivationRoutes);
router.use('/Users', User);

router.use('/set', Settings);

router.use('/pay', Payment);

router.use('/chat', Chat);

router.use('/admin', Admin);

module.exports = router;