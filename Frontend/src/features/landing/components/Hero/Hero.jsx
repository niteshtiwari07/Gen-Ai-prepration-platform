import "./Hero.scss";
import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="hero">

      <div className="hero-left">

        <span className="hero-badge">
          🚀 AI-Powered Interview Preparation
        </span>

        <h1>
          Practice Smarter.
          <br />
          <span>Interview Better.</span>
        </h1>

        <p>
          Prepare for technical interviews with AI-generated questions
          tailored to your resume and target job role.
        </p>

        <div className="hero-points">

          <div>
            <FaCheckCircle />
            AI Powered
          </div>

          <div>
            <FaCheckCircle />
            Resume Based
          </div>

          <div>
            <FaCheckCircle />
            Secure Authentication
          </div>

        </div>

        <div className="hero-buttons">

          <Link to="/register" className="primary-btn">
            Get Started
          </Link>

          <Link to="/login" className="secondary-btn">
            Login
          </Link>

        </div>

      </div>

      <div className="hero-right">

        <div className="dashboard-card">

          <div className="dashboard-header">
            Mock Interview Session
          </div>

          <div className="question-box">

            <small>Question 2 of 10</small>

            <h3>
              Explain the difference between
              REST API and GraphQL.
            </h3>

          </div>

          <textarea
            placeholder="Type your answer..."
            disabled
          />

          <div className="dashboard-footer">

            <span>Role : Frontend Developer</span>

            <button disabled>
              Submit
            </button>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;