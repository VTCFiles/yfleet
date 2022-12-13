import React, { useContext } from 'react'
import Text from '../../components/Text'
import woman from '../../assets/images/main/woman.png'
import girl from '../../assets/images/main/girl.png'
import { BookApplointmentContext } from '../../Appcontext/AppContext'

const Service = () => {
    const {setIsOpen} = useContext(BookApplointmentContext)
  return (
    <>
        <section className='px-4 md:px-10 lg:px-20 py-10 mt-10 md:mt-0 md:my-20'>
            <div className='flex items-center md:space-x-10 flex-col md:flex-row space-y-4'>
                <div className='flex-1'>
                    <img src={woman} alt="woman" />
                </div>
                <div className='flex-1' >
                    <h1 className='text-4xl lg:text-5xl py-4 font-bold text-center text-gray-700 relative w-full md:w-max  flex flex-col items-center md:items-start'>
                        <span>Service client</span>
                        <Text text='24h/24 - 7j/7' />   
                    </h1> 
                    <p className='text-gray-600 font-light text-sm md:text-base text-center md:text-start'>N’hésitez pas à contacter notre service client, disponible 24h/24 et 7j/7 pour répondre à toutes vos questions (appel, Facebook et Whatsapp).</p>
                    
                </div>
            </div>
        </section>

        <section className='px-4 md:px-10 lg:px-20 md:py-10  '>
            <div className='flex items-center md:space-x-10 flex-col md:flex-row space-y-4'>
                <div className='flex-1 order-2 md:order-1 flex flex-col items-center md:items-start' >
                    <h1 className='text-4xl lg:text-5xl py-4 font-bold text-gray-700 relative w-full md:w-max flex flex-col items-center md:items-start'>
                        <span>Prendre un </span>
                        <Text text='rendez-vous' />   
                    </h1> 
                    <p className='text-gray-600 font-light text-sm md:text-base text-center md:text-start'>Vous voulez en savoir plus sur nos offres et services et/ou parler de vive voix à un responsable YFLEET? Nous sommes ouvert!</p>
                    <button className={`mt-4 text-sm px-6 py-3 bg-red-500 rounded-lg w-max flex items-center space-x-2 text-white`} onClick={()=> setIsOpen(true)}>
                        <span>Prendre un Rendez-vous</span>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
                            </svg>
                        </span>
                </button>
                </div>
                <div className='flex-1 order-1 md:order-2'>
                    <img src={girl} alt="girl" />
                </div>
            </div>
        </section>

        <section className='px-4 md:px-10 lg:px-20 py-10  flex flex-col items-center'>
            <div className='flex-1 flex flex-col items-center'>
                <h1 className='text-4xl lg:text-5xl text-gray-700 font-bold text-center relative w-max mt-8 flex items-center space-x-2'>
                    <Text text='Trucs et astuces' />   
                </h1> 
                <p className='font-light text-gray-700 py-4 text-center'>Découvrez quelques astuces qui vous permettront de mieux gérer votre voiture, sa <br className='hidden md:block' /> conduite et sa consommation</p>
            </div>
            <a href="/blog">
                <button className={`mt-6 text-sm px-6 py-3 bg-red-500 rounded-lg w-max flex items-center space-x-2 text-white`}>
                    <span>Trucs et astuces</span>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
                        </svg>
                    </span>
                </button>
            </a>
        </section>
    </>
  )
}

export default Service