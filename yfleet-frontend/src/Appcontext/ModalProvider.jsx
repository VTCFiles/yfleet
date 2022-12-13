import React from 'react'
import { useState } from 'react'
import { ModalContext } from './AppContext'

const ModalProvider = ({children}) => {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <ModalContext.Provider value={{isOpen, setIsOpen}}>
        {children}
    </ModalContext.Provider>
  )
}

export default ModalProvider