const { Router } = require("express");
const authenticate = require("../middleware/authenticate");
const User = require("../modal/user.modal");
const router = Router();


router.get("/req_user", authenticate, async (req, res) => {
  try {
    const user = await req.user;
    const currentUser = await User.findById(user.user._id).lean().exec();
    console.log(user.user);
    user.user.password = null;
    currentUser.password = null;
console.log("cureent user",currentUser)
    return res.status(200).send(currentUser);
  } catch (error) {
    return res.status(401).send(error.message);
  }
});

router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    return res.status(200).send(users).select("-password");
  } catch (error) {
    return res.status(500).send({ "get user error": error });
  }
});

router.get('/:userId',authenticate, async (req, res) => {
 try {
  const user = await User.findById(req.params.userId).select("-password");
  
  return res.status(200).send(user)
 } catch (error) {
  return res.status(500).send({"get single user error": error})
 }
})


module.exports=router