# AI Interview Preparation Platform

An AI-powered MERN stack web application that helps users prepare for technical interviews by generating personalized interview questions based on their resume and selected job role.

---

## Features

- User Authentication (JWT + Cookies)
- Resume Upload (PDF)
- AI-Powered Interview Question Generation
- Personalized Interview Sessions
- Secure User Dashboard
- Protected Routes
- Responsive UI
- MongoDB Database Integration

---

## Tech Stack

### Frontend
- React.js
- Vite
- React Router
- Axios
- Tailwind CSS

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Multer
- Google Gemini API

---

## Project Structure

```
Gen-AI
│
├── frontend
│   ├── src
│   ├── public
│   └── package.json
│
├── backend
│   ├── src
│   │   ├── config
│   │   ├── controllers
│   │   ├── middlewares
│   │   ├── models
│   │   ├── routes
│   │   ├── services
│   │   └── utils
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

## Installation

### 1. Clone the repository

```bash
git clone <repository-url>
cd Gen-AI
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

## Environment Variables

Create a `.env` file inside the `backend` folder.

```env
PORT=3000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
GEMINI_API_KEY=your_gemini_api_key
```

---

## Run the Backend

```bash
cd backend
npm run dev
```

---

## Run the Frontend

```bash
cd frontend
npm run dev
```

---

## Future Enhancements

- AI Answer Evaluation
- Mock Interview with Voice
- Interview Performance Analytics
- Company-Specific Question Sets
- Interview History
- Progress Tracking
- Export Interview Reports

---

## Developer

**Nitesh Tiwari**

- Full Stack MERN Developer
- Backend Enthusiast
- Problem Solver

GitHub: https://github.com/niteshtiwari07
LinkedIn: www.linkedin.com/in/nitesh-tiwari7