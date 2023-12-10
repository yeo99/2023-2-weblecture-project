"use client";
import './header.css'
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const { status, data: session } = useSession();
  return (
    <nav className="Header flex flex-row ">
      <Link href='/' className=' text-3xl font-bold'>
          A.M.A
        </Link>
      <div className="flex gap-3">
        {status === "authenticated" ? (
          <>
            <button
              onClick={() => signOut()}
              className=" bg-green-400 text-base font-bold px-4 py-2 rounded-full w-25 h-15"
            >
              Sign Out
            </button>
            <div className="flex gap-2 items-center">
              <Link
              href='/mypage/question'>
              <Image
                className="rounded-full"
                src={session?.user?.image}
                width={40}
                height={40}
                alt={session?.user?.name}
              />
              </Link>
            </div>
          </>
        ) : (
          <Link
          href='/signin'
          className=' bg-green-400 text-base font-bold px-4 py-2 rounded-full'
        >
          로그인
        </Link>
        )}
      </div>
    </nav>
  );
}
