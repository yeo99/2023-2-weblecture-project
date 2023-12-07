import Link from "next/link"
import React from "react"

export default function MHeader() {
  return (
    <header>
      <nav className=' flex flex-row justify-between items-center px-8 py-4'>
        <Link href='/' className=' text-lg font-bold'>
          A.M.A
        </Link>
        <div>
          <Link
            href='/signin'
            className=' bg-green-400 text-base font-bold px-4 py-2 rounded-full'
          >
            링크 공유
          </Link>
          <Link
            href='/mypage'
            className=' bg-green-400 text-base font-bold px-4 py-2 rounded-full'
          >
            받은 질문
          </Link>
          <Link
            href='/mypage2'
            className=' bg-green-400 text-base font-bold px-4 py-2 rounded-full '
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
