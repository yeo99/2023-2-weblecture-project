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
        ownerId: { type: mongoose.Types.ObjectId, required: true },
        content: { type: String, required: true },
        likeCount: { type: Number, required: true, default: 0 },
        createdAt: { type: Date, default: Date.now, required: true },
        updatedAt: { type: Date, default: Date.now, required: true },

        // 댓글에 대한 답글
        answer: [
            {
                author: { type: String },
                ownerId: { type: mongoose.Types.ObjectId },
                content: { type: String },
                likeCount: { type: Number },
                createdAt: { type: Date, default: Date.now },
                updatedAt: { type: Date, default: Date.now },
            }
        ]
    },
)

module.exports = mongoose.model("Question", questionSchema)