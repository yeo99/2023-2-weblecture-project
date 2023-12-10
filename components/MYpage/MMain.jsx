"use client"
import { useSession, signOut } from "next-auth/react"
import Image from "next/image"
import AddQuestion from "@/components/MYpage/AddQuestion"
import LikeButton from "./Likebutton"
import YourComponent from "./AddQuestion"
import CommentSection from "./Comment"

export default function MMain() {
  // useSession 훅을 사용하여 사용자 세션 가져오기
  const { status, data: session } = useSession()

  return (
    <main className='mypage'>
      <div className='flex flex-col items-center'>
        {status === "authenticated" ? (
          // 인증된 경우 사용자 프로필 정보 표시
          <>
            <div className='relative inline-flex items-center justify-center w-20 h-20 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600'>
              {/* Image 컴포넌트를 사용하여 사용자 프로필 이미지 표시 */}
              <Image
                className='rounded-full'
                src={session.user.image}
                width={120}
                height={120}
                alt={session.user.name}
              />
            </div>
            <span className='bg-gray-400 text-white text-xs font-medium me-2 px-2.5 py-0.5 rounded '>
              {session?.user?.name}
            </span>
            {/* 여기에 유저의 소개글 추가 */}
            <p className='mt-2 text-center text-sm text-gray-600'>
              여기에 유저의 소개글을 작성하세요.
            </p>
            <AddQuestion>질문하기</AddQuestion>
          </>
        ) : (
          <div>
            <p>로그인 하쇼</p>
          </div>
        )}
      </div>
    </main>
  )
}
