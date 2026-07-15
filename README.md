# 🤖 MockBuddy AI – AI Interview Preparation Platform

🌐 Live Demo: https://mockbuddy-ai.vercel.app

📂 GitHub Repository: https://github.com/niteshtiwari07/Gen-Ai-prepration-platform

---

## 📌 Overview

MockBuddy AI is an AI-powered interview preparation platform that helps candidates prepare for technical interviews by generating personalized interview plans, interview questions, and preparation strategies based on their resume, skills, self-description, and target job description.

The platform leverages Google's Gemini AI to analyze candidate profiles and generate tailored interview guidance for different job roles, helping users identify skill gaps and improve their interview readiness.

---

## ✨ Features

### 🔐 Authentication
- Secure JWT Authentication
- HTTP-Only Cookie Based Sessions
- User Registration & Login
- Protected Routes

### 🤖 AI Features
- AI-powered Interview Plan Generation
- Resume Analysis using Gemini AI
- Personalized Technical Questions
- Job Description Analysis
- Match Score Generation
- Skill Gap Identification
- Preparation Roadmap Creation

### 📄 Resume Support
- PDF Resume Upload
- Resume Parsing
- Manual Profile Description Support
- Candidate Profile Analysis

### 📊 Dashboard
- Recent Interview Plans
- Interview History
- Personalized Reports
- Easy Navigation

### 🎨 UI/UX
- Responsive Design
- Dark & Light Theme
- Modern Glassmorphism Interface
- Interactive Cards
- Clean User Experience

---

## 🎯 Key Features

- Resume-Based Interview Preparation
- AI Generated Technical Questions
- Personalized Preparation Plans
- Job Description Matching
- Skill Gap Analysis
- Match Score Calculation
- Secure Authentication System
- Interview History Tracking
- Mobile Responsive Design

---

## 🛠 Tech Stack

### Frontend
- React.js
- Vite
- React Router DOM
- Axios
- SCSS
- Context API
- React Icons

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Multer

### AI Integration
- Google Gemini API

### Deployment
- Vercel (Frontend)
- Render (Backend)

---

## 🏗 System Architecture

```text
User
  │
  ▼
React Frontend
  │
  ▼
Express.js API
  │
  ├── MongoDB Database
  │
  └── Gemini AI
          │
          ▼
Interview Report Generation
```

---

## 📁 Project Structure

```text
Gen-AI/
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── context/
│   │   ├── features/
│   │   │   ├── auth/
│   │   │   └── interview/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── style.scss
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middlewares/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── services/
│   │   └── utils/
│   │
│   ├── app.js
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

## 🚀 Getting Started

### 1. Clone Repository

```bash
git clone https://github.com/niteshtiwari07/Gen-Ai-prepration-platform.git

cd Gen-Ai-prepration-platform
```

### 2. Install Frontend Dependencies

```bash
cd frontend
npm install
```

### 3. Install Backend Dependencies

```bash
cd ../backend
npm install
```

---

## ⚙ Environment Variables

Create a `.env` file inside the backend directory.

```env
PORT=3000

MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key

GEMINI_API_KEY=your_google_gemini_api_key
```

---

## ▶ Running the Project

### Start Backend

```bash
cd backend
npm run dev
```

### Start Frontend

```bash
cd frontend
npm run dev
```

---

## 🚀 Deployment

### Frontend
Vercel

### Backend
Render

### Live Application
https://mockbuddy-ai.vercel.app

---

## 📈 Highlights

- AI-powered Interview Generation using Google Gemini
- Resume-Based Interview Preparation
- Secure JWT Authentication with HTTP-Only Cookies
- PDF Resume Upload & Analysis
- Personalized Technical Questions
- Skill Gap Identification
- Match Score Calculation
- Full Stack MERN Architecture
- Responsive Design for Desktop & Mobile
- Deployed on Vercel and Render

---

## 🌟 Future Improvements

- AI Answer Evaluation
- Live Mock Interviews
- Voice-Based Interview Assistant
- Company-Specific Interview Sets
- Coding Interview Support
- Interview Performance Analytics
- Progress Tracking Dashboard
- Export Interview Reports as PDF
- AI Feedback on Answers
- Leaderboard & Gamification

---

## 🤝 Contributing

Contributions are welcome.

1. Fork the Repository
2. Create a Feature Branch

```bash
git checkout -b feature-name
```

3. Commit Changes

```bash
git commit -m "Added new feature"
```

4. Push Changes

```bash
git push origin feature-name
```

5. Open a Pull Request

---

## 👨‍💻 Developer

### Nitesh Tiwari

Full Stack MERN Developer

🔗 GitHub  
https://github.com/niteshtiwari07

🔗 LinkedIn  
https://www.linkedin.com/in/nitesh-tiwari7

---

## ⭐ Support

If you found this project useful, consider giving it a Star ⭐ on GitHub.

