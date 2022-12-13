import React, { useState } from 'react'
import profile from '../../../assets/images/blog/profile.png'

const AdminNavBar = ({setSideNav}) => {
    const [notif, setNotif] = useState(false)
  return (
    <div className='flex flex-col px-8 py-6 border-b bg-white '>
        <div className='flex w-full'>
            <span className='cursor-pointer flex-none' onClick={()=>setSideNav(curr => !curr)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                </svg>
            </span>
            {/* space */}
            <div className='flex-auto'></div>
            <div className='flex items-center flex-none space-x-8 '>
                {/* search */}
                <div className='hidden md:flex items-center border rounded overflow-hidden divide-x bg-neutral-100 divide-gray-300 py-1 px-1'>
                    <span className='px-4'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                        </svg>
                    </span>
                    <input type="text" className='outline-none focus:outline-none border-0 h-8 bg-neutral-100' />
                </div>
            
                {/* notification */}
                <div className=''>
                    <div className='relative cursor-pointer' onClick={()=>setNotif(curr=>!curr)}>
                        <span className=' text-gray-800'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-bell" viewBox="0 0 16 16">
                                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"/>
                            </svg>
                        </span>
                        <div className='absolute -top-1 -right-2 h-[18px] w-[18px] rounded text-xs text-white bg-red-500 flex items-center justify-center'>2</div>
                    </div>
                </div>

                {/* profile */}
                <div className='h-8 w-8 rounded-md bg-neutral-200 shadow-md '>
                    <img src={profile} alt="profile" className='h-full w-full' />
                </div>

            </div>

            {notif && <div className='absolute bg-white rounded top-20 z-10 px-4 py-4 right-1 md:w-[300px] shadow-lg'>
                <div className='flex justify-end'>
                    <span className='cursor-pointer' onClick={()=>setNotif(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                        </svg>
                    </span>
                </div>
                <div className='flex justify-between items-center py-2 border-b'>
                    <h4 className='text-gray-700 font-normal'>Notification</h4>
                    {/* <p className='text-xs md:text-sm border-b cursor-pointer'>3</p> */}
                </div>
                <div>
                    <Card 
                        title="You have been accepted for an interview"
                        date="Sep 23, 2022 at 09:15am"
                        color="bg-blue-700"
                    />
                    <Card 
                        title="You have been accepted for an interview"
                        date="Sep 23, 2022 at 09:15am"
                        color="bg-green-700"
                    />
                    <Card 
                        title="You have been accepted for an interview"
                        date="Sep 23, 2022 at 09:15am"
                        color="bg-blue-700"
                    />
                    <div className='mt-4 text-gray-500 text-sm'>
                        <p><span className='text-orange-500 mr-2 cursor-pointer'>All</span>Notifications</p>
                    </div>
                </div>
            </div>}
        </div>
        <div className='flex md:hidden mt-4 items-center border rounded overflow-hidden divide-x bg-neutral-100 divide-gray-300 py-1 px-1'>
            <span className='px-4'>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                </svg>
            </span>
            <input type="text" className='outline-none focus:outline-none border-0 h-8 bg-neutral-100' />
        </div>
    </div>
  )
}

export default AdminNavBar


function Card({title, date, color}){
    return (
        <div className='flex items-start border-b py-4 space-x-2'>
            <div className='my-1'><div className={`h-[10px] w-[10px] rounded-full ${color}`}></div> </div>
            <div>
                <h5 className='text-sm text-gray-700'>{title}</h5>
                <p className='text-xs text-gray-500 mt-2'>{date}</p>
            </div>
        </div>
    )
}
