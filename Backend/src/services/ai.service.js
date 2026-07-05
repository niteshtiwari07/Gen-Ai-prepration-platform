const { GoogleGenAI } = require("@google/genai");
const { z } = require("zod");
const { zodToJsonSchema } = require("zod-to-json-schema");
const puppeteer = require("puppeteer");

const ai = new GoogleGenAI({
    apiKey: process.env.GOOGLE_GENAI_API_KEY
});

const interviewReportSchema = z.object({
    title: z.string(),
    matchScore: z.number(),
    technicalQuestions: z.array(
        z.object({
            question: z.string(),
            intention: z.string(),
            answer: z.string()
        })
    ),
    behavioralQuestions: z.array(
        z.object({
            question: z.string(),
            intention: z.string(),
            answer: z.string()
        })
    ),
    skillGaps: z.array(
        z.object({
            skill: z.string(),
            severity: z.enum(["low", "medium", "high"])
        })
    ),
    preparationPlan: z.array(
        z.object({
            day: z.number(),
            focus: z.string(),
            tasks: z.array(z.string())
        })
    )
});

async function generateInterviewReport({
    resume,
    selfDescription,
    jobDescription
}) {
    const prompt = `
You are an expert technical interviewer.

Analyze the candidate based on:

Resume:
${resume}

Self Description:
${selfDescription}

Job Description:
${jobDescription}

Return ONLY a valid JSON object.

Required fields:
{
  "title": "Software Development Engineer",
  "matchScore": 85,
  "technicalQuestions": [
    {
      "question": "...",
      "intention": "...",
      "answer": "..."
    }
  ],
  "behavioralQuestions": [
    {
      "question": "...",
      "intention": "...",
      "answer": "..."
    }
  ],
  "skillGaps": [
    {
      "skill": "...",
      "severity": "low"
    }
  ],
  "preparationPlan": [
    {
      "day": 1,
      "focus": "...",
      "tasks": ["...", "..."]
    }
  ]
}

Rules:
- Return only JSON.
- No markdown.
- No explanations.
- No extra fields.
- Generate exactly 5 technical questions.
- Generate exactly 5 behavioral questions.
- Generate a realistic match score from 0-100.
- Generate at least 3 skill gaps if applicable.
- Generate a complete 7-day preparation plan.
`;

    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
        config: {
            responseMimeType: "application/json",
        }
    });

    console.log("RAW AI RESPONSE:");
    console.log(response.text);

    return JSON.parse(response.text);
}

async function generatePdfFromHtml(htmlContent) {
    const browser = await puppeteer.launch();

    const page = await browser.newPage();

    await page.setContent(htmlContent, {
        waitUntil: "networkidle0"
    });

    const pdfBuffer = await page.pdf({
        format: "A4",
        margin: {
            top: "20mm",
            bottom: "20mm",
            left: "15mm",
            right: "15mm"
        }
    });

    await browser.close();

    return pdfBuffer;
}

async function generateResumePdf({
    resume,
    selfDescription,
    jobDescription
}) {
    const resumePdfSchema = z.object({
        html: z.string()
    });

    const prompt = `
Create a professional single-page HTML resume.

Candidate Resume:
${resume}

Self Description:
${selfDescription}

Target Job:
${jobDescription}

Return ONLY JSON:

{
  "html": "<html>...</html>"
}
`;

    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
        config: {
            responseMimeType: "application/json",
            responseSchema: zodToJsonSchema(resumePdfSchema)
        }
    });

    const jsonContent = JSON.parse(response.text);

    const pdfBuffer = await generatePdfFromHtml(jsonContent.html);

    return pdfBuffer;
}

module.exports = {
    generateInterviewReport,
    generateResumePdf
};