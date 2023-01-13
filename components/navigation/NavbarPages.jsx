import React from 'react'
import Link from 'next/link';
import FullscreenNavbar from '../FullscreenNavbar';

export default function NavbarPages() {
  return (
    <div className='bg-slate-800'>
      <nav className='flex justify-between items-center pb-10 lg:pt-10 px-10 md:px-24 lg:px-28 xl:px-44'>
        <Link href='/' className='font-bold sm:text-2xl md:text-4xl lg:text-2xl sm:mt-10 lg:mt-0 lg:uppercase'>
          <span className='text-amber-700'>Essoham<span className='text-white'>.ALI</span></span>
        </Link>
        <FullscreenNavbar/>
        <div className='lg:flex space-x-7 text-xl font-semibold text-white sm:hidden'>
          <Link href='/research' className='hover:text-amber-600'>
            Research
          </Link>
          <Link href='/publications' className='hover:text-amber-600'>
            Publications
          </Link>
          <Link href='/teaching' className='hover:text-amber-600'>
            Teaching
          </Link>
          <Link href='/talks' className='hover:text-amber-600'>
            Talks
          </Link>
        </div>
      </nav>
    </div>
  )
}




