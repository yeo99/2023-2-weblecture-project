import MMain from "@/components/mypage/MMain"
import Header from "@/components/header/Header"
import Footer from "@/components/footer/Footer"
import React from "react"
import { NextAuthProvider } from "@/components/Providers"

export default function page() {
  return (
    <div>
      <NextAuthProvider>
      <Header />
      </NextAuthProvider>
      <NextAuthProvider>
      <MMain />
      </NextAuthProvider>
      <Footer />
    </div>
  )
}
