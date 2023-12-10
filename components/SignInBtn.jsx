"use client"
import { signIn } from "next-auth/react"
import Image from "next/image"
import './mainpage/mainpage.css'

export default function SignInBtn() {
  return (
    <div className="signinpage mt-0">
      <div className=' px-5 pt-40 pb-20 mx-auto flex flex-col'>
        <div className='grid place-items-center text-3xl font-bold '>
          A.M.A 서비스
        </div>
        <div className='mt-12 flex flex-col items-center'>
          <h1 className='text-xl  font-extrabold'>
            로그인 with Google or Github
          </h1>
          <div className='w-full flex-1 mt-8'>
            <div className='flex flex-col items-center'>
              <button
                onClick={() => {
                  signIn("google")
                }}
                className='w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline'
              >
                <Image
                  src='/google-logo.png'
                  height={30}
                  width={30}
                  alt='google'
                />
                <span className='ml-4'>Sign in with Google</span>
              </button>
              <br></br>
              <button
                onClick={() => {
                  signIn("github")
                }}
                className='w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline'
              >
                <Image
                  src='/github-logo.png'
                  height={30}
                  width={30}
                  alt='github'
                />
                <span className='ml-4'>Sign in with Github</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}