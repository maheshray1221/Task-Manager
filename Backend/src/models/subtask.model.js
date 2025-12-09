import mongoose from "mongoose"
const subtaskSchema = new mongoose.Schema(
    {
        taskId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Task"
        },
        status: {
            type: String,
            required: true,
            unique: true,
        },
        title: {
            type: [String],
            required: true,
        }
    }, { timestamps: true }
)

const SubTask = mongoose.model("SubTask", subtaskSchema)

export default SubTask