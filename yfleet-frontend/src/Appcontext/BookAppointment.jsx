import React from 'react'
import { useState } from 'react'
import { BookApplointmentContext } from './AppContext'

const BookAppointmentProvider = ({children}) => {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <BookApplointmentContext.Provider value={{isOpen, setIsOpen}}>
        {children}
    </BookApplointmentContext.Provider>
  )
}

export default BookAppointmentProvider