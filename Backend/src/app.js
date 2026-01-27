import express from "express"
export const app = express()
import cors from 'cors'
import cookieParser from 'cookie-parser'


app.use(cors(
    {
        origin:"https://task-manager-frontend-th9q.onrender.com",
        credentials: true,

    }
))

app.use(express.json({ limit: "16kb" }))
app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

import userRouter from "./routes/task.route.js"

app.use("/api/v1/user", userRouter)