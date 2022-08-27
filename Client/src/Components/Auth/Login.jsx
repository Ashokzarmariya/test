/* eslint-disable react-hooks/exhaustive-deps */
import { TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Signup.css";
import { useDispatch,useSelector } from "react-redux";
import { login, reqUser } from "../../Redux/Authentication/Action";

const Login = () => {
 const dispatch = useDispatch();
 const navigate = useNavigate();
 const {user}=useSelector((store)=>store)
 const [inputData, setInputData] = useState({
   email: "",
    password: "",
    
 });
 
//set state data
  const handleChange = (e) => {
    let { name, value } = e.target;
    setInputData((values) => ({ ...values, [name]: value }));
 };
 
// dispatch login action
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(login(inputData))
 };
 
//if login redirect to login page
 useEffect(() => {
  if (user.isLogin) {
   const token=localStorage.getItem("token")
   dispatch(reqUser(token))
   navigate("/")
  }
 },[user.isLogin])

  return (
    <div className="container">
      <div className="signup">
        <h2 className="text-lg font-bold">Login Page</h2>
        <form className="" onSubmit={handleSubmit}>
          <div className="">
            <p className="my-5">Email</p>
            <TextField
              onChange={handleChange}
              value={inputData.email}
              placeholder="Enter your Email"
              id="outlined-basic"
              label="Email"
              variant="outlined"
              name="email"
              className="inputTag"
              required
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
              placeholder="Secret Password"
              id="outlined-basic"
              label="Password"
              variant="outlined"
              required
            />
          </div>

          <div>
            <input className="submit" type="submit" value={"Login"} />
          </div>
        </form>
        <div className="my-5 already">
          <p>Not Have Account ?</p>
          <p onClick={() => navigate("/signup")} className="togal">
            signup
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
