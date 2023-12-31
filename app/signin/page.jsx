import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";
import SignInBtn from "@/components/SignInBtn";
import Image from 'next/image';
export default async function SignIn() {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect("/");
  }
  return (
    <div>
      <SignInBtn />
    </div>
  );
}