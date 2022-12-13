import React, { useContext, useEffect } from 'react'
// import ReactTooltip from 'react-tooltip';
import AdminLayout from './components/AdminLayout';
import {AppContext} from '../../Appcontext/AppContext';

const Drivers = () => {
    const {setAdminNav} = useContext(AppContext)

    useEffect(()=>{
        setAdminNav('chauffeur')
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
  return (
    <AdminLayout>
    
      <div className='px-6 py-6 overflow-hidden'>
          <h1 className='text-2xl font-bold text-gray-800'>Chauffeurs</h1>
          <div className='flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 items-center mt-4'>
              <input type="text" className='px-3 py-2 border border-gray-200 rounded-md placeholder:text-sm placeholder:text-gray-400 w-full' placeholder='Search by name/email/phone'/>
          </div>

          <div className='mt-4'>
              <div className="overflow-x-auto relative shadow-md sm:rounded-lg scrollbar-hide">
                  <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 border z-0">
                      <thead className="text-xs text-gray-700 uppercase bg-gray-50 border-b">
                          <tr>
                              <th scope="col" className="py-3 px-6">
                              Nom
                              </th>
                              <th scope="col" className="py-3 px-6">
                              Email
                              </th>
                              <th scope="col" className="py-3 px-6">
                              Tele
                              </th>
                              <th scope="col" className="py-3 px-6">
                              EMAIL
                              </th>
                              <th scope="col" className="py-3 px-6">
                              PHONE
                              </th>
                              <th scope="col" className="py-3 px-6">
                              ACTIONS
                              </th>
                          </tr>
                      </thead>
                      <tbody>
                          <SingleDriver  />
                          <SingleDriver  />
                          <SingleDriver  />
                          <SingleDriver  />
                          <SingleDriver  />
                          <SingleDriver  />
                          <SingleDriver  /> 
                          
                      </tbody>
                  </table>
              </div>
                  <div className='bg-white flex flex-col md:flex-row items-center justify-between w-full mt-6 px-4 shadow-md border rounded py-2 md:py-0'>
                        <p className='text-sm text-gray-500'>SHOWING 1-15 OF 288</p>
                        <div aria-label="Page navigation example">
                          <ul class="inline-flex items-center -space-x-px pt-2">
                            <li>
                              <a href="/admin/customers" class="block py-2 px-3 ml-0 leading-tight text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700 ">
                                <span class="sr-only">Previous</span>
                                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                              </a>
                            </li>
                            <li>
                              <a href="/admin/customers" class="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ">1</a>
                            </li>
                            <li>
                              <a href="/admin/customers" class="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ">2</a>
                            </li>
                            <li>
                              <a href="/admin/customers" aria-current="page" class="z-10 py-2 px-3 leading-tight text-green-600 bg-blue-50 border border-green-300 hover:bg-blue-100 hover:text-green-700 ">3</a>
                            </li>
                            <li>
                              <a href="/admin/customers" class="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ">4</a>
                            </li>
                            <li>
                              <a href="/admin/customers" class="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ">5</a>
                            </li>
                            <li>
                              <a href="/admin/customers" class="block py-2 px-3 leading-tight text-gray-500 border-l border-gray-300 bg-white hover:bg-gray-100 hover:text-gray-700 ">
                                <span class="sr-only">Next</span>
                                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                              </a>
                            </li>
                          </ul>
                        </div>

                  </div>
          </div>
      </div>
    </AdminLayout>
  )
}

function SingleDriver(){
  return (
    <tr className="bg-white border-b ">
        <th scope="row" className="py-4 px-6 font-medium">
        2845
        </th>
        <td className="py-4 px-6 font-light">
        Oct 24, 2022
        </td>
        <td className="py-4 px-6 font-light">
        barezi julien
        </td>
        <td className="py-4 px-6 font-light">
        barezijulien123@gmail.com
        </td>
        <td className="py-4 px-6 font-light ">
         675909367
        </td>

        <td className="py-4 px-6">
          <div className='flex items-center space-x-4'>
            <span className='cursor-pointer' >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
                </svg>
            </span>
            <span className='cursor-pointer'>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
              </svg>
            </span>
          </div>
        </td>
      </tr>
  )
}



export default Drivers

