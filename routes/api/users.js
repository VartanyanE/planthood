const router = require("express").Router();
const userController = require("../../controllers/userController");
var db = require("../../models");
var passport = require("../../config/passport");
// const passport = require("passport");

// Using the passport.authenticate middleware with our local strategy.
// If the user has valid login credentials, send them to the members page.
// Otherwise the user will be sent an error
// Matches with "/api/user"
router.route("/").get(userController.findAllUsers).post(userController.create);

router.post("/login", passport.authenticate("local.login"), (req, res) => {
  if (req.user) {
    res.json({
      success: true,
      user: req.user,
    });
  } else {
    res.json({
      success: false,
    });
  }
});

router.post("/logout", function (req, res) {
  res.json({
    message: "hello",
  });
});
// Matches with "/api/users/:id"
router
  .route("/:id")
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);

router.route("/user/:user_id").get(userController.findAllByUserId);

router.put("/fav/add/:uId/:pId", ({ params: { uId, pId } }, res) => {
  console.log(uId);
  console.log(pId);
  db.User.findByIdAndUpdate(uId, { $push: { plants: pId } })
    .populate("plants")
    .then((data) => {
      console.log(data);
      return res.json(data);
    })
    .catch((err) => console.log(err));
});

router.put("/fav/remove/:uId/:pId", ({ params: { uId }, pId }, res) => {
  db.User.findByIdAndUpdate(uId, { $pull: { plants: pId } })
    .populate("plants")
    .then((data) => console.log(data));
});

module.exports = router;
