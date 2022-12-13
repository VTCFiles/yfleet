import React, { useContext, useEffect } from 'react'
import Layout from '../../components/Layout'
import banner from '../../assets/images/blog/banner.png'
import img1 from '../../assets/images/blog/img1.png'
import img2 from '../../assets/images/blog/img2.png'
import img4 from '../../assets/images/blog/img4.png'
import img13 from '../../assets/images/blog/img13.png'
import keyboard from '../../assets/images/blog/keyboard.png'
import paint from '../../assets/images/blog/paint.png'
import statu from '../../assets/images/blog/statu.png'
import profile from '../../assets/images/blog/profile.png'
import { AppContext } from '../../Appcontext/AppContext'

const Article = () => {
    const {setCurrPage} =useContext(AppContext)
    useEffect(()=>{
        setCurrPage('blog')
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
  return (
    <Layout>
        <div className='px-4 md:px-10 lg:px-32 md:py-10 '>
            <h2 className='text-2xl md:text-5xl font-normal text-gray-700 my-5 md:my-10 text-center'>Quand vous aurez votre contenu bien défini vous mettrez un titre ici</h2>
            <p className='text-sm text-gray-500 pb-10 text-center'>ici c’est l’espace pour le sous-titre, vous allez aussi remplir ça  quand vous aurez le <br className='hidden md:block' /> trxte et tout le contenu qui va avec</p>
            <div>
                <img src={banner} alt="banner" />
            </div>
            {/* <h1 className='text-3xl lg:text-5xl font-bold text-gray-700 relative w-full justify-center flex space-x-2 items-center pt-16 pb-10'>
                <span>Devenez </span>
                <Text text='chauffeur' />   
            </h1>  */}
            <div className='flex justify-center w-full'>
                <div className='w-[35rem] mt-16'>
                    <div className='flex items-center justify-between border-t-2 border-black/70 py-8'>
                        <div className='flex items-center space-x-4'>
                            <div>
                                <img src={profile} alt="profile" className='rounded-full' />
                            </div>
                            <div>
                                <h4 className='text-lg font-bold text-gray-700'>Mika MAtikainen</h4>
                                <p className='text-sm text-gray-500'>Apr 15, 2020 · 4 min read</p>
                            </div>
                        </div>

                        <div className='flex border rounded divide-x-2 items-center'>
                            <span className='px-2 py-1 text-gray-500'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                                </svg>
                            </span>
                            <span className='px-2 py-1 text-gray-500'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
                                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <section className='text-gray-600 font-light'>
                <p className='mb-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu velit tempus erat egestas efficitur. In hac habitasse platea dictumst. Fusce a nunc eget ligula suscipit finibus. Aenean pharetra quis lacus at viverra. </p>
                <p className='mb-6'>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam quis posuere ligula. In eu dui molestie, molestie lectus eu, semper lectus. </p>
                
                <h2 className='text-2xl font-bold text-center text-gray-700 my-6'>Titre à ecrire ici</h2>

                <p className='mb-6'>Duis eu velit tempus erat egestas efficitur. In hac habitasse platea dictumst. Fusce a nunc eget ligula suscipit finibus. Aenean pharetra quis lacus at viverra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. </p>
                <p className='mb-6'>Morbi efficitur auctor metus, id mollis lorem pellentesque id. Nullam posuere maximus dui et fringilla. </p>
                
                <div className='mt-6 mb-2'>
                    <img src={statu} alt="statu" />
                </div>
                <div className='flex w-full justify-center mb-10'>
                    <p className='md:w-[50%] text-center text-gray-800 font-normal'>Image caption centered this way and I’ll make this a bit longer to indicate the amount of line-height. </p>
                </div>

                <p className='mb-6'>Aenean pharetra quis lacus at viverra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam quis posuere ligula. </p>
                <p className='mb-5'>In eu dui molestie, molestie lectus eu, semper lectus. Proin at justo lacinia, auctor nisl et, consequat ante. Donec sit amet nisi arcu. Morbi efficitur auctor metus, id mollis lorem pellentesque id. Nullam posuere maximus dui et fringilla. Nulla non volutpat leo.</p>
                <ul>
                    <h6 className='mb-6'>A list looks like this:</h6>
                    <li className='mb-6 pl-10'>First item in the list</li>
                    <li className='mb-6 pl-10'>Second item in the list lorem ipsum dolor sit amet nunc felis dolor lorem ipsum sit amet</li>
                    <li className='mb-6 pl-10'>Third item in the list</li>
                </ul>
                <p className='mb-6'>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam quis posuere ligula. </p>
                <p className='mb-1'>Thanks for reading,</p>
                <p className='mb-6'>Mika </p>
            </section>

            <section className='mt-10 md:mt-20 border-t-2 border-black/50 border-dotted flex justify-center '>
                <div className='py-6 md:w-[60%] lg:w-[60%]'>
                    <div className='flex py-3 px-4 lg:px-14 md:border flex-col md:flex-row space-y-4 md:space-y-0 items-center md:justify-between md:rounded md:shadow w-full my-6'>
                        <div className='flex items-center text-sm text-gray-700 space-x-2 border justify-center w-full py-3 rounded shadow md:border-0 md:justify-start md:w-max md:py-0 md:rounded-none md:shadow-none'>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                                </svg>
                            </span>
                            <p>Share on facebook</p>
                        </div>
                        <div className='flex items-center text-sm text-gray-700 space-x-2 border justify-center w-full py-3 rounded shadow md:border-0 md:justify-start md:w-max md:py-0 md:rounded-none md:shadow-none'> 
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
                                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                                </svg>
                            </span>
                            <p>Share on facebook</p>
                        </div>
                    </div>
                    <div className='text-gray-600 mb-8'><p>Tags: <span className='underline'> product design </span>, <span className='underline'> culture</span></p></div>
                    <div className='flex w-full items-center md:space-x-4 pt-8 border-t-2 border-black/40 border-dotted flex-col md:flex-row space-y-4 md:space-y-0'>
                        <div className='flex-none'>
                            <img src={profile} alt="profile" className='rounded-full' />
                        </div>
                        <div>
                            <p className='text-sm text-gray-500 text-center md:text-start'>
                                <span className='font-bold text-gray-700'>Mika MAtikainen </span>
                                 is a Design Founder & Advisor, Berlin School of Creative Leadership Executive MBA participant, Zippie advisor, Wolt co-founder, and Nordic Rose stakeholder.  
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            
            
        </div>
            
        <div className='px-4 md:px-10 lg:px-32 md:py-10 border-t-2 border-black/50 mb-16'>
            <h2 className='text-3xl md:text-5xl text-gray-700 font-bold text-center my-8'>Autres articles à lire</h2>
            <div className='w-full grid items-start justify-center grid-cols-[repeat(auto-fit,_minmax(18rem,_1fr))] md:gap-x-8 gap-y-8'>
                <Card 
                    image={img2}
                    text="Connecting artificial intelligence with digital product design"
                />
                <Card 
                    image={img4}
                    text="Hello world, or, in other words, why this blog exists"
                />
                <Card 
                    image={img1}
                    text="Here are some things you should know regarding how we work "
                />
                <Card 
                    image={paint}
                    text="A few words about this blog platform, Ghost, and how this site was made "
                />
                <Card 
                    image={keyboard}
                    text="Updating list of 50+ sources on distributed teams, remote work, and how to make it all work better"
                />
                <Card 
                    image={img13}
                    text="How modern remote working tools get along with Old School Cowboy's methods"
                />
                
            </div>
        </div>

    </Layout>
  )
}
function Card({image, text}){
    return (
        <a href='/article'>
            <div className='flex flex-col items-center justify-center w-full '>
                <div className='w-full flex justify-center overflow-hidden '>
                    <img src={image} alt="blog" className=' w-[90%] md:w-full' />
                </div>
                <p className='text-center my-4 text-sm px-4 md:px-0 text-gray-500 lg:w-[90%]'>{text}</p>
            </div>
        </a>
    )
}

export default Article