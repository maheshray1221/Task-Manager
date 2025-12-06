import express from "express"
export const app = express()
import cors from 'cors'
import cookieParser from 'cookie-parser'


app.use(cors(
    {
        origin:"http://localhost:5173",
        credentials:true,
        
    }
))

app.use(express.json({ limit: "16kb" }))
app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())