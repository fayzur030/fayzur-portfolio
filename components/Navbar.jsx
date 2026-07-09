'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
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

const Navbar = () => {
  const pathName = usePathname()
  console.log(pathName)
  return (
    <nav className='flex gap-8'>
      {navLinks.map((item, idx) => {
        return (
          <Link
            href={item.path}
            key={idx}
            className={`${item.path === pathName && 'text-accent border-b-2 border-accent'} capitalize font-medium hover:text-accent transition-all duration-150`}
          >
            {item.name}
          </Link>
        )
      })}
    </nav>
  )
}

export default Navbar
