import React from 'react'
import why1 from '@/app/assetes/WhyUs/why1.png'
import why2 from '@/app/assetes/WhyUs/why2.png'
import why3 from '@/app/assetes/WhyUs/why3.png'
import why4 from '@/app/assetes/WhyUs/why4.png'
import Image from 'next/image'

export default function WhyUs() {
    return (
        <div className='max-w-7xl mx-auto mb-20'>
            <h2 className='text-center text-[42px] font-medium'>Why Us</h2>
            <p className='text-xl text-center max-w-3xl mx-auto mb-10'>We specialize in delivering durable and innovative fencing solutions built to last. With a focus on quality and trust, we help secure spaces across industries and communities.</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                <div className='bg-[#F2F4F6] rounded-3xl p-5 w-fit mx-auto space-y-4 relative lg:top-20'>
                    <Image src={why1} alt='why1' className='w-15'/>
                    <h2 className='text-2xl font-medium pr-10'>Unmatched Durability with Corrosion-Free Technology</h2>
                    <p>Our JF-270 barbed wire features a robust 270 GSM zinc coating, ensuring superior resistance against rust and corrosion. Paired with stainless steel binding wire, our fencing solutions are designed to withstand harsh environmental conditions, offering longevity and reliability.</p>
                    <Image src={why4} alt='why1' className='absolute -top-1 left-1'/>
                </div>
                <div className='bg-[#002B55] rounded-3xl p-5 w-fit mx-auto space-y-4 relative'>
                    <Image src={why2} alt='why1' className='w-15'/>
                    <h2 className='text-white text-2xl font-medium pr-10'>Customer-Centric Approach</h2>
                    <p className='text-white'>At JF Products, customer satisfaction is paramount. We pride ourselves on delivering timely services, maintaining transparent communication, and ensuring a seamless purchasing experience. Our commitment to excellence is reflected in the positive feedback from our valued clients.</p>
                    <Image src={why4} alt='why1' className='absolute -top-1 left-1'/>
                </div>
                <div className='bg-[#F2F4F6] rounded-3xl p-5 w-fit mx-auto space-y-4 relative lg:top-20'>
                    <Image src={why3} alt='why1' className='w-15'/>
                    <h2 className='text-2xl font-medium pr-10'>Innovative and Diverse Product Range</h2>
                    <p>We offer a wide array of fencing solutions, including Polyhex Mesh, Australian Trellis, and GI Poultry Mesh, catering to various needs from agricultural to residential applications. Our products combine functionality with aesthetic appeal, ensuring both security and style.</p>
                    <Image src={why4} alt='why1' className='absolute -top-1 left-1'/>
                </div>
            </div>
            <div className='flex items-center justify-center'>
                <button className='btn rounded-3xl bg-[#B0DD1D] my-20'>Contact Us</button>
            </div>
        </div>
    )
}