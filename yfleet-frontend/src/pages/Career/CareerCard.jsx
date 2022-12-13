import React from 'react'
import { Link } from 'react-router-dom'

const CareerCard = () => {
  return (
    <div className='w-full rounded-xl border p-6'>
        <div className='flex items-start md:space-x-6 flex-col md:flex-row space-y-3 md:space-y-0'>
            <div className='flex justify-center items-center p-4 border rounded-xl bg-neutral-50'>
                <span className='text-red-500'>
                     <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-briefcase" viewBox="0 0 16 16">
                    <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5zm1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0zM1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5z"/>
                    </svg>
                </span>
            </div>
            <div>
                <h2 className='text-bold'>Brand Marketing Manager</h2>
                <div className='flex md:items-center md:space-x-2 my-2 text-gray-600 text-sm flex-col md:flex-row'>
                    <p>À plein temps</p>
                    <p className='hidden md:inline'>.</p>
                    <p>Travailler depuis le bureau YFLEET</p>
                </div>
            </div>
        </div>
        <Link to={`/carrieres/1`}>
            <button className='rounded-lg text-white bg-red-500 px-4 py-2 mt-4 text-sm'>PLUS D'INFO</button>
        </Link>
        <div className='flex justify-between mt-4'>
            <button className='text-red-500 font-bold '>Douala</button>
            <p className='text-sm text-gray-600'>17 June, 2022</p>
        </div>
    </div>
  )
}

export default CareerCard