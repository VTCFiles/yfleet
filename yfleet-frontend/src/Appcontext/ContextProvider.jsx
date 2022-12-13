import React from 'react'
import { useState } from 'react'
import { AppContext } from './AppContext'

const ContextProvider = ({children}) => {
    const [currPage, setCurrPage] = useState('accueil')
    const [adminNav, setAdminNav] = useState('accueil')
  return (
    <AppContext.Provider value={{currPage, setCurrPage, adminNav, setAdminNav}}>
        {children}
    </AppContext.Provider>
  )
}

export default ContextProvider