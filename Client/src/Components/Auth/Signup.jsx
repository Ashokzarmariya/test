/* eslint-disable react-hooks/exhaustive-deps */
import { TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


import { signup } from "../../Redux/Authentication/Action";
import "./Signup.css";

const Signup = () => {
  
  const navigate = useNavigate();
  const [inputData, setInputData] = useState({
    name:"",
    password: "",
    email: "",
  });
 const dispatch = useDispatch();
 const {user}=useSelector((store)=>store)

//dispatch signup action
  const handleSubmit = (event) => {
    event.preventDefault();
   console.log("data", inputData);
   dispatch(signup(inputData))
 };
 
 //set value in state
  const handleChange = (e) => {
    let { name, value } = e.target;
    setInputData((values) => ({ ...values, [name]: value }));
  };


  //redirect to login page if signup success
  useEffect(() => {
    if (user.isSignup) navigate("/login")
  }, [user.isSignup])
  
 

  return (
    <div className="container">
      
      <div className="signup">
        <h2 className="font-bold text-lg">Signup Page</h2>
        <form className="space-y-5" onSubmit={handleSubmit}>
        <div className="">
            <p className="my-5">Name</p>
            <TextField
              onChange={handleChange}
              value={inputData.name}
              id="outlined-basic"
              label="Name"
              variant="outlined"
              name="name"
              className="inputTag"
              required
              placeholder="Enter your Name"
            />
          </div>
          <div className="">
            <p className="my-5">Email</p>
            <TextField
              onChange={handleChange}
              value={inputData.email}
              id="outlined-basic"
              label="Email"
              variant="outlined"
              name="email"
              className="inputTag"
              required
              placeholder="Enter your Email"
            />
          </div>

          <div className="">
            <p className="my-5">Password</p>
            <TextField
              onChange={handleChange}
              value={inputData.password}
              name="password"
              className="inputTag"
              type="password"
              required
              placeholder="Secret Password"
              id="outlined-basic"
              label="Password"
              variant="outlined"
            />
          </div>

          <div>
            <input className="submit" type="submit" value={"Signup"} />
          </div>
        </form>
        <div onClick={() => navigate("/login")} className="already mt-5">
          <p> Have Account ?</p>
          <p className="togal">Login</p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
