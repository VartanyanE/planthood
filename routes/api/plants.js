const router = require("express").Router();
const plantController = require("../../controllers/plantController");

// Matches with "/api/books"
router.route("/")
    .get(plantController.findAllByUserId)
    .post(plantController.create);

// Matches with "/api/books/:id"
router
    .route("/:id")
    .get(plantController.findById)
    .put(plantController.update)
    .delete(plantController.remove);

module.exports = router;
