import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { AppContext, ModalContext } from '../Appcontext/AppContext'
import logo from '../assets/logos/logo.png'

const NavBar = () => {
    const [toggle, setToggle] = useState(false)
    const {setIsOpen} = useContext(ModalContext)
    // const {setCurrPage} = useContext(AppContext)
  return (
    <div className='bg-white py-6 px-6 md:px-16 lg:px-20 flex items-center justify-between relative'>
        <div className='h-[2rem] md:h-[3rem]'>
            <img src={logo} alt="logo" className='h-full' />
        </div>
        <div className='hidden lg:inline'>
            <ul className='flex items-center text-lg text-gray-700 '>
                
                <DesktopItem 
                    nav="Accueil"
                    router='accueil'
                />
                <DesktopItem 
                    nav="A propos"
                    router='a-propos'
                />
                <DesktopItem 
                    nav="Offres"
                    router='offres'
                />
                <DesktopItem 
                    nav="Carrières"
                    router='carrieres'
                />
                <DesktopItem 
                    nav="blog"
                    router='blog'
                />
                <DesktopItem 
                    nav="contact"
                    router='contact'
                />

            </ul>
        </div>
        <div className='hidden lg:inline'>
            <button className='flex space-x-1 items-center text-white text-sm bg-red-500 px-4 py-3 rounded-lg' onClick={()=>setIsOpen(true)}>
                <span>Devenir Chauffeur</span>
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
                    </svg>
                </span>
            </button>
        </div>

        <button className='lg:hidden' onClick={()=>setToggle(curr => !curr)}>
             <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
            </svg>
        </button>
        {/* mobile view */}
        <div className={`absolute top-20 md:top-24 right-0 bg-white/80 z-50 lg:hidden transition-all duration-500 ${toggle? 'w-[20rem] sm:w-[23.5rem] md:w-[20rem]' : 'w-0 overflow-hidden'}`}>
            <div className=''>
                <ul className='flex flex-col text-lg text-gray-700 '>
                <MobileItem 
                    nav="Accueil"
                    router='accueil'
                />
                <MobileItem 
                    nav="A propos"
                    router='a-propos'
                />
                <MobileItem 
                    nav="Offres"
                    router='offres'
                />
                <MobileItem 
                    nav="Carrières"
                    router='carrieres'
                />
                <MobileItem 
                    nav="blog"
                    router='blog'
                />
                <MobileItem 
                    nav="contact"
                    router='contact'
                />

                </ul>
            </div>
            <div className=''>
                <button className='flex space-x-1 items-center justify-center w-full text-white text-sm bg-red-500 px-4 py-3' onClick={()=>{setToggle(false); setIsOpen(true); }}>
                    <span>Devenir Chauffeur</span>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
                        </svg>
                    </span>
                </button>
            </div>
        </div>
    </div>
  )
}

function DesktopItem ({nav, router}){
    const {currPage, setCurrPage} = useContext(AppContext)
    const route =  router === 'accueil'? "/" : `/${router}`
    return (
        <a href={route} onClick={()=> setCurrPage(router)}>
            <li className={`px-4 py-2 cursor-pointer transition-all duration-500 font-normal ${currPage === router? "text-red-600" : "hover:text-red-600"}`}>{nav}</li>
        </a>
    )
}

function MobileItem ({nav, router}){
    const {currPage, setCurrPage} = useContext(AppContext)
    const route =  router === 'accueil'? "/" : `/${router}`
    return (
        <a href={route} onClick={()=> setCurrPage(router)}>
            <li className={`border-b border-gray-300 px-4 py-2 cursor-pointer transition-all duration-500 font-normal ${currPage === router? "text-red-600" : "hover:text-red-600"}`}>{nav}</li>
        </a>
    )
}

export default NavBar