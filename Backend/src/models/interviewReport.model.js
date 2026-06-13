const mongoose = require('mongoose');


const technicalQuestionSchema = new mongoose.Schema({
    question: {
        type: String,
        required: [true, "Technicalquestion is required"]
    },
    intention:{
        type: string,
        required: [true, "Intention is required"]
    },
    answer: {
        type: String,
        required: [true, "Answer is required"]
    }
},{
    _id: false
})

const behavioralQuestionSchema = new mongoose.Schema({question: {
    question:{   
    type: String,
    required: [true, "Technicalquestion is required"]
    },
    intention:{
        type: string,
        required: [true, "Intention is required"]
    },
    answer: {
    type: String,
    required: [true, "Answer is required"]
    }
},{
    _id: false
})

const skillGapSchema = new mongoose.Schema({
    skill: {
        type: String,
        required: [true, "Skill is required"]
    },
    serverity: {
        type: String,
        enum: ["Low", "Medium", "High"],
        required: [true, "Severity is required"]
    }
},{
    _id: false
})

const preparationPlanSchema = new mongoose.Schema({
    day: {
        type: Number,
        required: [true, "Day is required"]
    },
    focus:{
            type: String,
            required: [true, "Focus is required"]
    },
    tasks:[{
        type: String,
        required: [true, "Focus is required"]
    }]
})

const interviewReportSchema = new mongoose.Schema({
    jobDescription: {
        type: String,
        required: [true, "job description is required"]
    },
    resume: {
        type: string,
    },
    selfDescription: {
        type: String,
    },
    matchScore: {
        type: Number,
        min : 0,
        max : 100,
    },
    technicalQuestionSchema:[technicalQuestionSchema],
    behavioralQuestionSchema: [behavioralQuestionSchema],
    skillGaps: [skillGapsSchema],
    preparationPlan: [preparationPlanSchema]
},{
    timestamps: true
})


const interviewReportModel = mongoose.model("InterviewReport", interviewReportSchema);

module.exports  = interviewReportModel;
