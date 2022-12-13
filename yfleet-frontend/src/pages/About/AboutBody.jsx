import React from 'react'
import about from '../../assets/images/about/about.png'
import wheel from '../../assets/images/wheel.jpg'
import greet from '../../assets/images/greet.jpg'

const AboutBody = () => {
  return (
    <>
        <div className='relative overflow-hidden h-[34.4rem]'>
            <img src={about} alt="about" className='w-full h-full object-cover' />
            <div className='absolute top-0 left-0 h-full flex items-center'>
                <div className='flex items-start px-4 md:px-10 lg:px-20 lg:space-x-8 flex-col lg:flex-row space-y-6 lg:space-y-0'>
                    <div className='flex-none md:-mt-8'>
                        <div className='w-[8rem] h-[.2rem] bg-red-500'></div>
                        <h2 className='text-3xl md:text-5xl font-bold text-white my-6'>Qui sommes nous ?</h2>
                    </div>
                    <div className='font-light text-neutral-100 flex-auto text-sm md:text-base '>
                        <p>YFleet Partener est un agrégateur Yango présent à Douala, Yaoundé, Brazzaville, Kinshasa, point noir, Libreville. </p>
                        <p>Nous recrutons et gérons la flotte de véhicule et de chauffeurs Yango sur les marché Africain. </p>
                        <p>YFleet s'engage à devenir une entreprise totalement sûre et fiable dans les transports en commun, ou avec la micro mobilité. </p>
                        <p>Il est de notre responsabilité, en tant que plateforme de mobilité dans le monde, de nous attaquer plus agressivement au défi du changement climatique.</p>
                        <p>Nous le ferons en offrant aux usagers davantage de moyens de rouler vert, en donnant la priorité et en nous associant aux ONG et au secteur privé pour contribuer à accélérer une transition énergétique propre et juste</p>
                    </div>
                </div>
            </div>
        </div>

        <div className='flex px-4 md:px-10 lg:px-20 py-28 mt-6 flex-col lg:flex-row'>
            <div className='flex-1 py-6 lg:pr-16 order-2 lg:order-1'>
                <h2 className='text-3xl md:text-5xl text-gray-700 '>Votre sécurité nous motive</h2>
                <p className='text-base text-gray-600 mt-6 font-light md:font-normal'>
                Que vous soyez sur la banquette arrière ou au volant, votre sécurité est primordiale. Nous nous engageons à faire notre part et la technologie est au cœur de notre approche. Nous collaborons avec des défenseurs de la sécurité et développons de nouvelles technologies et de nouveaux systèmes pour améliorer la sécurité et faciliter les déplacements de tous.
                </p>
            </div>
            <div className='relative rounded-lg  flex-1 lg:h-[20rem] order-1 lg:order-2'>
                <div className='rounded-lg bg-red-500 h-full w-full top-0 '></div>
                <img src={wheel} alt="wheel" className='lg:absolute md:h-[22rem] top-6 right-6 rounded-lg w-full lg:h-full' />
            </div>
        </div>

        <div className='flex px-4 md:px-10 lg:px-20 pb-28 lg:space-x-6 flex-col lg:flex-row'>
            <div className='relative rounded-lg  flex-1 lg:h-[20rem]'>
                <div className='rounded-lg bg-red-500 h-full w-full top-0 '></div>
                <img src={greet} alt="wheel" className='lg:absolute md:h-[20rem] top-6 left-6 rounded-lg w-full h-full' />
            </div>
            
            <div className='flex-1 py-6 lg:pl-16'>
                <h2 className='text-3xl md:text-5xl text-gray-700 '>Balades et au-delà</h2>
                <p className='text-base text-gray-600 mt-6 font-light md:font-normal'>
                    En plus d'aider les passagers à trouver un moyen d'aller d'un point A à un point B, nous aidons les gens à commander de la nourriture rapidement et à moindre coût, supprimons les obstacles aux soins de santé, créons de nouvelles solutions de réservation de fret et aidons les entreprises à offrir une expérience de voyage fluide aux employés. Et toujours aider les chauffeurs et les coursiers à gagner.
                </p>
            </div>
        </div>
    </>
  )
}

export default AboutBody