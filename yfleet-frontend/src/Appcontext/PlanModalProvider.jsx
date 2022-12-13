import React from 'react'
import { useState } from 'react'
import { PlanModalContext } from './AppContext'

const PlanModalProvider = ({children}) => {
    const [isOpenPlanModal, setIsOpenPlanModal] = useState(false)
    const [title, setTitle] = useState('')
  return (
    <PlanModalContext.Provider value={{isOpenPlanModal, setIsOpenPlanModal, title, setTitle}}>
        {children}
    </PlanModalContext.Provider>
  )
}

export default PlanModalProvider