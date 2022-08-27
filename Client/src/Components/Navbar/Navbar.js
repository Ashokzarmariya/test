/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout, reqUser } from '../../Redux/Authentication/Action';

const Navbar = ({name}) => {
 const dispatch = useDispatch();
 const navigate = useNavigate();
 
 
 useEffect(() => {
   const token=localStorage.getItem("token")
   dispatch(reqUser(token))
 }, [])
 
 const handleLogout = () => {
  dispatch(logout())
  navigate('/signup')
 }
  return (
    <div>
    <div className='flex justify-between px-10 py-4 bg bg-teal-800 text-white'>
     <p>{name.toUpperCase()}</p>
     <p className='cursor-pointer' onClick={handleLogout}>LOGOUT</p>
      </div>
    </div>
  )
}

export default Navbar
