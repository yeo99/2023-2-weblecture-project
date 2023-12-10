// /app/api/question/route.js
import connectMongoDB from "@/libs/mongodb";
import Question from "@/models/question";
import { NextResponse } from "next/server";

// userId로 댓글 불러오기(각 유저의 _id)
export async function GET(request) {
    try {
        const userId = request.nextUrl.searchParams.get("userId")
        
        await connectMongoDB()
        const questions = await Question.find({"ownerId":userId})

        return NextResponse.json({questions})
    } catch(error) {
        console.log(error)

        return NextResponse.json({ message: '서버 오류가 발생하였습니다.'}, {status: 500})
    }
}

// 댓글 추가
export async function POST(request) {
    try {
        const {author, ownerId, content} = await request.json()
        
        await connectMongoDB()
        await Question.create({author, ownerId, content})
    
        return NextResponse.json({ message: '댓글이 작성되었습니다.'}, {status: 201})
    } catch(error) {
        console.log(error)

        return NextResponse.json({ message: '서버 오류가 발생하였습니다.'}, {status: 500})
    }
}

// 댓글 삭제
export async function DELETE(request) {
    try {
        const id = request.nextUrl.searchParams.get("questionId")

        await connectMongoDB()
        await Question.findByIdAndDelete(id)

        return NextResponse.json({ message: "댓글이 삭제되었습니다." }, { status: 200 })
    } catch(error) {
        console.log(error)

        return NextResponse.json({ message: '서버 오류가 발생하였습니다.'}, {status: 500})
    }
}

// 댓글 수정
export async function PUT(request) {
    try {
        const id = request.nextUrl.searchParams.get("questionId")
        const {content} = await request.json();

        await connectMongoDB();
        await Question.findByIdAndUpdate(id, {content})

        return NextResponse.json({ message: "댓글이 수정되었습니다."})
    } catch(error) {
        console.log(error)

        return NextResponse.json({ message: '서버 오류가 발생하였습니다.' }, {status: 500})
    }
}