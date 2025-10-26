import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { setLocalStorage } from './utils/localStorage'
import { getLocalStorage } from './utils/localStorage'
import { AuthContext } from './context/AuthProvider'
const App = () => {
  const [userData, setUserData] = useContext(AuthContext)
  const [user, setUser] = useState(null)
  const [LoggedInUserData, setLoggedInUserData] = useState(null)
  useEffect(()=>{
    const loggedInUser = localStorage.getItem('loggedInUser')
    console.log(loggedInUser)

    if(loggedInUser){
      const userData=JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedInUserData(userData.data)
      // console.log(userData)
    }
  },[])
  // useEffect(() => {
  //   setLocalStorage()
  // },)
  // useEffect(() => {
  //   getLocalStorage()
  // },)
  // useEffect(() => {
  //   if (authdata){
  //     const loggedInUser = localStorage.getItem('LoggedInUser')
  //     if(loggedInUser){
  //       setUser(loggedInUser.role) 
  //     }
  //   }
  
  // }, [authdata])
  
  const handleLogin=(email,password)=>{
    if (email=='admin@me.com' && password =='123'){
      setUser('admin')
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))

    }
    else if(userData){ 
      const employee = userData.find((e)=>email==e.email && e.password == password)
      console.log(employee)
      if (employee){
        setUser('employee')
        setLoggedInUserData(employee)
        localStorage.setItem('loggedInUser',JSON.stringify({role:'employee', data:employee}))
      }
      
    }
    else{
      alert('Invalid Credentials')
    }
  }
  // handleLogin('user@me.com','123')
  
  
  //when you use find function then you get an e argument that iterates through all the elements 
  //find can be applied on arrays in js
  
  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : null}
      {user === "admin" ? <AdminDashboard changeUser={setUser}/> : user === "employee" ? <EmployeeDashboard changeUser={setUser} data={LoggedInUserData}/> : null}
    </>
  );}
  

export default App