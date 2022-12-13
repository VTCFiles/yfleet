import React, { useContext } from 'react'
import { BookApplointmentContext } from '../../Appcontext/AppContext'
import car from '../../assets/images/main/car.png'
import Text from '../../components/Text'

const Location = () => {
    const {setIsOpen} = useContext(BookApplointmentContext)
  return (
    <div className='px-4 md:px-10 lg:px-20 py-10 bg-[#506D82] '>
        <div className='flex items-center flex-col md:flex-row space-y-8 md:space-y-8'>
            <div className='flex-1 flex flex-col items-center md:items-start' >
                <h1 className='text-3xl lg:text-5xl py-4 font-bold flex flex-col items-center md:items-start relative md:w-max text-white '>
                    <span>Reservez une</span>
                    <Text text='location' />   
                </h1> 
                <p className='lg:text-lg font-light text-neutral-100 pr-8 text-sm md:text-base text-center md:text-start'>Vous êtes à la recherche d’un moyen sûr de déplacement? Optez pour un service de location dans la flotte de véhicule YFLEET.</p>
                <button className={`mt-4 text-sm px-6 py-3 text-red-500 rounded-lg w-max flex items-center space-x-2 bg-white`} onClick={()=> setIsOpen(true)}>
                    <span>Découvrir</span>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
                        </svg>
                    </span>
                </button>
            </div>
            <div className='flex-1'>
                <img src={car} alt="car" />
            </div>
        </div>
    </div>
  )
}

export default Location