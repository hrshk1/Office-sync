import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
    const [userData,setUserData] = useContext(AuthContext)
    // console.log(authData)
  return (
    <div  className='bg-[#1c1c1c] p-5 mt-5 rounded h-75  '>
        <div className=' mb-2 py-2 px-4 flex justify-between rounded'>
        <h2 className='w-1/5'>Employee Name</h2>
            <h3 className='w-1/5'>New Task</h3>
            <h5 className='w-1/5'>Active Task</h5>
            <h5 className='w-1/5'>Completed</h5>
            <h5 className='w-1/5'>Failed</h5>
            </div>
        <div id='alltask' className='h-[80%] overflow-auto '>    
        {userData.map(function(e,idx){
            return <div key={idx} id='alltask' className=' mb-2 py-2 px-4 flex justify-between rounded'>
            <h2 className='w-1/5'>{e.firstname}</h2>
            <h3 className='w-1/5 text-blue-600'>{e.taskNumbers.newTask} </h3>
            <h5 className='w-1/5 text-yellow-600'>{e.taskNumbers.active}</h5>
            <h5 className='w-1/5 text-green-600' >{e.taskNumbers.completed}</h5>
            <h5 className='w-1/5 text-red-600'>{e.taskNumbers.failed}</h5>
        </div>
        
        })}
        </div>
        
    </div>
  )
}

export default AllTask