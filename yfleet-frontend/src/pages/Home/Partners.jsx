import React from 'react'
import Text from '../../components/Text'
import classNames from "classnames";
import p1 from '../../assets/images/partners/p1.png'
import p2 from '../../assets/images/partners/p2.png'
import p3 from '../../assets/images/partners/p3.png'
import p4 from '../../assets/images/partners/p4.png'
import p5 from '../../assets/images/partners/p5.png'
import TestimonialCard from '../../components/TestimonialCard'
import PartnerSlider from '../../components/PartnerSlider'
import avatar from '../../assets/images/partners/avatar.png'
import avatar1 from '../../assets/images/main/Avater.png'
import avatar2 from '../../assets/images/main/Avater2.png'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Partners = () => {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    const CustomDot = ({
        index,
        onClick,
        active
      }) => {
        return (
          <button
            onClick={e => {
              onClick();
              e.preventDefault();
            }}
            className={classNames("custom-dot", {
              "custom-dot--active": active
            })}
          >
            <div className='h-3 w-3 rounded-full bg-[#FD4138] mx-1 '>
                
            </div>
          </button>
        );
      };

  return (
    <>
        <section className='px-4 md:px-10 lg:px-20 py-10 md:my-10  flex flex-col items-center'>
            <div className='flex-1 flex flex-col items-center'>
                <h1 className='text-4xl lg:text-5xl text-gray-700 font-bold text-center relative w-max mt-8 flex items-center space-x-2'>
                    <span>Nos </span>
                    <Text text='partenaires' />   
                </h1> 
            </div>
            <div className='hidden sm:flex items-center justify-center space-x-6 md:space-x-20 mt-10 md:mt-20 overflow-x-auto w-full'>
                <div className='h-[3rem]'>
                    <img src={p1} alt="partner" className='h-full' />
                </div>
                <div className='h-[3rem]'>
                    <img src={p2} alt="partner" className='h-full' />
                </div>
                <div className='h-[3rem]'>
                    <img src={p3} alt="partner" className='h-full' />
                </div>
                <div className='h-[3rem]'>
                    <img src={p4} alt="partner" className='h-full' />
                </div>
                <div className='h-[3rem]'>
                    <img src={p5} alt="partner" className='h-full' />
                </div>
            </div>
            <div className='sm:hidden mt-10'>
                <PartnerSlider />
            </div>
        </section>

        <section className='px-4 md:px-10 lg:px-20 py-6 md:my-10  flex flex-col items-center'>
            <div className='flex-1 flex flex-col items-center'>
                <h1 className='text-4xl lg:text-5xl text-gray-700 font-bold text-center relative w-max mt-8 flex items-center space-x-2'>
                    <span>Ce que  </span>
                    <Text text='disent' /> 
                    <span>nos </span>  
                </h1> 
                <h1 className='text-4xl lg:text-5xl text-gray-700 font-bold text-center relative w-max'>
                    <span>collaborateurs</span>  
                </h1> 
            </div>
            {/* <div className='flex items-center md:space-x-2 lg:space-x-6 mt-20 flex-col md:flex-row space-y-6 md:space-y-0  '>
                <TestimonialCard isActive={true}/>
                <TestimonialCard />
                <TestimonialCard />
            </div> */}
            <div className='w-full mt-20 '>
                <Carousel 
                    swipeable={true} 
                    removeArrowOnDeviceType={["tablet", "mobile", "desktop"]} 
                    showDots={true} 
                    
                    responsive={responsive}
                    customDot={<CustomDot />}
                >
                    
                    <TestimonialCard 
                        message='Ici vous allez rediger les avis des chauffeurs qui font partie de la flotte YFLEET, ou les avis de tout partenaire.'
                        image={avatar1} 
                        name="Cassendra Eliane" 
                        position="Head of Talent Acquisition, North America"
                        isActive={true}/>
                    <TestimonialCard 
                        message='Ici vous allez rediger les avis des chauffeurs qui font partie de la flotte YFLEET, ou les avis de tout partenaire.'
                        image={avatar} 
                        name="Pierre-Stéphane A." 
                        position="Head of Talent Acquisition, North America"
                    />
                    <TestimonialCard 
                        message='Ici vous allez rediger les avis des chauffeurs qui font partie de la flotte YFLEET, ou les avis de tout partenaire.'
                        image={avatar2} 
                        name="Christian Onguene" 
                        position="Head of Talent Acquisition, North America"
                    />
                    <TestimonialCard 
                        message='Ici vous allez rediger les avis des chauffeurs qui font partie de la flotte YFLEET, ou les avis de tout partenaire.'
                        image={avatar2} 
                        name="Christian Onguene" 
                        position="Head of Talent Acquisition, North America"
                    />
                    <TestimonialCard 
                        message='Ici vous allez rediger les avis des chauffeurs qui font partie de la flotte YFLEET, ou les avis de tout partenaire.'
                        image={avatar2} 
                        name="Christian Onguene" 
                        position="Head of Talent Acquisition, North America"
                    />
                    
                </Carousel>
            </div>
        </section>
    </>
  )
}

export default Partners