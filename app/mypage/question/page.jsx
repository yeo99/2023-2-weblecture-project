import MMain from "@/components/mypage/MMain"
import MHeader from "@/components/mypage/MHeader"
import MFooter from "@/components/mypage/MFooter"
import React from "react"
import { NextAuthProvider } from "@/components/Providers"

export default function page() {
  return (
    <div>
      <NextAuthProvider>
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
  )
}
