import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../Appcontext/AppContext'
import Layout from '../../components/Layout'
import contact from '../../assets/images/contact.jpg'

const Contact = () => {
    const [formData, setFromData] = useState({fName: "", lName: "", email: "", tel: "", message: ""})
    const {setCurrPage} = useContext(AppContext)

    const handleChange =(e)=>{
        setFromData(curr=> {return { ...curr, [e.target.name]: e.target.value }})
    }


    useEffect(()=>{
        setCurrPage('contact')
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
  return (
    <Layout>
        <div className='w-full'>
            <div className='w-full relative'>
                <div className='w-full'>
                    <img src={contact} alt="contact" className='w-full' />
                </div>
                <div className='px-4 md:px-10 lg:px-20 bg-black/50 absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center'>
                    <p className='font-light text-lg text-neutral-50'>ENTRER EN CONTACT</p>
                    <h2 className='font-bold text-3xl md:text-5xl text-white'>Contactez nous</h2>
                </div>
            </div>

            <div className='px-4 md:px-10 lg:px-20 bg-white py-12  w-full'>
                <div>
                    <ul className='text-lg text-gray-600 font-bold flex justify-center'>
                        <div className='flex items-center lg:space-x-6 flex-col lg:flex-row'>
                            <li className='text-center text-sm md:text-base'>Êtes-vous intéressé à travailler à YFLEET?</li>
                            <li className='text-center text-sm md:text-base'>Avez-vous des questions sur YFLEET?</li>
                        </div>
                    </ul>
                    <p className='text-sm text-gray-500 text-center py-2 md:py-6'>
                        Email us at support@yfleetgroup.com, call +242 05 585 0808, or fill in the form below
                    </p>

                    <div className='md:w-[80%] mx-auto my-12'>
                        <form >
                            <div className='flex flex-col md:flex-row md:space-x-4 md:mb-4'>
                                <div className='w-full mb-2 md:mb-0'>
                                    <label htmlFor="fName" className='text-sm text-gray-600'>Nom de famille</label>
                                    <input name='fName' value={formData.fName} onChange={handleChange} type="text" className='border rounded px-3 py-2 border-gray-200 w-full placeholder:text-sm placeholder:text-gray-300' placeholder='Nom de famille' />
                                </div>
                                <div className='w-full mb-2 md:mb-0'>
                                    <label htmlFor="lName" className='text-sm text-gray-600'>Nom</label>
                                    <input name='lName' value={formData.lName} onChange={handleChange} type="text" className='border rounded px-3 py-2 border-gray-200 w-full placeholder:text-sm placeholder:text-gray-300' placeholder='Nom'  />
                                </div>
                            </div>
                            
                            <div className='flex flex-col md:flex-row md:space-x-4 md:mb-4'>
                                <div className='w-full mb-2 md:mb-0'>
                                    <label htmlFor="email" className='text-sm text-gray-600'>Email</label>
                                    <input name='email' value={formData.email}  onChange={handleChange} type="text" className='border rounded px-3 py-2 border-gray-200 w-full placeholder:text-sm placeholder:text-gray-300' placeholder='Email'  />
                                </div>
                                <div className='w-full mb-2 md:mb-0'>
                                    <label htmlFor="tel" className='text-sm text-gray-600'>Téléphone</label>
                                    <input name='tel' value={formData.tel} onChange={handleChange} type="text" className='border rounded px-3 py-2 border-gray-200 w-full placeholder:text-sm placeholder:text-gray-300' placeholder='Téléphone'  />
                                </div>
                            </div>

                            <div className='flex flex-col md:flex-row md:space-x-4 mb-4'>
                                <div className='w-full'>
                                    <label htmlFor="message" className='text-sm text-gray-600'>Message </label>
                                    <textarea name="message" value={formData.massage} onChange={handleChange} id="" rows="5" className='border rounded px-3 py-2 border-gray-200 w-full placeholder:text-sm placeholder:text-gray-300' placeholder='Message'></textarea>
                                </div>
                            </div>
                            <a href={`mailto:support@yfleetgroup.com?subject='Need Help'&body='${formData.fName} ${formData.lName} \n Email:${formData.email} \n\n ${formData.message} '`}>
                                <button className={`mt-4 text-sm px-6 py-3 bg-red-500 rounded-lg w-max space-x-2 text-white`}>
                                    Envoyer
                                </button>
                            </a>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
  )
}

export default Contact