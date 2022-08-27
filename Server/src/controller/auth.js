const User = require("../modal/user.modal");
var jwt = require('jsonwebtoken');


const newToken = (user) => {
  return jwt.sign({ user: user }, process.env.SECERET_KEY);
}

const signup = async (req, res) => {
  try {
    const isEmailExist =await User.findOne({ email: req.body.email });

    if (isEmailExist)
    return res.status(400).send({ message: "This email is already exist" });

    let newUser = await User.create(req.body);
    let token = newToken(newUser);
    newUser.password = null;
    
    return res.status(201).send({ isAuth: true, newUser,token });
  } catch (error) {
    return res.status(501).send({"signup error ":error});
  }
};


const login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

  if (!user) return res.status(400).send({ message: "user not exist" })
  
  const match = user.comparePassword(req.body.password);;
  if (!match) return res.status(401).send({ message: "wrong password or email" });

    const token = newToken(user);
    user.password = null;
  return res.status(201).send({message:"login success",user,token})
  } catch (error) {
    return res.status(500).send({"login error":error})
  }
  

}






module.exports={signup,login}
