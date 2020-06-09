const router = require("express").Router();
const userController = require("../../controllers/userController");
var db = require("../../models");
var passportService = require("../../config/passport");
const passport = require("passport");

  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
// Matches with "/api/user"
router.route("/")
  .get(userController.findAllUsers)
  .post(userController.create);

router.post('/login',  passportService.authenticate("local.login"), (req,res)=>{
  console.log(req.user)
})
// Matches with "/api/users/:id"
router
  .route("/:id")
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);


router
  .route("/user/:user_id")
  .get(userController.findAllByUserId)


module.exports = router;