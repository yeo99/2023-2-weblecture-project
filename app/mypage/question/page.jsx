
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
<<<<<<< HEAD
        <MHeader />
      </NextAuthProvider>
      <NextAuthProvider>
        <MMain />
      </NextAuthProvider>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <MFooter />
    </div>
=======
      <Header />
      </NextAuthProvider>
      <article className='mypage2'>
        
      </article>
      <Footer />
    </main>
>>>>>>> 875c0b476df235c6f6741e51990169a18ddcc369
  )
}
