
import MHeader from "@/components/mypage/MHeader"
import MFooter from "@/components/mypage/MFooter"
import '@/components/mypage/MMain.css'
import React from "react"
import LikeButton from "@/components/mypage/Likebutton"
import { NextAuthProvider } from "@/components/Providers"

export default function page() {
  return (
    <main>
      <NextAuthProvider>
      <MHeader />
      </NextAuthProvider>
      <article className='mypage2'>
        <section>
          <div className='container px-5 py-10 mx-auto flex flex-wrap'>
            <div className='flex flex-wrap w-full border-b-2 border-black'>
              <div className='lg:w-2/5 md:w-1/2 md:pr-10 md:py-6 '>
                <div className='flex relative pb-12 '>
                  <div className='h-full w-10 absolute inset-0 flex items-center justify-center '></div>
                  <div className='flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 inline-flex items-center justify-center text-white relative z-10 '></div>
                  <div className='flex-grow pl-4'>
                    <h2 className='font-medium title-font text-sm text-gray-900 mb-1 tracking-wider'>
                      To.받은 사람
                    </h2>
                    <p className='leading-relaxed'> 질문 1</p>
                    <div classNameName='flex place-items-center '>
                    <LikeButton/>
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z'
                        />
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke-width='1.5'
                        stroke='currentColor'
                        className='w-6 h-6 mx-10'
                      >
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          d='M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0'
                        />
                      </svg>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke-width='1.5'
                        stroke='currentColor'
                        className='w-6 h-6 mx-10'
                      >
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          d='M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z'
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className='container px-5 py-10 mx-auto flex flex-wrap'>
            <div className='flex flex-wrap w-full border-b-2 border-black'>
              <div className='lg:w-2/5 md:w-1/2 md:pr-10 md:py-6 '>
                <div className='flex relative pb-12 '>
                  <div className='h-full w-10 absolute inset-0 flex items-center justify-center '></div>
                  <div className='flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 inline-flex items-center justify-center text-white relative z-10 '></div>
                  <div className='flex-grow pl-4'>
                    <h2 className='font-medium title-font text-sm text-gray-900 mb-1 tracking-wider'>
                      To.받은 사람
                    </h2>
                    <p className='leading-relaxed'> 질문 2</p>
                    <div classNameName='flex place-items-center '>
                    <LikeButton/>
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z'
                        />
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke-width='1.5'
                        stroke='currentColor'
                        className='w-6 h-6 mx-10'
                      >
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          d='M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0'
                        />
                      </svg>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke-width='1.5'
                        stroke='currentColor'
                        className='w-6 h-6 mx-10'
                      >
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          d='M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z'
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className='container px-5 py-10 mx-auto flex flex-wrap'>
            <div className='flex flex-wrap w-full border-b-2 border-black'>
              <div className='lg:w-2/5 md:w-1/2 md:pr-10 md:py-6 '>
                <div className='flex relative pb-12 '>
                  <div className='h-full w-10 absolute inset-0 flex items-center justify-center '></div>
                  <div className='flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 inline-flex items-center justify-center text-white relative z-10 '></div>
                  <div className='flex-grow pl-4'>
                    <h2 className='font-medium title-font text-sm text-gray-900 mb-1 tracking-wider'>
                      To.받은 사람
                    </h2>
                    <p className='leading-relaxed'> 질문 3</p>
                    <div classNameName='flex place-items-center '>
                    <LikeButton/>
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z'
                        />

                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke-width='1.5'
                        stroke='currentColor'
                        className='w-6 h-6 mx-10'
                      >
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          d='M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0'
                        />
                      </svg>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke-width='1.5'
                        stroke='currentColor'
                        className='w-6 h-6 mx-10'
                      >
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          d='M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z'
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </article>
      <MFooter />
    </main>
  )
}
