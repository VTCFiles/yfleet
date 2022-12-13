import React, { useContext, useEffect } from 'react'
import { AppContext, ModalContext } from '../../Appcontext/AppContext'
import Layout from '../../components/Layout'

const CareerInfo = () => {
    const {setIsOpen} = useContext(ModalContext)
    const {setCurrPage} = useContext(AppContext)
    useEffect(()=>{
        setCurrPage('carrieres')
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
  return (
    <Layout>
        <div className='px-4 md:px-10 lg:px-20 md:w-[80%] mx-auto mb-12'>
            <h2 className='text-5xl text-red-500 text-center py-8 font-bold'>Carrières YFLEET</h2>
            <p className='text-lg text-gray-700'>Intéressé à travailler chez YFLEET? Nous recherchons actuellement la ressource suivante:</p>
            <p className='text-xl text-gray-800 py-4'>Chauffeur professionnel</p>
            <p className='text-gray-700 mb-2'>Vos fonctions comprennent</p>
            
            <div className='text-gray-700 space-y-1 font-light text-sm md:text-base'>
                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, magnam!</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit </li>
                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit </li>
                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit </li>
                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit </li>
                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit</li>
            </div>

            <h3 className='text-xl text-gray-800 py-8'>Nous recherchons</h3>
            <div className='text-gray-700 space-y-1 font-light text-sm md:text-base'>
                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, magnam!</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit </li>
                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit </li>
                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit </li>
                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit </li>
                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit</li>
            </div>

            <p className='py-4 text-gray-800'>Lieu: <span className='font-bold text-xl text-gray-600'>Douala</span></p>

            <p className='py-4'>Si vous êtes intéressé, cliquez <span className='text-xl text-red-500 cursor-pointer font-bold' onClick={()=> setIsOpen(true)}>ici</span></p>
        </div>
    </Layout>
  )
}

export default CareerInfo