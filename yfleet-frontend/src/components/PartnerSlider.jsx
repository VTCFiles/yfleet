import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import p1 from '../assets/images/partners/p1.png'
import p2 from '../assets/images/partners/p2.png'
import p3 from '../assets/images/partners/p3.png'
import p4 from '../assets/images/partners/p4.png'
import p5 from '../assets/images/partners/p5.png'

const items = [
    {image: p1},
    {image: p2},
    {image: p3},
    {image: p4},
    {image: p5},
]

export default function PartnerSlider() {
    return (
        <div className="container mx-auto">
            <div className="flex items-center justify-center w-full h-full py-4 sm:py-8 px-4">
                {/* Carousel for desktop and large size devices */}
                <CarouselProvider className="lg:block " naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={items.length} visibleSlides={2} step={1} infinite={true}>
                    <div className="w-full relative flex items-center justify-center ">
                        <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 -left-6 md:-left-6 focus:outline-none cursor-pointer bg-red-600 rounded-full h-5 w-5 sm:h-8 sm:w-8 flex justify-center items-center" id="prev">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonBack>
                        <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                            <Slider>
                                <div id="slider" className="h-full flex lg:gap-8 md:gap-6 gap-6 items-center justify-start transition ease-out duration-700">
                                    {
                                        items.map((item, index) => (
                                            <Slide index={index} key={index}>
                                                <div className="flex flex-shrink-0 relative w-full sm:w-auto cursor-pointer duration-500 transition-all ">
                                                    <div className='h-[3rem] w-full sm:h-[3rem]'>
                                                        <img src={item.image} alt="partner" className='h-full w-full' />
                                                    </div>
                                                </div>
                                            </Slide>
                                        ))
                                    }
                                </div>
                            </Slider>
                        </div>
                        <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 right-0 md:-right-8 focus:outline-none bg-red-600 rounded-full h-5 w-5 sm:h-8 sm:w-8 flex justify-center items-center" id="next">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonNext>
                    </div>
                </CarouselProvider>

                {/* Carousel for tablet and medium size devices */}
                {/* <CarouselProvider className="lg:hidden md:block hidden" naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={12} visibleSlides={2} step={1} infinite={true}>
                    <div className="w-full relative flex items-center justify-center">
                        <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonBack>
                        <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                            <Slider>
                                <div id="slider" className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700">
                                    <Slider>
                                        <div id="slider" className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700">
                                            {
                                                items.map((item, index) => (
                                                    <Slide index={index} key={index}>
                                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto cursor-pointer duration-500 transition-all hover:scale-105">
                                                            <img src={item.image} alt="black chair and white table" className="object-cover object-center w-full" />
                                                        </div>
                                                    </Slide>
                                                ))
                                            }
                                        </div>
                                    </Slider>
                                </div>
                            </Slider>
                        </div>
                        <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="next">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonNext>
                    </div>
                </CarouselProvider> */}

                {/* Carousel for mobile and Small size Devices */}
                {/* <CarouselProvider className="block md:hidden " naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={12} visibleSlides={1} step={1} infinite={true}>
                    <div className="w-full relative flex items-center justify-center">
                        <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonBack>
                        <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                            <Slider>
                                <div id="slider" className="h-full w-full flex lg:gap-8 md:gap-6 items-center justify-start transition ease-out duration-700">
                                    <Slider>
                                        <div id="slider" className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700">
                                            {
                                                items.map((item, index) => (
                                                    <Slide index={index} key={index}>
                                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto cursor-pointer duration-500 transition-all hover:scale-105">
                                                            <img src={item.image} alt="black chair and white table" className="object-cover object-center w-full" />
                                                        </div>
                                                    </Slide>
                                                ))
                                            }
                                        </div>
                                    </Slider>
                                </div>
                            </Slider>
                        </div>
                        <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="next">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonNext>
                    </div>
                </CarouselProvider> */}
            </div>
        </div>
    );
}