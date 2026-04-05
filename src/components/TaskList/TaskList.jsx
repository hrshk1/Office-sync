import React, { useContext } from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'
import { AuthContext } from '../../context/AuthProvider'

const TaskList = ({data}) => {
    const [userData, setUserData] = useContext(AuthContext)

    const getTaskNumbers = (tasks) => {
        return tasks.reduce(
            (acc, task) => {
                if (task.active) acc.active += 1
                if (task.newTask) acc.newTask += 1
                if (task.completed) acc.completed += 1
                if (task.failed) acc.failed += 1
                return acc
            },
            { active: 0, newTask: 0, completed: 0, failed: 0 }
        )
    }

    const updateTaskStatus = (taskIndex, nextStatus) => {
        if (!userData) return

        const updatedUsers = userData.map((employee) => {
            if (employee.email !== data.email) return employee

            const updatedTasks = employee.tasks.map((task, index) => {
                if (index !== taskIndex) return task

                if (nextStatus === 'accept') {
                    return { ...task, newTask: false, active: true, completed: false, failed: false }
                }
                if (nextStatus === 'complete') {
                    return { ...task, newTask: false, active: false, completed: true, failed: false }
                }
                if (nextStatus === 'fail') {
                    return { ...task, newTask: false, active: false, completed: false, failed: true }
                }

                return task
            })

            return {
                ...employee,
                tasks: updatedTasks,
                taskNumbers: getTaskNumbers(updatedTasks)
            }
        })

        setUserData(updatedUsers)
        localStorage.setItem('employees', JSON.stringify(updatedUsers))
    }

    return (
        <div id='tasklist' className='w-full py-5 mt-10 h-[50%] flex items-center justify-start gap-5 flex-nowrap overflow-x-auto'>
            {data.tasks.map((e,idx)=>{
               if(e.active){
                return <AcceptTask key={idx} data={e} onComplete={() => updateTaskStatus(idx, 'complete')} onFail={() => updateTaskStatus(idx, 'fail')} />
               }
               if(e.newTask){
                return <NewTask key={idx} data={e} onAccept={() => updateTaskStatus(idx, 'accept')} />
               }
               if(e.completed){
                return <CompleteTask key={idx} data={e}/>
               }
               if(e.failed){
                return <FailedTask key={idx} data={e}/>
               }
            })}
            
            
            </div>
    )
}

export default TaskList