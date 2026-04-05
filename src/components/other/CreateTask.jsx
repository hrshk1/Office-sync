import React, { useContext, useState } from 'react'
import { getLocalStorage } from '../../utils/localStorage'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {
    const [userData, setUserData] = useContext(AuthContext)

    const [taskTitle, settaskTitle] = useState('')
    const [taskDate, settaskDate] = useState('')
    const [taskDescription, settaskDescription] = useState('')
    const [assignTo, setassignTo] = useState('')
    const [category, setcategory] = useState('')
    // Keep task shape aligned with task cards (title/date/description).
    
    const submitHandler =(e)=>{
        e.preventDefault();
        const newTask = {
            title: taskTitle,
            date: taskDate,
            description: taskDescription,
            category,
            active: false,
            completed: false,
            newTask: true,
            failed: false
        };

        const updatedUsers = userData.map((employee) => {
            if (assignTo === employee.firstname) {
                return {
                    ...employee,
                    tasks: [...employee.tasks, newTask],
                    taskNumbers: {
                        ...employee.taskNumbers,
                        newTask: employee.taskNumbers.newTask + 1
                    }
                }
            }
            return employee
        })

        setUserData(updatedUsers)
        localStorage.setItem('employees', JSON.stringify(updatedUsers))

        setassignTo('')
        setcategory('')
        settaskDate('')
        settaskDescription('')
        settaskTitle('')

    }
  return (
    <div><div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
    <form onSubmit={(e)=>{
        submitHandler(e);
    }} 
    className='flex flex-wrap w-full items-start justify-between'>
        <div className='w-1/2'>
            <div>
                <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                <input 
                value={taskTitle}
                onChange={(e)=>{
                    settaskTitle(e.target.value)
                }}
                className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Make a UI Desgin' /></div>


            <div><h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                <input 
                value={taskDate}
                onChange={(e)=>{
                    settaskDate(e.target.value)
                }}
                className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="date" /></div>
            <div>
                <h3 className='text-sm text-gray-300 mb-0.5'>Assign to</h3>
                <input
                value={assignTo}
                onChange={(e)=>{
                    setassignTo(e.target.value)
                }}
                className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Employee Name' />
            </div>
            <div><h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                <input 
                value={category}
                onChange={(e)=>{
                    setcategory(e.target.value)
                }}
                className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='design, dev etc' /></div>
        </div>
        <div className=' flex w-2/5 flex-col items-start'>
            <h3 className='text-sm text-gray-300 mb-0.5'>Desciption</h3>
            <textarea 
            value={taskDescription}
            onChange={(e)=>{
                settaskDescription(e.target.value)
            }}
            className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400 ' rows='5' name="" id=""></textarea>
            <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>Create Task</button>
        </div>

    </form>
</div></div>
  )
}

export default CreateTask