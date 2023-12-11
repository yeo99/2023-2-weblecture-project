import Header from "@/components/header/Header"
import Mainpage from "@/components/mainpage/Mainpage"
import Footer from "@/components/footer/Footer"
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
