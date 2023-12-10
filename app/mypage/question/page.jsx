
import Header from "@/components/header/Header"
import Footer from "@/components/footer/Footer"
import '@/components/mypage/MMain.css'
import React from "react"
import LikeButton from "@/components/mypage/Likebutton"
import { NextAuthProvider } from "@/components/Providers"

export default function page() {
  return (
    <main>
      <NextAuthProvider>
      <Header />
      </NextAuthProvider>
      <article className='mypage2'>
        
      </article>
      <Footer />
    </main>
  )
}
