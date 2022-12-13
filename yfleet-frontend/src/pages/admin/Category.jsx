import React, { useContext, useEffect, useState } from 'react'
// import ReactTooltip from 'react-tooltip';
import CategoryDrawer from './components/CategoryDrawer'
import sofa from '../../assets/images/png/png7.png'
import AdminLayout from './components/AdminLayout';
import AppContext from '../../context/AppContext';

const Categoty = () => {
    const [newCategory, setNewCategory] = useState(false)
    const {setAdminNav} = useContext(AppContext)

    useEffect(()=>{
        setAdminNav('category')
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
  return (
    <AdminLayout>
      <div className='px-6 py-6 overflow-hidden'>
          <CategoryDrawer newCategory={newCategory} setNewCategory={setNewCategory} />
          <h1 className='text-2xl font-bold text-gray-800'>Category</h1>
          <div className='flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 items-center mt-4'>
              <input type="text" className='px-3 py-2 border border-gray-200 rounded-md placeholder:text-sm placeholder:text-gray-400 w-full' placeholder='Search by category type'/>
              <select id="countries" class="px-3 py-2 border border-gray-200 text-gray-500 rounded-md placeholder:text-sm placeholder:text-gray-400 w-full" placeholder=''>
                <option value='' className='text-gray-400 text-sm'>Category</option>
                <option value='Sofa' className='text-gray-400 text-sm'>Sofa</option>
                <option value="pending" className='text-gray-400 text-sm'>Pending</option>
                <option value="processing" className='text-gray-400 text-sm'>Processing</option>
                <option value="cancel" className='text-gray-400 text-sm'>Cancel</option>
              </select>
              <button className='flex-none flex items-center w-full md:w-max space-x-2 text-white text-xs px-8 py-3 bg-green-500 rounded-md' onClick={()=>setNewCategory(true)}>
                  <span className=''>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                      </svg>
                  </span>
                  <p>Add Category</p>
              </button>
          </div>

          <div className='mt-4'>
              <div className="overflow-x-auto relative shadow-md sm:rounded-lg scrollbar-hide">
                  <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 border z-0">
                      <thead className="text-xs text-gray-700 uppercase bg-gray-50 border-b">
                          <tr>
                              <th scope="col" className="py-3 px-6">
                              ID
                              </th>
                              <th scope="col" className="py-3 px-6">
                              ICON
                              </th>
                              <th scope="col" className="py-3 px-6">
                              PARENT
                              </th>
                              <th scope="col" className="py-3 px-6">
                              CHILDREN
                              </th>
                              <th scope="col" className="py-3 px-6">
                              TYPE
                              </th>
                              <th scope="col" className="py-3 px-6">
                              PUBLISHED
                              </th>
                              <th scope="col" className="py-3 px-6">
                              ACTIONS
                              </th>
                          </tr>
                      </thead>
                      <tbody>
                          <SingleProduct setNewCategory={setNewCategory} />
                          <SingleProduct setNewCategory={setNewCategory} />
                          <SingleProduct setNewCategory={setNewCategory} />
                          <SingleProduct setNewCategory={setNewCategory} />
                          <SingleProduct setNewCategory={setNewCategory} />
                          <SingleProduct setNewCategory={setNewCategory} />
                          <SingleProduct setNewCategory={setNewCategory} /> 
                          
                      </tbody>
                  </table>
              </div>
                  <div className='bg-white flex flex-col md:flex-row items-center justify-between w-full mt-6 px-4 shadow-md border rounded py-2 md:py-0'>
                        <p className='text-sm text-gray-500'>SHOWING 1-15 OF 288</p>
                        <div aria-label="Page navigation example">
                          <ul class="inline-flex items-center -space-x-px pt-2">
                            <li>
                              <a href="/admin/category" class="block py-2 px-3 ml-0 leading-tight text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700 ">
                                <span class="sr-only">Previous</span>
                                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                              </a>
                            </li>
                            <li>
                              <a href="/admin/category" class="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ">1</a>
                            </li>
                            <li>
                              <a href="/admin/category" class="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ">2</a>
                            </li>
                            <li>
                              <a href="/admin/category" aria-current="page" class="z-10 py-2 px-3 leading-tight text-green-600 bg-blue-50 border border-green-300 hover:bg-blue-100 hover:text-green-700 ">3</a>
                            </li>
                            <li>
                              <a href="/admin/category" class="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ">4</a>
                            </li>
                            <li>
                              <a href="/admin/category" class="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ">5</a>
                            </li>
                            <li>
                              <a href="/admin/category" class="block py-2 px-3 leading-tight text-gray-500 border-l border-gray-300 bg-white hover:bg-gray-100 hover:text-gray-700 ">
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

function SingleProduct({setNewCategory}){
  return (
    <tr className="bg-white border-b ">
        <th scope="row" className="py-0 px-6 font-medium">
        2845
        </th>
        <td className="py-0 px-6 font-light">
            <div className='h-10 w-10 rounded-full bg-gray-200'>
              <img src={sofa} alt="sofa" className="h-full w-full "/>
            </div>
        </td>
        <td className="py-0 px-6 font-light">
            <div className='flex items-center space-x-4 text-white'>
                <p className='text-xs px-2 py-0.5 bg-gray-400 rounded-full'>Sofa</p>
                <p className='text-xs px-2 py-0.5 bg-gray-400 rounded-full'>Chair</p>
            </div>
        </td>
        <td className="py-0 px-6 font-light">
          2
        </td>
        <td className="py-0 px-6 font-light ">
          Couch
        </td>

        <td className="py-0 px-6">
            <div className="cursor-pointer my-5 rounded-full relative shadow-sm w-max">
                <input type="checkbox" name="toggle" id="toggle1" className="focus:outline-none checkbox w-3 h-3 mx-0.5 bg-black rounded-full absolute shadow-sm appearance-none cursor-pointer border border-red-500 top-0 bottom-0 m-auto" />
                <label htmlFor="toggle1" className="toggle-label block w-7 h-4 overflow-hidden rounded-full border bg-red-500/20 border-red-500  cursor-pointer" />
            </div>
        </td>

        <td className="py-0 px-6">
          <div className='flex items-center space-x-4'>
            <span className='cursor-pointer' onClick={()=>setNewCategory(true)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
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



export default Categoty

