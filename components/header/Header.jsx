"use client";
import Link from "next/link";
import "../header/header.css";
// import ShareButton from "../mypage/Linkshare";
import ShareButton from "@/components/mypage/Linkshare"
import { useSession, signOut } from "next-auth/react";
import React, { useState, useEffect } from "react";
import axiosInstance from "@/libs/axios";

export default function MHeader() {
  const { status, data: session } = useSession();
  const [userObjectId, setUserObjectId] = useState(null);

  useEffect(() => {
    if (status === "authenticated") {
      const fetchUserObjectId = async () => {
        try {
          // const response = await fetch(
          //   `/api/info?userEmail=${encodeURIComponent(
          //     session.user.email
          //   )}`
          // );

          // const data = await response.json();
          console.log(session)
          const getUserId = async() => {
            const response = await axiosInstance.get(`/api/info?userEmail=${session.user.email}`);

            if(!response.data.userObjectId) {
              alert('유저 정보를 가져오던 중 오류가 발생하였습니다.')
              return false;
            }

            setUserObjectId(response.data.userObjectId);
          }
          getUserId()
          // console.log(data)
          // if (data.userObjectId) {
          //   setUserObjectId(data.userObjectId);
          // }
        } catch (error) {
          console.error("Error fetching user object ID:", error);
        }
      };
      fetchUserObjectId();
    }
  }, [status, session]);

  const handleLogout = () => {
    if (window.confirm("로그아웃 하시겠습니까?")) {
      signOut();
    }
  };

  return (
    <header className="MHeader">
      <div className="flex flex-row justify-between items-center px-8 py-4">
        <Link href="/">
          <p className="text-3xl font-bold">A.M.A</p>
        </Link>
        <div className="flex items-center">
          {status === "authenticated" ? (
            <>
              <ShareButton />
              <Link href={`/mypage/${userObjectId}`}>
                <p className="text-base font-bold pl-4 py-2">받은 질문</p>
              </Link>
              <Link href="/mypage/question">
                <p className="text-base font-bold pl-4 pr-4 py-2">내가 한 질문</p>
              </Link>
              <button
                onClick={handleLogout}
                className="bg-green-400 text-base font-bold px-4 py-2 rounded-full"
              >
                로그아웃
              </button>
            </>
          ) : (
            <Link href="/signin">
              <p className="text-base font-bold px-4 py-2">로그인</p>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
