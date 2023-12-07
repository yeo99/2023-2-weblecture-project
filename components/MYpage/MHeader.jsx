import Link from "next/link"
import React from "react"
import '../Mainpage/header.css'
import ShareButton from "./Linkshare"

export default function MHeader() {
  return (
    <header class='MHeader'>
      <nav className=' flex flex-row justify-between items-center px-8 py-4'>
        <Link href='/' className=' text-lg font-bold'>
          A.M.A
        </Link>
        <div>
          <ShareButton/>
          <Link
            href='/mypage'
            className='text-base font-bold px-4 py-2 '
          >
            받은 질문
          </Link>
          <Link
            href='/mypage2'
            className='text-base font-bold px-4 py-2'
          >
            내가 한 질문
          </Link>
          <Link
            href=''
            className=' bg-green-400 text-base font-bold px-4 py-2 rounded-full '
          >
            로그아웃
          </Link>
        </div>
      </nav>
    </header>
  )
}
