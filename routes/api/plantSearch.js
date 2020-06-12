const router = require("express").Router();
const plantController = require("../../controllers/plantSearchController");

// Matches with "/api/plants"
router.route("/")
    .get(plantController.findAll)

// Matches with "/api/plants/:id"
router
    .route("/:id")
    .get(plantController.findById)

router
    .route("/browse/:common_name")
    .get(plantController.findByCommonName)


module.exports = router;
