import connectMongoDB from "@/libs/mongodb";
import Question from "@/models/question";
import { NextResponse } from "next/server";

// 답글 추가
export async function POST(request, {params}) {
    try {
        const {author, ownerId, content} = await request.json();
        await connectMongoDB();
        // 답글(answer)를 달 댓글(question)을 찾음
        // const id = request.nextUrl.searchParams.get("id")
        const matchQuestionId = params;
        const matchQuestion = await Question.findById(matchQuestionId, {id});
        console.log(matchQuestion)
        if(!matchQuestion) {
            return NextResponse.json({ message: '댓글을 찾을 수 없습니다.' }, { status: 404 });
        }
        const answer = {
            author,
            ownerId,
            content,
        }
        // 댓글에 대한 답글 추가
        matchQuestion.answer.push(answer);
        await comment.save();

        return NextResponse.json({ message: '답글이 작성되었습니다.' }, { status: 201 });
    } catch(error) {
        console.log(error)

        return NextResponse.json({ message: '서버 오류가 발생하였습니다.' })
    }
}