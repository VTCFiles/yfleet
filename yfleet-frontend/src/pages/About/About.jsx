import React, { useContext, useEffect } from 'react'
import { AppContext } from '../../Appcontext/AppContext'
import Layout from '../../components/Layout'
import AboutBody from './AboutBody'

const About = () => {
  const {setCurrPage} = useContext(AppContext)
  useEffect(()=>{
    setCurrPage('a-propos')
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <Layout>
        <AboutBody />
    </Layout>
  )
}

export default About