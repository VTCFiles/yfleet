import React, { useContext } from 'react'
import { PlanModalContext } from '../../Appcontext/AppContext'
import network from '../../assets/images/main/network.png'
import Text from '../../components/Text'

const data = [
    {
        title: "Gratuit",
        subtitle: "Mettez votre véhicule à disposition",
        text: "Les avantages et plus-values",
        isActive: false,
        list: [
            "Rentabilisez un véhicule que vous n’utilisez pas",
            "Un loyer garanti vous est versé chaque mois",
            "Nous couvrons les pannes et incidents",
            "En attente de texte  à ajouter",
            "En attente de texte  à ajouter",
            "En attente de texte  à ajouter"
        ]
    },
    {
        title: "Gratuit",
        subtitle: "Devenez chauffeur YFLEET",
        text: "Les avantages et plus-values",
        isActive: true,
        list: [
            "Revenus assurés",
            "Obtenez des clients sans efforts",
            "Gagnez des prix mensuels",
            "Sécurité garantie (passagers identifiés)",
            "Vous travaillez selon vos horaires",
            "Faites vous guider par une application professionnelle de transport",
        ]
    },
    {
        title: "Offre variable / pays",
        subtitle: "Devenez propriétaire de taxi",
        text: "Les avantages et plus-values",
        isActive: false,
        list: [
            "Un Prix d’achat abordable",
            "Un revenu mensuel constant",
            "Retour sur investissement garanti",
            "En attente de texte  à ajouter",
            "En attente de texte  à ajouter",
            "En attente de texte  à ajouter"
        ]
    },
]
const Plan = () => {
    const {setIsOpenPlanModal, setTitle} = useContext(PlanModalContext)
    const handleClick =(title)=>{
        setTitle(title)
        setIsOpenPlanModal(true)
    }
    
  return (
    <>
        <section className='px-4 md:px-10 lg:px-20 py-16 flex flex-col items-center'>
            <h1 className='text-3xl lg:text-5xl text-gray-700 font-bold text-center relative w-max mt-8 flex items-center space-x-2'>
                <span>Choisissez</span>
                <Text text='votre Plan' />   
            </h1>  
            <p className='font-light text-gray-600 text-center text-sm md:text-base py-6'>Nous disposons d’un panel varié de services, où nous vous proposons trois différents plans, ayant chacun des <br className='hidden lg:block' /> avantages qui correspondront le mieux à vos objectifs.</p>  
            <div className='flex items-center md:space-x-8 mt-10 w-full flex-col md:flex-row space-y-8'>
                {
                    data.map((item, index)=>(
                        <PlanCard key={index} data={item} onClick={()=>handleClick(item.subtitle)}/>
                    ))
                }
            </div>  
        </section>
        <section className='px-4 md:px-10 lg:px-20 mb-12 md:mb-0 md:py-10 flex items-center flex-col md:flex-row '>
            <div className='flex-1 order-2 md:order-1 flex flex-col items-center md:items-start'>
                <h1 className='text-3xl lg:text-5xl text-gray-700 font-bold text-center relative w-max mt-2 md:mt-8 flex items-center md:items-start space-x-2'>
                    <Text text='Partout' />   
                    <span>où vous êtes</span>
                </h1> 
                <p className='font-light text-gray-700 text-sm lg:text-base py-4 text-center md:text-start'>Pour mieux répondre à votre demande, notre réseau s’étend sur les villes Douala, Yaoundé , Kinshasa , Brazzaville, Pointe-Noire et Libreville</p>
            </div>
            <div className='flex-1 order-1 md:order-2'>
                <img src={network} alt="network" />
            </div>
        </section>
    </>
  )
}

function PlanCard ({data, onClick}){
    
    return (
        <div className={`w-full flex flex-col border border-red-600 rounded-lg py-6 px-4 flex-1 transition-all duration-500 plan ${data.isActive? "md:scale-110 bg-red-500 text-white" : "text-gray-600"} `}>
            <p className='text-lg text-gry-800'>{data.subtitle}</p>
            <h3 className={`text-2xl font-bold py-4 text-yellow ${data.isActive? "text-yellow-500" : "text-gray-800"}`}>{data.title}</h3>
            <p className={`pb-3 sub transition-all duration-500${data.isActive? "text-yellow-500" : "text-gray-800"}`}>{data.text}</p>
            <ul>
                {
                    data.list.map((item, index)=>(
                        <li key={index} className='flex items-center text-sm space-x-2 lg:space-x-4 my-4 font-bold'  >
                            <span className={` text-yellow ${data.isActive? "text-yellow-500" : ""}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2-circle" viewBox="0 0 16 16">
                                    <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
                                    <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
                                </svg>
                            </span>
                            <p className='text-xs '>{item}</p>
                        </li>
                    ))
                }
            </ul>
            <button className={`text-sm px-4 py-2 border border-red-500 rounded-lg lg:w-max btn ${data.isActive? "text-red-500 bg-white" : ""}`} onClick={onClick}>
                Découvrir
            </button>
        </div>
    )
}

export default Plan