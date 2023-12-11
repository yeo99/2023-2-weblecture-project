import connectMongoDB from '@/libs/mongodb'
import User from '@/models/user'
import { NextResponse } from 'next/server'

// 유저 회원가입
export async function POST(request) {
    const { name, email, image } = await request.json()
    await connectMongoDB()
    await User.create({ name, email, image })

    return NextResponse.json({ message: 'User registered' }, { status: 201 })
}

// 유저 _id로 검색 정보 반환
export async function GET(request) {
    try {
        const objectId = request.nextUrl.searchParams.get("objectId")

        await connectMongoDB()
        const user = await User.findOne({"_id":objectId})

        if(!user) {
            NextResponse.json({ message: '유저를 찾을 수 없습니다.'}, {status: 404})
        }

        return NextResponse.json(user)
    } catch(error) {
        console.log(error)

        return NextResponse.json({ message: '서버 오류가 발생하였습니다.' })
    }
}