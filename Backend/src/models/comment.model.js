import mongoose from "mongoose"

const commentSchema = new mongoose.Schema({
    taskId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Task"
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    message: {
        type: String,
        required: true,

    }
}, { timestamps: true })


const Comment = mongoose.model("Comment", commentSchema)


export default Comment