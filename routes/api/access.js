const router = require("express").Router();
const accessController = require("../../controllers/accessController");

// Matches with "/api/access"
router.route("/")
    .post(accessController.create);

// Matches with "/api/access/:id"
router
    .route("/:owner_user_id")
    .get(accessController.findAllByOwnerUserId)
    .delete(accessController.remove);


router
    .route("/:uid/:pid")
    .get(accessController.findAllBySitterId)
    .delete(accessController.remove)
    .put(accessController.setSitter)

module.exports = router;
