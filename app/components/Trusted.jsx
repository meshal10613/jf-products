import React from 'react'
import Trusted1 from '@/app/assetes/Trusted/trusted1.png';
import Trusted2 from '@/app/assetes/Trusted/trusted2.png';
import Trusted3 from '@/app/assetes/Trusted/trusted3.png';
import Trusted4 from '@/app/assetes/Trusted/trusted4.png';
import Image from 'next/image';

export default function Trusted() {
    return (
        <div className='bg-[#002B55] max-w-7xl mx-auto md:rounded-3xl space-y-5 py-32 relative overflow-hidden mb-20'>
            <h2 className='text-[42px] font-medium text-white text-center'>Trusted by over 6K+ customers</h2>
            <div className='flex flex-col md:flex-row items-center justify-center gap-20'>
                <div className='flex items-center gap-3'>
                    <div className='bg-white p-4 rounded-full w-fit'>
                        <Image src={Trusted1} alt="Trusted1" className=' rounded-full' />
                    </div>
                    <h2 className='text-white font-medium text-3xl'>Premium <br /> <span className='text-2xl'>Products</span></h2>
                </div>
                <div className='flex items-center gap-3'>
                    <div className='bg-white p-4 rounded-full w-fit'>
                        <Image src={Trusted2} alt="Trusted1" className=' rounded-full' />
                    </div>
                    <h2 className='text-white font-medium text-3xl'>Premium <br /> <span className='text-2xl'>Products</span></h2>
                </div>
                <div className='flex items-center gap-3'>
                    <div className='bg-white p-4 rounded-full w-fit'>
                        <Image src={Trusted3} alt="Trusted1" className=' rounded-full' />
                    </div>
                    <h2 className='text-white font-medium text-3xl'>Premium <br /> <span className='text-2xl'>Products</span></h2>
                </div>
            </div>
            <Image src={Trusted4} alt="Trusted4" className='absolute -bottom-25 md:-top-[58px] md:left-1/4 z-50' />
        </div>
    )
}