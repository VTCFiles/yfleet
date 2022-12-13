import React from 'react'
import DashboradCard from './components/DashboradCard'
import RecentOrder from './components/RecentOrder'

const Dashboard = () => {
  return (
    <div className='px-6 py-6'>
        <div className='flex justify-between items-center'>
            <h1 className='text-2xl font-bold text-gray-800'>Dashboard</h1>
            <div className='flex items-center space-x-1 text-gray-500 text-xs'>
                <span className='text-red-600 cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-door" viewBox="0 0 16 16">
                        <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z"/>
                    </svg>
                </span>
                <p>/</p>
                <p>Dashboard</p>
            </div>
        </div>

        <div className='mt-4'>
          {/* Dashboard cards */}
            <div className='w-full grid items-center grid-cols-[repeat(auto-fit,_minmax(18rem,_1fr))] md:gap-x-6 gap-y-8'>
              
              <DashboradCard 
                increase={true}
                title="Nouveaux clients"
                price="500"
                compairedTo="Pour ce mois"
              />
              <DashboradCard 
                increase={false}
                title="Total Chauffeur"
                price="450"
                // percentage="30.5"
                // compairedTo="August"
              />
              <DashboradCard 
                increase={true}
                title="Total voitures"
                price="60000"
                // percentage="20.5"
                // compairedTo="2021"
              />
          </div>

          {/* Dashboard order statuses */}
          {/* <div className='w-full my-8 grid items-center grid-cols-[repeat(auto-fit,_minmax(14rem,_1fr))] md:gap-x-6 gap-y-8'>
              <MiniCard
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-cart2" viewBox="0 0 16 16">
                  <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
                  </svg>
                  }
                title="Total Orders"
                text="75"
                color="bg-orange-500"
              />
              <MiniCard
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-repeat" viewBox="0 0 16 16">
                    <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"/>
                    <path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"/>
                  </svg>
                  }
                title="Order Pending"
                text="120"
                color="bg-blue-500"
              />
              <MiniCard
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-truck" viewBox="0 0 16 16">
                    <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                  </svg>
                  }
                title="Order Processing"
                text="75"
                color="bg-teal-400"
              />
              <MiniCard
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
                  </svg>
                  }
                title="Order Delivered"
                text="75"
                color="bg-green-500"
              />
          </div> */}
                
          {/* charts */}
          

          {/* Recent Order */}
          {/* <div className='my-20'>
            <RecentOrder />
          </div> */}

        </div>
    </div>
  )
}

function MiniCard({icon, title, text, color}){
  return (
    <div className='flex items-center justify-center space-x-4 px-2 py-4 rounded-lg bg-white shadow'>
      <div className={`h-[3rem] w-[3rem] rounded-full overflow-hidden ${color} text-white flex items-center justify-center`}>
          {icon}
      </div>
      <div>
        <p className='text-sm text-gray-600'>{title}</p>
        <h3 className='text-2xl font-bold text-gray-700'>{text}</h3>
      </div>
    </div>
  )
}


export default Dashboard
