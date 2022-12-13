import React, { useContext, useEffect } from 'react'
// import ReactTooltip from 'react-tooltip';
import AdminLayout from './components/AdminLayout';
import AppContext from '../../context/AppContext';

const AdminOrders = () => {
    // const [newOrder, setNewOrder] = useState(false)
    const {setAdminNav} = useContext(AppContext)

    useEffect(()=>{
        setAdminNav('orders')
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
  return (
    <AdminLayout>
      <div className='px-6 py-6 overflow-hidden'>
          {/* <NewOrderDrawer newOrder={newOrder} setNewOrder={setNewOrder} /> */}
          <h1 className='text-2xl font-bold text-gray-800'>Orders</h1>
          <div className='flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 items-center mt-3'>
              <input type="text" className='px-3 py-2 border border-gray-200 rounded-md placeholder:text-sm placeholder:text-gray-400 w-full' placeholder='Search by phone'/>
              <select id="countries" class="px-3 py-2 border border-gray-200 text-gray-500 rounded-md placeholder:text-sm placeholder:text-gray-400 w-full" placeholder='Status'>
                <option value='' className='text-gray-400 text-sm'>Status</option>
                <option value='delivered' className='text-gray-400 text-sm'>Delivered</option>
                <option value="pending" className='text-gray-400 text-sm'>Pending</option>
                <option value="processing" className='text-gray-400 text-sm'>Processing</option>
                <option value="cancel" className='text-gray-400 text-sm'>Cancel</option>
              </select>
              <select id="countries" class="px-3 py-2 border border-gray-200 text-gray-500 rounded-md placeholder:text-sm placeholder:text-gray-400 w-full" placeholder='Status'>
                <option value='' className='text-gray-400 text-sm'>Order limits</option>
                <option value="5" className='text-gray-400 text-sm'>Last 5 days orders</option>
                <option value="7" className='text-gray-400 text-sm'>Last 7 days orders</option>
                <option value="15" className='text-gray-400 text-sm'>Last 15 days orders</option>
                <option value="30" className='text-gray-400 text-sm'>Last 30 days orders</option>
              </select>
              
          </div>

          <div className='mt-4'>
              <div className="overflow-x-auto relative shadow-md sm:rounded-lg scrollbar-hide">
                  <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 border z-0">
                      <thead className="text-xs text-gray-700 uppercase bg-gray-50 border-b">
                          <tr>
                              <th scope="col" className="py-3 px-6">
                              SR NO
                              </th>
                              <th scope="col" className="py-3 px-6">
                              TIME
                              </th>
                              <th scope="col" className="py-3 px-6 ">
                              SHIPPING ADDRESS
                              </th>
                              <th scope="col" className="py-3 px-6">
                              PHONE
                              </th>
                              <th scope="col" className="py-3 px-6">
                              METHOD
                              </th>
                              <th scope="col" className="py-3 px-6">
                              AMOUNT
                              </th>
                              <th scope="col" className="py-3 px-6">
                              STATUS
                              </th>
                              <th scope="col" className="py-3 px-6">
                              ACTION
                              </th>
                              <th scope="col" className="py-3 px-6">
                              INVOICE
                              </th>
                          </tr>
                      </thead>
                      <tbody>
                          <SingleOrder />
                          <SingleOrder />
                          <SingleOrder />
                          <SingleOrder />
                          <SingleOrder />
                          <SingleOrder />
                          <SingleOrder /> 
                          <SingleOrder />
                          <SingleOrder />
                          <SingleOrder />
                          <SingleOrder /> 
                          
                      </tbody>
                  </table>
              </div>
                  <div className='bg-white flex flex-col md:flex-row items-center justify-between w-full mt-6 px-4 shadow-md border rounded py-2 md:py-0'>
                        <p className='text-sm text-gray-500'>SHOWING 1-15 OF 288</p>
                        <div aria-label="Page navigation example">
                          <ul class="inline-flex items-center -space-x-px pt-2">
                            <li>
                              <a href="/admin/orders" class="block py-2 px-3 ml-0 leading-tight text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700 ">
                                <span class="sr-only">Previous</span>
                                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                              </a>
                            </li>
                            <li>
                              <a href="/admin/orders" class="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ">1</a>
                            </li>
                            <li>
                              <a href="/admin/orders" class="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ">2</a>
                            </li>
                            <li>
                              <a href="/admin/orders" aria-current="page" class="z-10 py-2 px-3 leading-tight text-green-600 bg-blue-50 border border-green-300 hover:bg-blue-100 hover:text-green-700 ">3</a>
                            </li>
                            <li>
                              <a href="/admin/orders" class="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ">4</a>
                            </li>
                            <li>
                              <a href="/admin/orders" class="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ">5</a>
                            </li>
                            <li>
                              <a href="/admin/orders" class="block py-2 px-3 leading-tight text-gray-500 border-l border-gray-300 bg-white hover:bg-gray-100 hover:text-gray-700 ">
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

function SingleOrder(){
  return (
    <tr className="bg-white border-b ">
        <th scope="row" className="py-3 px-2 pl-10 font-medium">
          1
        </th>
        <td className="py-3 px-2 font-light  ">
          Oct 25, 2022
        </td>
        <td className="py-3 px-2 font-light">
        19310 Crescent Dr E
        </td>
        <td className="py-3 px-2 font-light">
        042427272
        </td>
        <td className="py-3 px-2 font-light ">
        COD
        </td>
        <td className="py-3 px-2">
        $82.00
        </td>

        <td className="py-3 px-2">
          <p className='bg-green-400 text-white text-xs py-0.5 px-4 w-max rounded-full'>Pending</p>
        </td>

        <td className="py-3 px-2">
            <select id="countries" class="px-2 py-0.5 border border-gray-200 text-xs text-gray-500 rounded-md placeholder:text-xs placeholder:text-gray-400 w-full" placeholder='Status'>
          
              <option value="pending" className='text-gray-400 text-sm'>Pending</option>
              <option value='delivered' className='text-gray-400 text-sm'>Delivered</option>
              <option value="processing" className='text-gray-400 text-sm'>Processing</option>
              <option value="cancel" className='text-gray-400 text-sm'>Cancel</option>
            </select>
        </td>

        <td className="py-3 px-10">
        <a href="/admin/invoice">
            <span className='cursor-pointer'> 
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
              </svg>
            </span>
          </a>
        </td>

        
      </tr>
  )
}



export default AdminOrders

