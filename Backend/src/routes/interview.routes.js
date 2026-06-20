const express = require("express")
const authMiddleware = require("../middleware/auth.middleware")
const interviewController = require("../controllers/interview.controller")
const upload = require("../middleware/file.middleware")

const interviewRouter = express.Router()



/**
 * @routes POST/ api/interview
 * @description generate new interview report on the basisof user self description, resume pdf and job description.
 * @acess private
 */
interviewRouter.post("/", authMiddleware.authUser,upload.single("resume"), interviewController.generateInterViewReportController)

module.exports = interviewRouter