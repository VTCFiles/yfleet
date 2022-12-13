import React, { useContext, useEffect } from 'react'
// import ReactTooltip from 'react-tooltip';
import AdminLayout from './components/AdminLayout';
import AppContext from '../../context/AppContext';

const Invoice = () => {
    // const [newOrder, setNewOrder] = useState(false)
    const {setAdminNav} = useContext(AppContext)

    useEffect(()=>{
        setAdminNav('orders')
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
  return (
    <AdminLayout>
      <div className='px-6 py-6 overflow-hidden'>
        <h1 className='text-2xl font-bold text-gray-800'>Invoice</h1>
        <div className='bg-white border rounded-md py-4 px-4 mt-4'>

            <div className='flex justify-between items-start border-b py-4 flex-col md:flex-row space-y-4 md:space-y-0'>
                <div>
                    <h1 className='text-lg font-bold text-gray-800'>Invoice</h1>
                    <p className='font-bold text-sm text-gray-400'>Status: <span className='bg-green-400 text-white text-xs py-1 px-3 font-light w-max rounded-full'>Pending</span></p>
                </div>
                <div className='flex flex-col md:items-end'>
                    <h4 className='text-lg font-bold text-gray-800'>Melah Ghislain</h4>
                    <p className='text-sm text-gray-400'>Cecilia Chapman, 561-4535 Nulla LA,</p>
                    <p className='text-sm text-gray-400'>United States 96522</p>
                </div>
            </div>

            <div className='flex justify-between items-start py-4 flex-col md:flex-row space-y-4 md:space-y-0'>
                <div>
                    <p className='font-bold text-sm text-gray-500'>DATE</p>
                    <p className='text-sm text-gray-400'>October 25, 2022</p>
                </div>
                <div>
                    <p className='font-bold text-sm text-gray-500'>INVOICE NO</p>
                    <p className='text-sm text-gray-400'>#10012</p>
                </div>
                <div className='flex flex-col md:items-end'>
                    <p className='font-bold text-sm text-gray-500'>INVOICE TO.</p>
                    <p className='text-sm text-gray-400'>Geoffrey M Whittall</p>
                    <p className='text-sm text-gray-400'>19310 Crescent Dr E</p>
                    <p className='text-sm text-gray-400'>Spanaway, United States, 98387</p>
                </div>
            </div>

            {/* table */}
            <div className="overflow-x-auto relative scrollbar-hide mt-4">
                  <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 border z-0">
                      <thead className="text-xs text-gray-700 uppercase bg-gray-50 border-b">
                          <tr>
                              <th scope="col" className="py-3 px-6">
                              SR
                              </th>
                              <th scope="col" className="py-3 px-6">
                              PRODUCT NAME
                              </th>
                              <th scope="col" className="py-3 px-6 ">
                              QUANTITY
                              </th>
                              <th scope="col" className="py-3 px-6">
                              ITEM PRICE
                              </th>
                              <th scope="col" className="py-3 px-6">
                              AMOUNT
                              </th>
                              
                          </tr>
                      </thead>
                      <tbody>
                          <SingleInvoice />
                          <SingleInvoice />
                          
                      </tbody>
                  </table>
              </div>

            <div className='flex justify-between items-start py-4 mt-4 flex-col md:flex-row space-y-4 md:space-y-0'>
                <div>
                    <p className='font-bold text-sm text-gray-500'>PAYMENT METHOD</p>
                    <p className='text-sm text-gray-400'>COD</p>
                </div>
                <div>
                    <p className='font-bold text-sm text-gray-500'>SHIPPING COST</p>
                    <p className='text-sm text-gray-400'>$60.00</p>
                </div>
                <div>
                    <p className='font-bold text-sm text-gray-500'>DISCOUNT</p>
                    <p className='text-sm text-gray-400'>$0.00</p>
                </div>
                <div>
                    <p className='font-bold text-sm text-gray-500'>TOTAL AMOUNT</p>
                    <p className='font-bold  text-green-500'>$86.00</p>
                </div>
            </div>

        </div>
      </div>
    </AdminLayout>
  )
}

function SingleInvoice(){
    return (
      <tr className="bg-white border-b ">
          <th scope="row" className="py-3 px-6 pl-10 font-medium">
            1
          </th>
          <td className="py-3 px-6 font-light  ">
          Green Leaf Lettuce
          </td>
          <td className="py-3 px-6 font-light">
          1
          </td>
          <td className="py-3 px-6 font-light">
          $14.00
          </td>
          <td className="py-3 px-6 font-light ">
            <p className='text-sm font-bold text-green-500'>$14.00</p>
          </td>
          
        </tr>
    )
  }

export default Invoice

