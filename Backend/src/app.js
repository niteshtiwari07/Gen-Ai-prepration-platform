const express = require("express")
const cookieParser = require("cookie-parser")
const cors = require("cors")
const path = require("path")

const app = express()

app.use(express.json())
app.use(cookieParser())

app.use(cors({
    origin: true,
    credentials: true
}))

const authRouter = require("./routes/auth.routes")
const interviewRouter = require("./routes/interview.routes")

app.use("/api/auth", authRouter)
app.use("/api/interview", interviewRouter)

const frontendPath = path.join(__dirname, "../../frontend/dist")

app.use(express.static(frontendPath))

app.get("/{*any}", (req, res) => {
    res.sendFile(path.join(frontendPath, "index.html"))
})

module.exports = app