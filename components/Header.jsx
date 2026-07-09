import Link from 'next/link'
import React from 'react'
// components
import Navbar from './Navbar'

import MobileNav from './MobileNav'
import { Button } from './ui/button'

const Header = () => {
  return (
    <header className='px-8 lg:py-4 mt-4 text-white'>
      <div className='max-w-7xl mx-auto flex justify-between items-center '>
        {/* Logo */}
        <Link href={'/'}>
          <h1 className='text-4xl font-semibold'>
            Fayzur <span className='text-accent'>Rahman</span>
          </h1>
        </Link>
        {/* desktop navbar and hire me button*/}
        <div className='hidden xl:flex items-center gap-8'>
          <Navbar />

          <Link href={'/contact'}>
            <Button>Hire me</Button>
          </Link>
        </div>

        {/* mobile */}
        <div className='xl:hidden'>
          <MobileNav />
        </div>
      </div>
    </header>
  )
}

export default Header
