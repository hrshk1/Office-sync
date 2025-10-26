import React, { useEffect, useState } from 'react'
import Login from '../Auth/Login'

const Header = (props) => {
  const [username, setusername] = useState('')
  
  useEffect(() => {
    if (!props.data) {
      setusername('Admin');
    } else {
      setusername(props.data.firstname);
    }
  }, [props.data]);
  const logOutUser=()=>{
    localStorage.setItem('loggedInUser','')
    props.changeUser('')
    console.log(props.changeUser)
    // window.location.reload();
    //why are we reloading the windows?
    //because this function will simply set the value of loggedInUser as empty string but now the browser should come to know that the value of loggedinuser has changed for which we should reload the window
    
  }
  
  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold'>{username}👋</span> </h1>
        <button className='bg-red-600 text-white px-5 py-2 rounded-sm text-lg font-medium' onClick={logOutUser}>Log Out </button>
    </div>
  )
}

export default Header
//you cannot directly create a function and name <Login/> in it or inside onclick because you have to write these things only in app 