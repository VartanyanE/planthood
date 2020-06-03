const router = require("express").Router();
const plantController = require("../../controllers/plantController");

// Matches with "/api/books"
router.route("/")
    .post(plantController.create);

// Matches with "/api/books/:id"
router
    .route("/:id")
    .get(plantController.findById)
    .put(plantController.update)
    .delete(plantController.remove);


router
    .route("/:user_id")
    .get(plantController.findAllByUserId)


module.exports = router;
