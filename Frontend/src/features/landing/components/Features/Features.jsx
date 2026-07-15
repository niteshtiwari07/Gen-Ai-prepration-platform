import "./Features.scss";
import {
  FaRobot,
  FaFileUpload,
  FaUserShield,
  FaBriefcase,
} from "react-icons/fa";

const features = [
  {
    icon: <FaRobot />,
    title: "AI Question Generation",
    description:
      "Generate interview questions tailored to your resume and selected role.",
  },
  {
    icon: <FaFileUpload />,
    title: "Resume Upload",
    description:
      "Upload your resume securely and prepare with personalized questions.",
  },
  {
    icon: <FaBriefcase />,
    title: "Role-Based Practice",
    description:
      "Practice interviews based on your preferred job role and technology.",
  },
  {
    icon: <FaUserShield />,
    title: "Secure Authentication",
    description:
      "Your account is protected using secure JWT authentication.",
  },
];

const Features = () => {
  return (
    <section className="features-section" id="features">
      <div className="section-title">
        <h2>Everything You Need to Prepare</h2>
        <p>
          MockBuddy AI provides all the essential tools to help you prepare for
          technical interviews with confidence.
        </p>
      </div>

      <div className="features-grid">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-icon">{feature.icon}</div>

            <h3>{feature.title}</h3>

            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;