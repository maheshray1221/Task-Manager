import asyncHandler from "../utils/asyncHandler.js"
import apiError from "../utils/apiError.js"
import apiResponse from "../utils/apiResponse.js"
import User from "../models/user.model.js"
import Task from "../models/task.js"
import Project from "../models/project.model.js"
import SubTask from "../models/subtask.model.js"
import Comment from "../models/comment.model.js"

// GeneretAccessAndRefreshToken
const generateAccessAndRefreshToken = async (userId) => {
    const user = await User.findById(userId)
    if (!user) {
        throw new apiError(401, "userId not match")
    }
    const accessToken = user.generateAccessToken()
    const refreshToken = user.generateRefreshToken()
    user.refreshToken = refreshToken

    await user.save({ validateBeforeSave: false })

    return { accessToken, refreshToken }
}

// RegisterUser
const registerUser = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body
    if (
        [username, email, password].some((field) => field?.trim() === "")
    ) {
        throw new apiError(401, "users all details required")
    }

    const user = await User.findOne({ $or: [{ email }, { username }] })

    if (user) {
        throw new apiError(401, "user credintial all ready exist")
    }

    const newUser = await User.create(
        {
            username,
            email,
            password
        }
    )

    const createUser = await User.findById(newUser._id).select("-password")

    if (!createUser) {
        throw new apiError(401, "somthing went wrong while creating User")
    }
    return res
        .status(200)
        .json(new apiResponse(200, createUser, "user created successfully"))
})

//LoginUser
const loginUser = asyncHandler(async (req, res) => {
    const { username, password } = req.body

    if (
        [username, password].some((field) => field.trim() === "")
    ) {
        throw new apiError(401, "all fields are required")
    }
    const loggedIn = await User.findOne({ username })

    if (!loggedIn) {
        throw new apiError(401, "user not registered")
    }

    const isPasswordValid = await loggedIn.isPasswordCorrect(password)

    if (!isPasswordValid) {
        throw new apiError(401, "User Password are wrong")
    }

    // generate refresh and access token
    const { accessToken, refreshToken } = await generateAccessAndRefreshToken(loggedIn._id)

    const loggedInUser = await User.findById(loggedIn._id)
        .select("-password -refreshToken")
    const options = {
        httpOnly: true,
        secure: true
    }

    return res
        .status(200)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", refreshToken, options)
        .json(new apiResponse(200,
            { accessToken, refreshToken, loggedInUser: loggedIn },
            "user successfully logged in."))
})

// check-Auth
const checkAuth = asyncHandler(async (req, res) => {
    return res
        .status(200)
        .json(new apiResponse(
            200,
            { user: req.user },
            "user logged in"
        )
        )
})

//createProject
const createProject = asyncHandler(async (req, res) => {
    const { name, description, members } = req.body

    if ([name, description, members].some((field) => field.trim() === "")) {
        throw new apiError(401, "all fileds are required")
    }

    const newProject = await Project.create(
        {
            name,
            description,
            members,
            createdBy: req.user._id,
        }
    )

    if (!newProject) {
        throw new apiError(401, "Error while creating Project")
    }

    return res
        .status(200)
        .json(new apiResponse(200, newProject, "Successfully add New Project"))
})

//getAllProject
const getAllProject = asyncHandler(async (req, res) => {
    const getProjects = await Project.find()

    if (!getProjects) {
        throw new apiError(401, "Error while get All Project")
    }

    return res
        .status(200)
        .json(new apiResponse(200, getProjects, "Successfully get all project"))
})

//getSingleProject
const getSingleProject = asyncHandler(async (req, res) => {
    const { id } = req.params

    if (!id) {
        throw new apiError(401, "Id required")
    }
    const singleProject = await Project.findById(id)

    if (!singleProject) {
        throw new apiError(401, "Error while get single Project")
    }

    return res
        .status(200)
        .json(new apiResponse(200, singleProject, "Successfully get single Project"))
})

//updateSingleProject
const updateSingleProject = asyncHandler(async (req, res) => {
    const { id } = req.params
    if (!id) {
        throw new apiError(401, "Id required")
    }
    const { name, description, members } = req.body

    if ([name, description, members].some((field) => field.trim() === "")) {
        throw new apiError(401, "all fileds are required")
    }
    const updateProject = await Project.findByIdAndUpdate(id,
        {
            name,
            description,
            members
        }, { new: true, runValidators: true }
    )

    if (!updateProject) {
        throw new apiError(401, "Error while updating Project")
    }

    return res
        .status(200)
        .json(new apiResponse(200, updateProject, "Successfully Update Project"))
})

//deleteSingleProject
const deleteSingleProject = asyncHandler(async (req, res) => {
    const { id } = req.params

    if (!id) {
        throw new apiError(401, "Id required")
    }
    const deleteProject = await Project.findByIdAndDelete(id)

    if (!deleteProject) {
        throw new apiError(401, "Error while deleting Project")
    }

    return res
        .status(200)
        .json(new apiResponse(200, deleteProject, "Successfully delete Project"))
})

// createTask
const createTask = asyncHandler(async (req, res) => {
    const { title, description, status, priority, dueDate, tags } = req.body

    if ([title, description, status, priority, dueDate, tags]
        .some((field) => field.trim() === "")
    ) {
        throw new apiError(401, "all fields are required")
    }

    const newTask = await Task.create(
        {
            title,
            description,
            status,
            priority,
            dueDate,
            tags,
            createdBy: req.user._id,
        }
    )
    if (!newTask) {
        throw new apiError(401, "Error while adding task")
    }

    return res
        .status(200)
        .json(new apiResponse(200, newTask, "Task add successfully"))
})

//getAllTask
const getAllTask = asyncHandler(async (req, res) => {
    const getTask = await Task.find()

    if (!getTask) {
        throw new apiError(401, "Error while get Task")
    }
    return res
        .status(200)
        .json(new apiResponse(200, getTask, "Successfully get Task"))
})

//getSingleTask
const getSingleTask = asyncHandler(async (req, res) => {
    const { id } = req.params

    if (!id) {
        throw new apiError(401, "Id required")
    }

    const singleTask = await Task.findById(id)

    if (!singleTask) {
        throw new apiError(401, "Error while get single Task")
    }
    return res
        .status(200)
        .json(new apiResponse(200, singleTask, "Successfully get Task"))
})

// updateSingleTask
const updateSingleTask = asyncHandler(async (req, res) => {
    const { id } = req.params

    if (!id) {
        throw new apiError(401, "Id required")
    }
    const { title, description, status, priority, dueDate, tags } = req.body

    if ([title, description, status, priority, dueDate, tags]
        .some((field) => field.trim() === "")
    ) {
        throw new apiError(401, "all fields are required")
    }
    const updateTask = await Task.findByIdAndUpdate(id, {
        title,
        description,
        status,
        priority,
        dueDate,
        tags,
    }, { new: true, runValidators: true })

    if (!updateTask) {
        throw new apiError(401, "Error while update Task")
    }

    return res
        .status(200)
        .json(new apiResponse(200, updateTask, "Successfully updated Task"))
})

// deleteTask
const deleteTask = asyncHandler(async (req, res) => {
    const { id } = req.params

    if (!id) {
        throw new apiError(401, "Id required")
    }
    const destroyTask = await Task.findByIdAndDelete(id)

    if (!destroyTask) {
        throw new apiError(401, "Error while deleting task")
    }
    return res
        .status(200)
        .json(new apiResponse(200, destroyTask, "Successfully deleted Task"))
})

//createSubTask
const createSubTask = asyncHandler(async (req, res) => {
    const { title, description, status, taskId } = req.body

    if ([title, description, status, taskId].some((field) => field.trim() === "")) {
        throw new apiError(401, "all fileds are required")
    }

    const newSubTask = await SubTask.create(
        {
            taskId,
            title,
            description,
            status,
            createdBy: req.user._id
        }
    )

    if (!newSubTask) {
        throw new apiError(401, "Error while creating new SubTask")
    }
    return res
        .status(200)
        .json(new apiResponse(200, newSubTask, "Successfully created subTask"))
})

//getAllSubTask
const getAllSubTask = asyncHandler(async (req, res) => {
    const getSubTask = await SubTask.find()

    if (!getSubTask) {
        throw new apiError(401, "Error while get SubTask")
    }
    return res
        .status(200)
        .json(new apiResponse(200, getSubTask, "Successfully get All Subtask"))
})

//getSingleTask
const getSingleSubTask = asyncHandler(async (req, res) => {
    const { id } = req.params
    if (!id) {
        throw new apiError(401, "Id required")
    }

    const singleSubTask = await SubTask.findById(id)

    if (!singleSubTask) {
        throw new apiError(401, "Error while Get Single SubTask")
    }

    return res
        .status(200)
        .json(new apiResponse(200, singleSubTask, "Successfully get subtask"))
})

//updateSubTask
const updateSubTask = asyncHandler(async (req, res) => {
    const { id } = req.params

    if (!id) {
        throw new apiError(401, "Id required")
    }

    const { title, description, status } = req.body

    if ([title, description, status].some((field) => field.trim() === "")) {
        throw new apiError(401, "all fileds are required")
    }

    const EditSubtask = await SubTask.findByIdAndUpdate(id, {
        title,
        description,
        status,
    }, { new: true, runValidators: true })

    if (!EditSubtask) {
        throw new apiError(401, "Error while Editing subtask")
    }

    return res
        .status(200)
        .json(new apiResponse(200, EditSubtask, "Successfully updated subtask"))
})

//deleteSubTask
const deleteSubTask = asyncHandler(async (req, res) => {
    const { id } = req.params

    if (!id) {
        throw new apiError(401, "Id required")
    }

    const destroySubTask = await SubTask.findByIdAndDelete(id)

    if (!destroySubTask) {
        throw new apiError(401, "Error while deleting subTask")
    }

    return res
        .status(200)
        .json(new apiResponse(200, destroySubTask, "Successfully deleted subTask"))
})

//createComment
const createComment = asyncHandler(async (req, res) => {
    const { taskId, message } = req.body

    if (!taskId || !message) {
        throw new apiError(401, "all field are required")
    }

    const newComment = await Comment.create({
        taskId,
        message,
        createdBy: req.user._id
    })

    if (!newComment) {
        throw new apiError(401, "Error while add new Comment")
    }

    return res
        .status(200)
        .json(new apiResponse(200, newComment, "Successfully create new Comment"))
})

//getAllComment
const getAllComment = asyncHandler(async (req, res) => {
    const GetComments = await Comment.find()

    if (!GetComments) {
        throw new apiError(401, "Error while Get Comments")
    }
    return res
        .status(200)
        .json(new apiResponse(200, GetComments, "Successfully Get Comments"))
})

//updateSingleComment
const updateSingleComment = asyncHandler(async (req, res) => {
    const { id } = req.params

    if (!id) {
        throw new apiError(401, "Id required")
    }

    const { message } = req.body

    if (!message) {
        throw new apiError(401, "message field required")
    }

    const updateMessage = await Comment.findByIdAndUpdate(id, {
        message
    }, { new: true, runValidators: true })

    if (!updateMessage) {
        throw new apiError(401, "Error while update Message")
    }

    return res
        .status(200)
        .json(new apiResponse(200, updateMessage, "Successfully updated Comment"))

})

//deleteComment
const deleteComment = asyncHandler(async (req, res) => {
    const { id } = req.params
    if (!id) {
        throw new apiError(401, "Id required")
    }

    const destroyComment = await Comment.findByIdAndDelete(id)

    if (!destroyComment) {
        throw new apiError(401, "Error while deleting Comment")
    }

    return res
        .status(200)
        .json(new apiResponse(200, destroyComment, "Successfully deleted Comment"))
})
export {
    registerUser,
    loginUser,
    checkAuth,
    createProject,
    getAllProject,
    getSingleProject,
    updateSingleProject,
    deleteSingleProject,
    createTask,
    getAllTask,
    getAllTask,
    getSingleTask,
    updateSingleTask,
    deleteTask,
    createSubTask,
    getAllSubTask,
    getSingleSubTask,
    updateSubTask,
    deleteSubTask,
    createComment,
    getAllComment,
    updateSingleComment,
    deleteComment
}


