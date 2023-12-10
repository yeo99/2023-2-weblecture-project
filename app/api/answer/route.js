import connectMongoDB from "../../../libs/mongodb";
import Question from "@/models/question";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

// 답글 추가
export async function POST(request) {
    try {
        const {author, ownerId, content} = await request.json();
        const id = request.nextUrl.searchParams.get("questionId")
        
        await connectMongoDB();

        // 답글(answer)를 달 댓글(question)을 찾음
        const matchQuestion = await Question.findOne({"_id":id});

        // 없으면 404 리턴
        if(!matchQuestion) {
            return NextResponse.json({ message: '댓글을 찾을 수 없습니다.' }, { status: 404 });
        }
        const answer = {
            author,
            ownerId,
            content,
        }
        // 댓글에 대한 답글 추가
        matchQuestion.answer.push(answer)
        await matchQuestion.save();

        return NextResponse.json({ message: '답글이 작성되었습니다.' }, { status: 201 });
    } catch(error) {
        console.log(error)

        return NextResponse.json({ message: '서버 오류가 발생하였습니다.' })
    }
}

// 답글 수정
export async function PUT(request) {
    try {
        const {content} = await request.json();
        const id = request.nextUrl.searchParams.get("questionId")
        const answer = {content} // 수정 내용
        await connectMongoDB();
        const matchQuestion = await Question.findOne({"_id":id}); // 답글을 수정 할 댓글 찾음

        // 없으면 404 리턴
        if(!matchQuestion) {
            return NextResponse.json({ message: '댓글을 찾을 수 없습니다.' }, { status: 404 });
        }

        // 댓글에 대한 답글 수정
        matchQuestion.answer[0].content = answer.content
        await matchQuestion.save()

        return NextResponse.json({ message: '답글이 수정되었습니다.' }, { status: 200 });
    } catch(error) {
        console.log(error)

        return NextResponse.json({ message: '서버 오류가 발생하였습니다.' })
    }
}

// 답글 삭제
export async function DELETE(request) {
    try {
        const id = request.nextUrl.searchParams.get("questionId")
        
        await connectMongoDB()
        const matchQuestion = await Question.findOne({"_id":id}); // 답글을 삭제 할 댓글 찾음

        // 없으면 404 리턴
        if(!matchQuestion.answer.remove()) {
            return NextResponse.json({ message: '댓글을 찾을 수 없습니다.' }, { status: 404 });
        }

        // 댓글에 대한 답글 삭제
        matchQuestion.answer.pop()
        await matchQuestion.save()

        return NextResponse.json({ message: "답글이 삭제되었습니다." }, { status: 200 })
    } catch(error) {
        console.log(error)

        return NextResponse.json({ message: '서버 오류가 발생하였습니다.'}, {status: 500})
    }
}