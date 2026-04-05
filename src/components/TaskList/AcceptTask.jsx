import React from 'react'

const AcceptTask = ({data, onComplete, onFail}) => {
  return (
    <div><div className='flex-shrink-0 h-full w-[300px] bg-red-400 rounded-xl p-5'>
    <div className='flex justify-between items-center'>
    <h3 className='bg-red-600 px-3 py-1 text-sm rounded'>{data.category}</h3>
    <h4 className='text-black'>{data.date}</h4>
    </div>
    <h2 className='mt-5 text-2xl font-semibold'>{data.title}</h2>
    <p className='text-sm mt-2'>{data.description}</p>
    <div className='flex justify-between mt-4'>
    <button onClick={onComplete} className='bg-green-500 py-1 px-2 text-sm'>Mark as Completed</button>
    <button onClick={onFail} className='bg-red-500 py-1 px-2 text-sm'>Mark as Failed</button>
    </div>
</div >

    </div>

  )
}

export default AcceptTask