import Header from "@/components/Mainpage/Header"
import Mainpage from "@/components/Mainpage/Mainpage"
import Footer from "@/components/Mainpage/Footer"
import { NextAuthProvider } from "@/components/Providers"
// import Image from "next/image"

export default function Home() {
  return (
    <div>
      <NextAuthProvider>
      <Header />
      </NextAuthProvider>
      <Mainpage />
      <Footer />
    </div>
  )
}
