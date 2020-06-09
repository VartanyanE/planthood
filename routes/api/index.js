const router = require("express").Router();
const plantRoutes = require("./plants");
const userRoutes = require("./users");
const accessRoutes = require("./access");



// Plant routes
router.use("/plants", plantRoutes);
router.use("/users", userRoutes);
router.use("/access", accessRoutes);
module.exports = router;
