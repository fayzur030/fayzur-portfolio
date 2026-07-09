'use client'
import { usePathname } from 'next/navigation'
import React from 'react'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import { CiMenuFries } from 'react-icons/ci'
import Link from 'next/link'

const navLinks = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Services',
    path: '/services',
  },
  {
    name: 'Resume',
    path: '/resume',
  },
  {
    name: 'Work',
    path: '/work',
  },
  {
    name: 'Contact',
    path: '/contact',
  },
]

const MobileNav = () => {
  const pathname = usePathname()
  return (
    <Sheet>
      <SheetTrigger className='flex justify-center items-center'>
        <CiMenuFries className='text-[32px] text-accent' />
      </SheetTrigger>
      <SheetContent className='flex flex-col '>
        <div className='mt-32 mb-40 text-center text-2xl text-white'>
          <Link href={'/'}>
            <h1 className='text-4xl font-semibold'>
              Fayzur <span className='text-accent'>Rahman</span>
            </h1>
          </Link>

          <nav className='flex flex-col justify-center items-center gap-8 mt-14'>
            {navLinks.map((item, index) => {
              return (
                <Link
                  href={item.path}
                  key={index}
                  className={`${
                    item.path === pathname && ' border-accent transition-all'
                  } text-xl capitalize hover:text-accent transition-all`}
                >
                  {item.name}
                </Link>
              )
            })}
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav
