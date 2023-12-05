import connectMongoDB from "@/libs/mongodb";
import Question from "@/models/question";
import { NextResponse } from "next/server";

// 댓글 추가
export async function POST(request) {
    const {
        author,
        ownerId,
        likeCount,
    } = await request.json()

    await connectMongoDB()
    await Question.create({author, ownerId, likeCount})

    return NextResponse.json({ message: '댓글이 작성되었습니다.'}, {status: 201})
}

// 그러면 답글 추가는 어떻게 해..?