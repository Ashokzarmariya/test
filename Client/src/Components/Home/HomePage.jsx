import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { reqUser } from '../../Redux/Authentication/Action';
import Navbar from '../Navbar/Navbar'

const HomePage = () => {
 const dispatch = useDispatch();
 const navigate = useNavigate();
 const { user } = useSelector((store) => store)
 
 useEffect(() => {
   const token=localStorage.getItem("token")
   dispatch(reqUser(token))
  
 }, [])
 
  return (
    <div>
    <Navbar name={user.reqUser?.name}/>
    
    </div>
  )
}

export default HomePage
