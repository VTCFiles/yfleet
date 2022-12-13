import React, { useContext, useEffect } from 'react'
import Layout from '../../components/Layout'
import banner from '../../assets/images/blog/banner.png'
import img1 from '../../assets/images/blog/img1.png'
import img2 from '../../assets/images/blog/img2.png'
import img4 from '../../assets/images/blog/img4.png'
import img5 from '../../assets/images/blog/img5.png'
import img6 from '../../assets/images/blog/img6.png'
import img7 from '../../assets/images/blog/img7.png'
import img8 from '../../assets/images/blog/img8.png'
import img9 from '../../assets/images/blog/img9.png'
import img10 from '../../assets/images/blog/img10.png'
import img11 from '../../assets/images/blog/img11.png'
import img12 from '../../assets/images/blog/img12.png'
import img13 from '../../assets/images/blog/img13.png'
import Text from '../../components/Text'
import { AppContext } from '../../Appcontext/AppContext'

const Blog = () => {
    const {setCurrPage} = useContext(AppContext)
    useEffect(()=>{
        setCurrPage('blog')
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
  return (
    <Layout>
        <div className='px-4 md:px-10 lg:px-32 md:py-10 '>
            <div>
                <img src={banner} alt="banner" />
            </div>
            <h2 className='text-2xl md:text-5xl font-normal text-gray-700 my-5 md:my-10 text-center'>Quand vous aurez votre contenu bien défini vous mettrez un titre ici</h2>
            <p className='text-sm text-gray-500 py-4 pb-10 border-b-2 border-black/50 text-center'>ici c’est l’espace pour le sous-titre, vous allez aussi remplir ça  quand vous aurez le <br /> trxte et tout le contenu qui va avec</p>
            <h1 className='text-3xl lg:text-5xl font-bold text-gray-700 relative w-full justify-center flex space-x-2 items-center pt-16 pb-10'>
                <span>Devenez </span>
                <Text text='chauffeur' />   
            </h1> 

            <div className='w-full grid items-start justify-center grid-cols-[repeat(auto-fit,_minmax(20rem,_1fr))] md:gap-x-8 gap-y-8'>
                <Card 
                    image={img1}
                    text="Here are some things you should know regarding how we work "
                />
                <Card 
                    image={img2}
                    text="Granny gives everyone the finger, and other tips from OFFF Barcelona"
                />
                <Card 
                    image={img4}
                    text="Hello world, or, in other words, why this blog exists"
                />
                <Card 
                    image={img5}
                    text="Here are some things you should know regarding how we work "
                />
                <Card 
                    image={img6}
                    text="Connecting artificial intelligence with digital product design"
                />
                <Card 
                    image={img7}
                    text="It’s all about finding the perfect balance"
                />
                <Card 
                    image={img8}
                    text="I believe learning is the most important skill"
                />
                <Card 
                    image={img9}
                    text="Clients are part of the team"
                />
                <Card 
                    image={img10}
                    text="Clients are part of the team"
                />
                <Card 
                    image={img11}
                    text="Here are some things you should know regarding how we work "
                />
                <Card 
                    image={img12}
                    text="Connecting artificial intelligence with digital product design"
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
                <div className='w-full flex justify-center overflow-hidden'>
                    <img src={image} alt="blog" className='w-[90%] md:w-full' />
                </div>
                <p className='text-center my-4 text-sm px-4 md:px-0 text-gray-500 lg:w-[70%]'>{text}</p>
            </div>
        </a>
    )
}

export default Blog