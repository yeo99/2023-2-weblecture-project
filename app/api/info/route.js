import connectMongoDB from "@/libs/mongodb";
import User from '@/models/user'
import { NextResponse } from "next/server";

// 유저 이메일로 _id 반환
export async function GET(request) {
    try {
        const userEmail = request.nextUrl.searchParams.get("userEmail")

        await connectMongoDB()
        const user = await User.findOne({"email":userEmail})

        if(!user) {
            NextResponse.json({ message: '유저를 찾을 수 없습니다.' }, {status: 404})
        }

        return NextResponse.json({userObjectId: user._id}, { headers: {'cache-control':'no-store'}});
    } catch(error) {
        console.log(error)

        return NextResponse.json({ message: '서버 오류가 발생하였습니다.'})
    }
}