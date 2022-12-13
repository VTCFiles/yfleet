import React from 'react'

const NewProductDrawer = ({newProduct, setNewProduct}) => {
  return (
    <div className={`absolute left-0 top-0 flex w-full z-50 transition-all duration-500 ${newProduct? "h-screen" : "h-0 overflow-hidden"}`}>
        <div className='flex-auto bg-gray-800/70' onClick={()=>setNewProduct(false)}></div>
        <div className='w-[35rem] bg-neutral-100 '>
            <form className='flex h-screen flex-col'>
                {/* header */}
                <div className='flex items-center px-4 py-2 justify-between bg-gray-200 flex-none w-full'>
                    <div>
                        <h3 className='text-2xl text-gray-700'>Add Product</h3>
                        <p className='text-sm text-gray-500'>Add your product and necessary information from here</p>
                    </div>
                    <div className='w-8 h-8 cursor-pointer rounded-full flex items-center justify-center bg-white text-red-500' onClick={()=>setNewProduct(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                        </svg>
                    </div>
                </div>

                <div className='px-4 my-4 overflow-y-auto'>
                    <div className='flex items-start my-7'>
                            <label htmlFor="product_sku" className='w-[13rem] text-gray-600 font-light '>Product Image</label>
                            <div class="w-full">
                                <label
                                    className="flex justify-center w-full h-32 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer focus:outline-none">
                                    <span className="flex items-center space-x-2 text-gray-400">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24"
                                            stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                        </svg>
                                        <span className="font-light text-sm text-gray-400">
                                            Drop files to Attach, or
                                            <span className="text-blue-600 "> browse</span>
                                        </span>
                                    </span>
                                    <input type="file" name="file_upload" className="hidden" />
                                </label>
                            </div>
                        </div>
                
                    <div className='flex items-start my-7'>
                        <label htmlFor="product_sku" className='w-[13rem] text-gray-600 font-light '>Product SKU</label>
                        <input type="text" name='product_sku' className='flex-auto border w-full border-gray-200 rounded-md outline-none px-2 py-3 placeholder:text-sm placeholder:text-gray-400' placeholder='Product SKU' />
                    </div>
                    <div className='flex items-start my-7'>
                        <label htmlFor="product_title" className='w-[13rem] text-gray-600 font-light '>Product Title</label>
                        <input type="text" name='product_title' className='flex-auto border w-full border-gray-200 rounded-md outline-none px-2 py-3 placeholder:text-sm placeholder:text-gray-400' placeholder='Product Title' />
                    </div>
                    <div className='flex items-start my-7'>
                        <label htmlFor="product_slug" className='w-[13rem] text-gray-600 font-light '>Product Slug</label>
                        <input type="text" name='product_slug' className='flex-auto border w-full border-gray-200 rounded-md outline-none px-2 py-3 placeholder:text-sm placeholder:text-gray-400' placeholder='Product Slug' />
                    </div>
                    <div className='flex items-start my-7'>
                        <label htmlFor="product_description" className='w-[13rem] text-gray-600 font-light '>Product Description</label>
                        <textarea name='product_description' className='flex-auto border w-full border-gray-200 rounded-md outline-none px-2 py-3 placeholder:text-sm placeholder:text-gray-400' placeholder='Product details' rows='3'></textarea>
                    </div>
                    <div className='flex items-start my-7'>
                        <label htmlFor="parent_category" className='w-[13rem] text-gray-600 font-light '>Parent Category</label>
                        <input type="text" name='parent_category' className='flex-auto border w-full border-gray-200 rounded-md outline-none px-2 py-3 placeholder:text-sm placeholder:text-gray-400' placeholder='' />
                    </div>
                    <div className='flex items-start my-7'>
                        <label htmlFor="child_category" className='w-[13rem] text-gray-600 font-light '>Child Category</label>
                        <input type="text" name='child_category' className='flex-auto border w-full border-gray-200 rounded-md outline-none px-2 py-3 placeholder:text-sm placeholder:text-gray-400' placeholder='' />
                    </div>
                    <div className='flex items-start my-7'>
                        <label htmlFor="product_type" className='w-[13rem] text-gray-600 font-light '>Product Type</label>
                        <input type="text" name='product_type' className='flex-auto border w-full border-gray-200 rounded-md outline-none px-2 py-3 placeholder:text-sm placeholder:text-gray-400' placeholder='Select type' />
                    </div>
                    <div className='flex items-start my-7'>
                        <label htmlFor="quantity" className='w-[13rem] text-gray-600 font-light '>Quantity</label>
                        <input type="number" name='quantity' className='flex-auto border w-full border-gray-200 rounded-md outline-none px-2 py-3 placeholder:text-sm placeholder:text-gray-400' placeholder='' />
                    </div>
                    <div className='flex items-start my-7'>
                        <label htmlFor="product_price" className='w-[13rem] text-gray-600 font-light '>Product Price</label>
                        <input type="number" name='product_price' className='flex-auto border w-full border-gray-200 rounded-md outline-none px-2 py-3 placeholder:text-sm placeholder:text-gray-400' placeholder='Product Price' />
                    </div>
                    <div className='flex items-start my-7'>
                        <label htmlFor="sales_price" className='w-[13rem] text-gray-600 font-light '>Sales Price</label>
                        <input type="number" name='sales_price' className='flex-auto border w-full border-gray-200 rounded-md outline-none px-2 py-3 placeholder:text-sm placeholder:text-gray-400' placeholder='Sales Price' />
                    </div>
                    <div className='flex items-start my-7'>
                        <label htmlFor="product_tag" className='w-[13rem] text-gray-600 font-light '>Product Tag</label>
                        <input type="text" name='product_tag' className='flex-auto border w-full border-gray-200 rounded-md outline-none px-2 py-3 placeholder:text-sm placeholder:text-gray-400' placeholder='Product tag (write press enter to add)' />
                    </div>
                </div>


                <div className='flex items-center px-4 py-4 space-x-8 bg-gray-200 flex-none w-full'>
                    <div className='text-center text-gray-500 text-xs px-8 py-4 rounded-md w-full border border-gray-600' onClick={()=>setNewProduct(false)}>
                        Cancel
                    </div>
                    <button type='submit' className='text-center text-white text-xs px-8 py-4 bg-green-500 border border-green-500 rounded-md w-full'>
                        Add Product
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default NewProductDrawer