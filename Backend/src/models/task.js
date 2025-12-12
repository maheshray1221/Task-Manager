import mongoose from "mongoose"

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
        required: true,

    },
    status: {
        type: String,
        enum: ["PENDING", "IN_PROGRESS", "ON_HOLD", "CANCELLED"],
        required: true,

    },
    priority: {
        type: String,
        enum: ["LOW", "MEDIUM", "HIGH", "URGENT"],
        default: "MEDIUM",
        required: true,

    },
    projectId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"Project"

    },
    dueDate: {
        type: Date,
        required: true,

    },
    tags: {
        type: [String],
        required: true,
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },

}, { timestamps: true })


const Task = mongoose.model("Task", taskSchema)

export default Task