"use client";
import Link from "next/link"
import React from "react"
import '../Mainpage/header.css'
import ShareButton from "./Linkshare"
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import Header from "@/components/Mainpage/Header"
import Mainpage from "@/components/Mainpage/Mainpage"
import Footer from "@/components/Mainpage/Footer"
import { NextAuthProvider } from "@/components/Providers"

export default function MHeader() {
  const { status, data: session } = useSession();
  const handleLogout = () => {
    // 로그아웃 전에 확인 메시지를 띄우고 로그아웃 처리
    if (window.confirm("로그아웃 하시겠습니까?")) {
      signOut();
    }
  };

  return (
    <header className='MHeader'>
      <div className="flex flex-row justify-between items-center px-8 py-4">
        <Link href='/' className='text-lg font-bold'>
          A.M.A
        </Link>
        <div className="flex items-center">
          {status === "authenticated" ? (
            // 인증된 경우 사용자 프로필 정보 표시
            <>
              <ShareButton/>
              <Link href='/mypage' className='text-base font-bold px-4 py-2'>
                받은 질문
              </Link>
              <Link href='/mypage2' className='text-base font-bold px-4 py-2'>
                내가 한 질문
              </Link>
              <button
                onClick={handleLogout}
                className="bg-green-400 text-base font-bold px-4 py-2 rounded-full"
              >
                로그아웃
              </button>
            </>
          ) : (
            // 로그인하지 않은 경우에는 alert로 접근 거부
            <div onClick={() => alert("로그인이 필요합니다.")}>
              <Link href='/signin' className='text-base font-bold px-4 py-2'>
                로그인
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}