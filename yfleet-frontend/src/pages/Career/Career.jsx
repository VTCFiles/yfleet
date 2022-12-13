import React, { useContext, useEffect } from 'react'
import { AppContext } from '../../Appcontext/AppContext'
import about from '../../assets/images/about/about.png'
import Layout from '../../components/Layout'
import CareerCard from './CareerCard'

const Career = () => {
    const {setCurrPage} = useContext(AppContext)
    useEffect(()=>{
        setCurrPage('carrieres')
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
  return (
    <Layout>
        <div>
            <div className='relative overflow-hidden h-[38rem] md:h-[34.4rem]'>
                <img src={about} alt="about" className='w-full h-full object-cover' />
                <div className='absolute top-0 left-0 h-full flex items-center'>
                    <div className='flex items-start px-4 md:px-10 lg:px-20 lg:space-x-8 flex-col lg:flex-row lg:space-y-0'>
                        <div className='flex-1 md:-mt-8'>
                            <div className='w-[8rem] h-[.2rem] bg-red-500'></div>
                            <h2 className='text-3xl md:text-5xl font-bold text-white my-4 md:my-6'>Carrières</h2>
                        </div>
                        <div className='font-light text-neutral-100 flex-1 text-sm md:text-base '>
                            <p>
                                Pour nous, tout cela commence par aider les gens à aller n'importe où et à obtenir n'importe quoi : voitures, livraisons, épiceries, motos, personnes. C'est ce que nous savons et ce que nous faisons le mieux. Et nous le faisons à la vitesse de l'instant.
                            </p>

                            <p className='my-2 md:my-4'>
                                C'est pourquoi les gens veulent nous rejoindre : parce que nos solutions sont mises en œuvre en temps réel dans nos villes et nos rues, elles sont une aubaine et une carrière pour les gens de partout. L'ampleur de ce travail signifie qu'YFleet vous mettra au défi - vous confrontera à des problèmes complexes qui nécessitent des solutions ambitieuses. Nous avons besoin de personnes audacieuses, capables de construire avec le cœur, qui rechercheront des solutions avec un optimisme sans peur. 
                            </p>

                            <h2 className='text-lg md:text-xl font-bold my-2 md:my-4'>Professionnels expérimentés</h2>

                            <p>
                                Vous voulez faire la différence ? Nous aussi. Entrez pour explorer la richesse des opportunités de carrière et faites passer votre carrière au niveau supérieur.
                            </p>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className='px-4 md:px-10 lg:px-20 flex flex-col'>
                    <h2 className='font-bold text-3xl md:text-5xl text-gray-700 text-center py-8 '>Postes ouverts</h2>
                    <div className='my-8  w-full grid items-start grid-cols-[repeat(auto-fit,_minmax(18rem,_1fr))] md:grid-cols-[repeat(auto-fit,_minmax(25rem,_1fr))] gap-x-2 md:gap-x-6 gap-y-6'>
                        <CareerCard />
                        <CareerCard />
                        <CareerCard />
                        <CareerCard />
                    </div>
                </div>
            </div>
        </div>
    </Layout>
  )
}

export default Career