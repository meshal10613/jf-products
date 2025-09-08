import React from 'react'
import Cus from '@/app/assetes/customer.png'
import Cus2 from '@/app/assetes/quote.png'
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import Image from 'next/image'

export default function Testmonial() {
    return (
        <div className='max-w-7xl mx-auto'>
            <h2 className='text-center font-medium text-4xl mb-10'>Why Customers Love ❤️ Us?</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                <div className='col-span-1 md:col-span-2 rounded-3xl bg-[#F2F4F6] px-5 flex flex-col justify-between py-10'>
                    <div>
                        <Image src={Cus2} className='ml-10 mb-10' />
                        <h2 className='ml-10 text-2xl'>I had initial issue with stock availability and delivery. Once the product arrived on site the work has completed very fast(400ft.) Value for money and easy to install. Happy with the product</h2>
                    </div>
                    <div className='mask w-full h-32 rounded-3xl flex items-center justify-between px-10'>
                        <h2 className='font-semibold text-3xl'>- Samuel Varughese</h2>
                        <div className='flex items-center gap-3'>
                            <div className='border rounded-full p-2'>
                                <GoArrowLeft size={20} />
                            </div>
                            <div className='border rounded-full p-2'>
                                <GoArrowRight size={20} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-[#F2F4F6] p-3 rounded-3xl mx-auto'>
                    <Image src={Cus} alt="Customer" className='w-fit' />
                </div>
            </div>
        </div>
    )
}