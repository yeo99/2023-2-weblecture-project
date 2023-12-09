import mongoose, {Schema} from "mongoose";

const questionSchema = new Schema(
    {
        /**
         * author: 작성자 이름
         * ownerId: 작성자 _id(objectId)
         * content: 내용
         * likeCount: 좋아요 갯수
         */
        author: { type: String, required: true },
        // ownerId: { type: mongoose.Types.ObjectId, required: true },
        ownerId: { type: String, required: true }, // 임시 사용
        content: { type: String, required: true },
        likeCount: { type: Number, required: true, default: 0 },
        createdAt: { type: Date, default: Date.now, required: true },
        updatedAt: { type: Date, default: Date.now, required: true },

        /**
         * 댓글에 대한 답글
         * 객체로 하려했으나 타임스탬프를 임의로 찍어준다던가, 추후 확장성에 문제가 생길 듯 해서 배열로 저장
         */
        answer: [
            {
                author: { type: String },
                // ownerId: { type: mongoose.Types.ObjectId },
                ownerId: { type: String, required: true }, // 임시 사용
                content: { type: String },
                likeCount: { type: Number, required: true, default: 0 },
                createdAt: { type: Date, default: Date.now },
                updatedAt: { type: Date, default: Date.now },
            }
        ]
    },
)

const Question = mongoose.models.Question || mongoose.model("Question", questionSchema)

export default Question
