import Link from 'next/link'
import React from 'react'
import { AiOutlineUser } from 'react-icons/ai'
import { CiSearch } from 'react-icons/ci'
import { IoBagOutline } from 'react-icons/io5'

export default function Navbar() {
    return (
        <div className='max-w-7xl mx-2 md:mx-auto flex items-center justify-between py-5 relative'>
            <div>
                <ul className='flex items-center gap-3'>
                    <li><Link href='/home' className='text-base'>Home</Link></li>
                    <li><Link href='/shop' className='text-base'>Shop</Link></li>
                    <li><Link href='/blogs' className='text-base'>Blogs</Link></li>
                    <li><Link href='/contact' className='text-base'>Contact</Link></li>
                </ul>
            </div>
            <div className='flex items-center gap-2 md:gap-5'>
                <Link href='/login' className='flex items-center gap-1 text-base'>Login <AiOutlineUser size={20} /></Link>
                <Link href={'/search'} className='text-base'><CiSearch size={20} /></Link>
                <Link href={'/cart'} className='text-base'><IoBagOutline size={20} /></Link>
            </div>
            <img src={'/logo.png'} alt='logo' className='absolute z-50 left-[46%] top-3'/>
        </div>
    )
}