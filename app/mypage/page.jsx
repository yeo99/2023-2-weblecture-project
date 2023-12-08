import MMain from "@/components/MYpage/MMain"
import MHeader from "@/components/MYpage/MHeader"
import MFooter from "@/components/MYpage/MFooter"
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
      <MFooter />
    </div>
  )
}
