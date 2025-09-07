import React from 'react'
import quality from '@/app/assetes/quality.png'
import Image from 'next/image'

export default function QualityProducts() {
    return (
    <div className="relative overflow-hidden bg-blue-100 rotate-[-5deg] border border-black my-32">
        <div className="flex animate-slide whitespace-nowrap">
            {/* Repeat Items */}
            {Array(10).fill(0).map((_, i) => (
            <div key={i} className="flex items-center gap-2 px-6 text-blue-900 font-semibold">
                <Image src={quality} alt="icon" className="w-10 h-10" />
                <span className='text-xl'>{i % 2 === 0 ? "Quality Product" : "Shipping Across India"}</span>
            </div>
            ))}
        </div>
    </div>
    )
}