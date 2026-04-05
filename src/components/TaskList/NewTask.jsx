import React from 'react'

const NewTask = ({data, onAccept}) => {
  return (
    <div><div className='flex-shrink-0 h-full w-[300px] bg-green-400 rounded-xl p-5'>
    <div className='flex justify-between items-center'>
    <h3 className='bg-red-600 px-3 py-1 text-sm rounded'>{data.category}</h3>
    <h4 className='text-black'>{data.date}</h4>
    </div>
    <h2 className='mt-5 text-2xl font-semibold'>{data.title}</h2>
    <p className='text-sm mt-2'>{data.description}</p>
    <div className="mt-4">
        <button onClick={onAccept} className='bg-emerald-700 text-white py-1 px-3 text-sm rounded'>Accept Task</button>
    </div>
</div ></div>
  )
}

export default NewTask