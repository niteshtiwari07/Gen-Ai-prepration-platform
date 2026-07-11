# 🤖 AI Interview Preparation Platform

An AI-powered interview preparation platform built with the MERN stack that generates personalized interview strategies and questions based on a candidate's resume, self-description, and target job description.

The application leverages Google's Gemini AI to analyze user profiles and create customized interview preparation plans for different job roles.

---

## ✨ Features

### Authentication
- Secure JWT Authentication
- HTTP-Only Cookie Based Sessions
- User Registration & Login
- Protected Routes

### AI Features
- AI-powered Interview Plan Generation
- Resume Analysis using Gemini AI
- Personalized Questions based on Job Description
- Self Description Support
- Match Score Generation

### Resume Support
- PDF Resume Upload
- Resume Parsing
- Manual Profile Description (Optional)

### Dashboard
- Recent Interview Plans
- Interview History
- Personalized Reports
- Easy Navigation

### UI/UX
- Responsive Design
- Dark & Light Theme
- Modern Glassmorphism Interface
- Interactive Cards
- Clean User Experience

---

# 🛠 Tech Stack

## Frontend

- React.js
- Vite
- React Router
- Axios
- SCSS
- React Icons

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Multer
- Google Gemini API

---

# 📁 Project Structure

```text
Gen-AI/
│
├── frontend/
│   ├── public/
│   ├── src/
│   │
│   ├── assets/
│   ├── components/
│   ├── context/
│   ├── features/
│   │   ├── auth/
│   │   └── interview/
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── style.scss
│
├── backend/
│   ├── src/
│   │
│   ├── config/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── utils/
│   │
│   ├── app.js
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

# 🚀 Getting Started

## 1. Clone Repository

```bash
git clone https://github.com/yourusername/Gen-AI.git
```

```bash
cd Gen-AI
```

---

## 2. Install Frontend

```bash
cd frontend
npm install
```

---

## 3. Install Backend

```bash
cd ../backend
npm install
```

---

# ⚙ Environment Variables

Create a `.env` file inside the **backend** folder.

```env
PORT=3000

MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key

GEMINI_API_KEY=your_google_gemini_api_key
```

---

# ▶ Running the Project

## Start Backend

```bash
cd backend
npm run dev
```

---

## Start Frontend

```bash
cd frontend
npm run dev
```

---

# 🌟 Future Improvements

- AI Answer Evaluation
- Live Mock Interviews
- Voice-based Interview Assistant
- Company Specific Interview Sets
- Coding Interview Support
- Interview Performance Analytics
- Progress Tracking Dashboard
- Export Interview Reports as PDF
- AI Feedback on Answers
- Leaderboard & Gamification

---

# 📸 Screenshots

Screenshots will be added soon.

---

# 🤝 Contributing

Contributions are welcome.

1. Fork the repository

2. Create a feature branch

```bash
git checkout -b feature-name
```

3. Commit your changes

```bash
git commit -m "Added new feature"
```

4. Push to your branch

```bash
git push origin feature-name
```

5. Open a Pull Request

---

# 👨‍💻 Developer

## Nitesh Tiwari

**Full Stack MERN Developer**

- Backend Development
- REST API Development
- MongoDB
- Express.js
- React.js
- Node.js
- AI Integration

### Connect with me

**GitHub**

https://github.com/niteshtiwari07

**LinkedIn**

https://www.linkedin.com/in/nitesh-tiwari7

---

# ⭐ Support

If you found this project useful, consider giving it a **Star ⭐** on GitHub.

It helps others discover the project and motivates further development.