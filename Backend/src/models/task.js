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
        enum: ["In-Progress", "Done"],
        required: true,

    },
    priority: {
        type: String,
        enum: ["low", "medium", "high", "urgent"],
        default: "medium",
        required: true,

    },
    projectId: {
        type: Date,
        required: true,
        
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