import React, { useContext } from 'react'
import shape from '../../assets/images/banner/shape.png'
import tick from '../../assets/images/banner/tick.png'
import happy from '../../assets/images/banner/happy.png'
import lines from '../../assets/images/banner/lines.png'
import { ModalContext } from '../../Appcontext/AppContext'

const Banner = () => {
    const {setIsOpen} = useContext(ModalContext)
  return (
    <div>
        <div className=' bg-red-500 relative h-[18rem] md:h-[25rem] lg:h-[30rem]'>
            <img src={lines} alt="lines" className='absolute h-[50%] md:h-full lg:h-max bottom-16 md:bottom-0'/>
            <div className='absolute top-0 lg:left-[10%] h-[18rem] md:h-[25rem] lg:h-[30rem] px-4 md:px-10 lg:px-20 flex flex-col justify-end'>
                <div className='flex items-center'>
                    <div className='text-white flex-1 w-full'>
                        <h2 className='text-2xl md:text-3xl lg:text-5xl font-bold'>Gagner plus d’argent <br className='hidden sm:block' /> avec YANGO</h2>
                        <p className='text-sm sm:text-base md:text-lg text-neutral-100 font-light py-2 lg:py-6'>Devenez chauffeur YFLEET et doublez vos <br className='hidden sm:block' /> revenus mensuels sans stress.</p>
                        <button className='hidden mt-2 md:mt-8 sm:flex space-x-1 items-center text-red-600 text-sm bg-white px-4 py-3 rounded-lg' onClick={()=>setIsOpen(true)}>
                            <span>Devenir Chauffeur</span>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
                                </svg>
                            </span>
                        </button>
                    </div>
                    <div className='flex flex-col justify-end flex-1 relative sm:self-end'>
                        <div className='sm:h-[14rem] md:h-[16rem] lg:h-[21rem] self-end '>
                            <img src={shape} alt="shape" className='h-full' />
                        </div>
                        <div className='sm:h-[16rem] md:h-[20rem] lg:h-[25rem] self-end absolute bottom-0 right-0'>
                            <div className='h-full relative'>
                                <img src={happy} alt="happy man" className='h-full '/>
                                <img src={tick} alt="tick" className='h-[1rem] md:h-[2rem] absolute  top-0 left-8 md:left-16 lg:left-20'/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='w-full mb-2 sm:hidden'>
                    <button className='mt-2 md:mt-8 flex space-x-1 items-center justify-center text-red-600 text-sm bg-white px-4 py-3 rounded-lg w-full sm:w-max' onClick={()=>setIsOpen(true)}>
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
    </div>
  )
}

export default Banner