import React, { useState } from 'react'

const Login = ({handleLogin}) => {
    //if you dont use curly brackets around handle login then it will imported in form of object otherwise it will imported as function 
    // console.log(handleLogin)

    //This is two way binding 
    //the vallue of input is given as email and in onchnage function we are using set email this is two way binding
    //we do two way binding to prevent interacting with the real dom

    //if you create a function in onsubmit it will by default return you e which you can pass on to submit handler which can be used to prevent default behaviour of reloading the page 
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    function submitHandler(e){
        e.preventDefault();
        
        console.log('Form Submitted')
        console.log('Email is: ',email)
        console.log('Password is: ',password)
        handleLogin(email,password)
        setemail('')
        setpassword('') //this will clear the input after clicking on submit
    }
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 border-emerald-600 p-20 rounded-xl'> 
            <form onSubmit={function(e){
                submitHandler(e);
            }}
            className='flex flex-col items-center justify-center'>
                <input 
                value={email}
                onChange={function(e){
                    setemail(e.target.value)
                }} 
                required className='border-2 border-emerald-600 rounded-full px-3 py-3 text-xl outline-none bg-transparent placeholder:text-gray-400' type="email" placeholder='Enter your email' />
                <input
                value={password}
                onChange={function(e){
                    setpassword(e.target.value)
                }}
                required className='mt-3 border-2 border-emerald-600 rounded-full px-3 py-3 text-xl  outline-none bg-transparent placeholder:text-gray-400' type="password" placeholder='Enter your password' />
                <button className='mt-3 border-none rounded-full px-3 py-3 text-xl text-white outline-none bg-emerald-600 placeholder:text-white'>Log in</button>
            </form>
        </div>
    </div>
  )
}

export default Login
//Functioning: using on change and setting values of email and password (basically, using two way binding), we will set the value of email and password and when form is submitted onsubmit attribute will run submitHandker function, the submit handler function will call handleLogin and pass email and password to it and since handleLogin has been passed as a prop in this jsx therefore it ewill call the parent jsx i.e App where this function will run
