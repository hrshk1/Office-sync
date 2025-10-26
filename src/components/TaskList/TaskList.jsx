import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {
    // console.log(data)
    return (
        <div id='tasklist' className='w-full py-5 mt-10 h-[50%] flex items-center justify-start gap-5 flex-nowrap overflow-x-auto'>
            {data.tasks.map((e,idx)=>{
               if(e.active){
                return <AcceptTask key={idx} data={e}/>
               }
               if(e.newTask){
                return <NewTask key={idx} data={e}/>
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