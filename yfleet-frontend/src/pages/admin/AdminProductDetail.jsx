import React, { useContext, useEffect, useState } from 'react'
import AdminLayout from './components/AdminLayout'
import png3 from '../../assets/images/png/png3.png'
import Badge from '../../components/Badge'
import NewProductDrawer from './components/NewProductDrawer'
import AppContext from '../../context/AppContext'
import img1 from '../../assets/images/png/png1.png'
import img2 from '../../assets/images/png/png2.png'
import img3 from '../../assets/images/png/png3.png'
import img4 from '../../assets/images/png/png4.png'
import img5 from '../../assets/images/png/png5.png'
import img6 from '../../assets/images/png/png6.png'
import ProductSlider from '../products/ProductSlider'


const items = [
    {
        percentage: "10",
        instock: true,
        quantity: "5",
        image: img1,
        title: "Dinning Table",
        promoPrice: "400",
        price: "500",

    },
    {
        percentage: "20",
        instock: false,
        quantity: "0",
        image: img2,
        title: "Soft Sleeping Couch",
        promoPrice: "450",
        price: "600",

    },
    {
        percentage: "30",
        instock: true,
        quantity: "3",
        image: img3,
        title: "Soft Sleeping Couch",
        promoPrice: "300",
        price: "400",

    },
    {
        percentage: "10",
        instock: true,
        quantity: "3",
        image: img4,
        title: "Soft Chair",
        promoPrice: "300",
        price: "400",

    },
    {
        percentage: "10",
        instock: true,
        quantity: "3",
        image: img5,
        title: "Soft Chair",
        promoPrice: "300",
        price: "400",

    },
    {
        percentage: "10",
        instock: true,
        quantity: "3",
        image: img6,
        title: "Soft Chair",
        promoPrice: "300",
        price: "400",

    },
    
]

const AdminProductDetail = () => {
    const [newProduct, setNewProduct] = useState(false)
    const {setAdminNav} = useContext(AppContext)

    useEffect(()=>{
        setAdminNav('products')
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
  return (
    <AdminLayout>
        <NewProductDrawer newProduct={newProduct} setNewProduct={setNewProduct} />
        <div className='flex '>
            <div className='flex-auto h-full bg-white min-h-[33.5rem]'>
                <div className='h-full'>
                    <img src={png3} alt="product-detail" className='w-full h-full object-contain' />
                </div>
                <div className='px-6'>
                    <ProductSlider 
                        items={items}
                    />

                </div>
            </div>
            <div className='flex-none w-[30rem] h-full py-6 px-6'>
                <h6 className='text-gray-500 font-bold'>Status: <span className='text-green-500'>This product showing</span></h6>
                <p className='text-2xl mt-2 text-gray-700 font-normal'>Soft Sofa</p>
                <p className='text-sm text-gray-500'>SKU: <span className='text-gray-400'>9AF4EF</span></p>

                <p className='text-gray-500 mt-2 font-bold'>XAF 400000</p>
                <div className='mt-2 flex items-center space-x-4'>
                    <Badge text='In Stock' bg='bg-green-500 w-max text-white rounded-full px-4' />
                    <p className='text-gray-500'>Quantity: <span>15</span></p>
                </div>

                <p className='text-sm text-gray-500 my-4'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti sequi labore non 
                    aliquam dolor nostrum placeat deserunt aspernatur ipsum. Quaerat commodi consectetur
                    laudantium, quisquam eaque omnis natus nesciunt doloremque enim repudiandae sit dolor 
                    ratione animi magnam facilis iusto facere consequatur.
                </p>

                <p className='text-sm text-gray-500'>Category: <span className='text-gray-400'>Sofa</span></p>

                <div className='mt-2 flex items-center space-x-4'>
                    <Badge text='Quality' bg='bg-gray-200 w-max text-gray-700 rounded-full px-4' />
                    <Badge text='Soft' bg='bg-gray-200 w-max text-gray-700 rounded-full px-4' />
                    <Badge text='Interior' bg='bg-gray-200 w-max text-gray-700 rounded-full px-4' />
                </div>

                <button className='px-6 py-2 bg-green-500 text-white rounded-md mt-6' onClick={()=>setNewProduct(true)}>
                    Edit Product
                </button>
            </div>
        </div>
    </AdminLayout>
  )
}

export default AdminProductDetail