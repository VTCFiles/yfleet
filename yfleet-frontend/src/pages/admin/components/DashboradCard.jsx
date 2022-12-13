import React from 'react'

const DashboradCard = ({increase, title, price, percentage, compairedTo}) => {
  return (
    <div className='border rounded-md shadow p-4 bg-white'>
        <div className='text-xs text-gray-500 flex items-center justify-between font-bold'>
            <p>{title}</p>
            <span className='cursor-pointer'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                    <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                </svg>
            </span>
        </div>
        <p className='text-center text-2xl font-bold my-4'> {price}</p>
        {percentage && <div className={`flex justify-center items-center space-x-1 text-xs font-bold ${increase? "text-green-500" : "text-red-500"}`}>
            <span>
                {increase && <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-arrow-up-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"/>
                </svg>}
                {!increase && <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-arrow-down-left" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2 13.5a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 0-1H3.707L13.854 2.854a.5.5 0 0 0-.708-.708L3 12.293V7.5a.5.5 0 0 0-1 0v6z"/>
                </svg>}
            </span>
            <p>{percentage} %</p>
        </div>}
        <p className='text-xs text-gray-500 text-center mt-4'>{compairedTo}</p>
    </div>
  )
}

export default DashboradCard