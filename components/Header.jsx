import Link from "next/link"
import React from "react"
import './header.css'

export default function Header() {
  return (
    <header class='header'>
      <nav className=' flex flex-row justify-between items-center px-8 py-4'>
        <Link href='/' className=' text-3xl font-bold'>
          A.M.A
        </Link>

        <Link
          href='/signin'
          className=' bg-green-400 text-base font-bold px-4 py-2 rounded-full'
        >
          로그인
        </Link>
      </nav>
    </header>
  )
}