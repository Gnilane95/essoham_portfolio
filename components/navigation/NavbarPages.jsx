import React from 'react'
import Link from 'next/link'

export default function NavbarPages() {
  return (
    <div>
      <nav className=' flex justify-between py-10 px-56 bg-slate-800'>
        <Link href='/' className='font-black text-2xl uppercase logo'>
          <span className='text-amber-700'>Essoham ALI</span>
        </Link>
        <div className='flex space-x-7 text-xl font-semibold text-white'>
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




