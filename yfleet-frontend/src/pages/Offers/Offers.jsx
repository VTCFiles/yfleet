import React, { useContext, useEffect } from 'react'
import Layout from '../../components/Layout'
import Text from '../../components/Text'
import happy from '../../assets/images/offer/happy.png'
import img1 from '../../assets/images/offer/img1.png'
import img2 from '../../assets/images/offer/img2.png'
import img3 from '../../assets/images/offer/img3.png'
import { AppContext, BookApplointmentContext } from '../../Appcontext/AppContext'

const Offers = () => {
    const {setCurrPage} = useContext(AppContext)
    const {setIsOpen} = useContext(BookApplointmentContext)
    useEffect(()=>{
        setCurrPage('offres')
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
  return (
    <Layout>


        <section className='px-4 md:px-10 lg:px-20 md:py-10  '>
            <div className='flex items-center md:space-x-10 flex-col md:flex-row space-y-4'>
                <div className='flex-1 order-2 md:order-1 flex flex-col items-center md:items-start' >
                    <h1 className='text-3xl lg:text-5xl py-4 font-bold text-gray-700 relative w-full md:w-max flex space-x-2 items-center md:items-start'>
                        <span>Devenez </span>
                        <Text text='chauffeur' />   
                    </h1> 
                    <p className='text-gray-600 font-light text-sm md:text-base text-center md:text-start'>Vous êtes à la recherche d’un moyen sûr de déplacement? Optez pour un service de location dans la flotte de véhicule YFLEET.</p>
                    <button className={`mt-4 text-sm px-6 py-3 border border-red-500 rounded-lg w-max flex items-center space-x-2 text-red-500 bg-white`} onClick={()=>setIsOpen(true)}>
                        <span>Reservez une location</span>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
                            </svg>
                        </span>
                    </button>
                </div>
                <div className='flex-1 order-1 md:order-2'>
                    <img src={happy} alt="happy" />
                </div>
            </div>
        </section>
       
        <section className='px-4 md:px-10 lg:px-20 py-10 mt-10 md:mt-0 md:my-20'>
            <div className='flex items-center md:space-x-10 flex-col md:flex-row space-y-4'>
                <div className='flex-1'>
                    <img src={img3} alt="woman" />
                </div>
                <div className='flex-1 flex flex-col items-center md:items-start' >
                    <h1 className='text-3xl lg:text-5xl py-4 font-bold text-center text-gray-700 relative w-full md:w-max  flex flex-col items-center md:items-start'>
                        <span>Mettez votre </span>
                        <span> véhicule à </span>
                        <Text text='disposition' />   
                    </h1> 
                    <p className='text-gray-600 font-light text-sm md:text-base text-center md:text-start'> Vous êtes à la recherche d’un moyen sûr de déplacement? Optez pour un service de location dans la flotte de véhicule YFLEET. </p>
                    <button className={`mt-4 text-sm px-6 py-3 border border-red-500 rounded-lg w-max flex items-center space-x-2 text-red-500 bg-white`} onClick={()=>setIsOpen(true)}>
                        <span>Reservez une location</span>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
                            </svg>
                        </span>
                    </button>
                </div>
            </div>
        </section>


        <section className='px-4 md:px-10 lg:px-20 md:py-10  '>
            <div className='flex items-center md:space-x-10 flex-col md:flex-row space-y-4'>
                <div className='flex-1 order-2 md:order-1 flex flex-col items-center md:items-start' >
                    <h1 className='text-3xl lg:text-5xl py-4 font-bold text-gray-700 relative w-full md:w-max flex space-x-2 items-center md:items-start'>
                        <span>Devenez  </span>
                        <Text text='propriétaire' />   
                    </h1> 
                    <p className='text-gray-600 font-light text-sm md:text-base text-center md:text-start'>Vous êtes à la recherche d’un moyen sûr de déplacement? Optez pour un service de location dans la flotte de véhicule YFLEET.</p>
                    <button className={`mt-4 text-sm px-6 py-3 border border-red-500 rounded-lg w-max flex items-center space-x-2 text-red-500 bg-white`} onClick={()=>setIsOpen(true)}>
                        <span>Reservez une location</span>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
                            </svg>
                        </span>
                    </button>
                </div>
                <div className='flex-1 order-1 md:order-2'>
                    <img src={img2} alt="happy" />
                </div>
            </div>
        </section>
       
        <section className='px-4 md:px-10 lg:px-20 py-10 mt-10 md:mt-0 md:my-20'>
            <div className='flex items-center md:space-x-10 flex-col md:flex-row space-y-4'>
                <div className='flex-1'>
                    <img src={img1} alt="woman" />
                </div>
                <div className='flex-1 flex flex-col items-center md:items-start' >
                    <h1 className='text-3xl lg:text-5xl py-4 font-bold text-center text-gray-700 relative w-full md:w-max  flex flex-col items-center md:items-start'>
                        <span>Reservez une  </span>
                        <Text text='location' />   
                    </h1> 
                    <p className='text-gray-600 font-light text-sm md:text-base text-center md:text-start'> Vous êtes à la recherche d’un moyen sûr de déplacement? Optez pour un service de location dans la flotte de véhicule YFLEET. </p>
                    <button className={`mt-4 text-sm px-6 py-3 border border-red-500 rounded-lg w-max flex items-center space-x-2 text-red-500 bg-white`} onClick={()=>setIsOpen(true)}>
                        <span>Reservez une location</span>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
                            </svg>
                        </span>
                    </button>
                </div>
            </div>
        </section>

    </Layout>
  )
}

export default Offers