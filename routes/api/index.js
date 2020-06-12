const router = require("express").Router();
const plantRoutes = require("./plants");
const userRoutes = require("./users");
const accessRoutes = require("./access");
const searchRoutes = require("./plantSearch")
// Plant routes
router.use("/plants", plantRoutes);
router.use("/users", userRoutes);
router.use("/access", accessRoutes);
router.use("/search", searchRoutes)
module.exports = router;
