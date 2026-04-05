import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'
const App = () => {
  const [userData] = useContext(AuthContext)
  const [user, setUser] = useState(null)
  const [LoggedInUserData, setLoggedInUserData] = useState(null)
  const [loggedInUserEmail, setLoggedInUserEmail] = useState(null)
  useEffect(()=>{
    const loggedInUser = localStorage.getItem('loggedInUser')
    console.log(loggedInUser)

    if(loggedInUser){
      const parsedUser = JSON.parse(loggedInUser)
      setUser(parsedUser.role)
      if (parsedUser.role === 'employee') {
        const email = parsedUser.email || parsedUser.data?.email
        setLoggedInUserEmail(email)
        if (parsedUser.data) {
          setLoggedInUserData(parsedUser.data)
        }
      }
    }
  },[])

  useEffect(() => {
    if (user === 'employee' && userData && loggedInUserEmail) {
      const currentEmployee = userData.find((employee) => employee.email === loggedInUserEmail)
      if (currentEmployee) {
        setLoggedInUserData(currentEmployee)
      }
    }
  }, [userData, loggedInUserEmail, user])
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
        setLoggedInUserEmail(employee.email)
        setLoggedInUserData(employee)
        localStorage.setItem('loggedInUser',JSON.stringify({role:'employee', email:employee.email}))
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
      {user === "admin" ? <AdminDashboard changeUser={setUser}/> : user === "employee" && LoggedInUserData ? <EmployeeDashboard changeUser={setUser} data={LoggedInUserData}/> : null}
    </>
  );}
  

export default App