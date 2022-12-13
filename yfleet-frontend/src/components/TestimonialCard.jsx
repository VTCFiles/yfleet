import React from 'react'

const TestimonialCard = ({isActive, message, image, name, position}) => {
  return (
    <div className={`mb-6 rounded-lg border shadow-md mx-2 ${!isActive? "bg-[#80878C] text-neutral-100": "bg-white text-gray-600"}`}>
        <div className='px-8 py-4'>
            <div className='pb-6 border-b'>
                <span className={`${isActive? "text-red-500": ""}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-quote" viewBox="0 0 16 16">
                    <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z"/>
                    </svg>
                </span>
                <p className='text-sm '>{message}</p>
            </div>
            <div className='mt-4 flex items-center justify-between space-x-4'>
                <img src={image} alt="testimonial" className='h-[3rem] lg:h-[4rem]' />
                <div>
                    <h4 className={`font-normal ${isActive? "text-red-500": ""}`}>{name}</h4>
                    <p className='text-xs mt-2 '>{position}</p>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default TestimonialCard