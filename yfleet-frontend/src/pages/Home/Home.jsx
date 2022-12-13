import React, { useContext } from 'react'
import { useEffect } from 'react'
import { AppContext } from '../../Appcontext/AppContext'
import Layout from '../../components/Layout'
import Banner from './Banner'
import Location from './Location'
import Partners from './Partners'
import Plan from './Plan'
import Service from './Service'

const Home = () => {
  const {setCurrPage} = useContext(AppContext)
  useEffect(()=>{
    setCurrPage('accueil')
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <Layout>
        <Banner />
        <Plan />
        <Location />
        <Service />
        <Partners />
    </Layout>
  )
}

export default Home