import "./HowItWorks.scss";
import {
  FaUserPlus,
  FaFileUpload,
  FaBriefcase,
  FaRobot,
  FaPlayCircle,
} from "react-icons/fa";

const steps = [
  {
    icon: <FaUserPlus />,
    title: "Create Account",
    description: "Sign up and securely log in to MockMate AI.",
  },
  {
    icon: <FaFileUpload />,
    title: "Upload Resume",
    description: "Upload your resume in PDF format.",
  },
  {
    icon: <FaBriefcase />,
    title: "Choose Job Role",
    description: "Select the role you're preparing for.",
  },
  {
    icon: <FaRobot />,
    title: "Generate Questions",
    description: "AI creates interview questions tailored to your profile.",
  },
  {
    icon: <FaPlayCircle />,
    title: "Start Practicing",
    description: "Answer questions and improve your interview skills.",
  },
];

const HowItWorks = () => {
  return (
    <section className="how-it-works" id="how-it-works">
      <div className="section-title">
        <h2>How MockMate AI Works</h2>
        <p>
          Get interview-ready in just a few simple steps.
        </p>
      </div>

      <div className="steps-container">
        {steps.map((step, index) => (
          <div className="step-card" key={index}>
            <div className="step-number">
              {index + 1}
            </div>

            <div className="step-icon">
              {step.icon}
            </div>

            <h3>{step.title}</h3>

            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;