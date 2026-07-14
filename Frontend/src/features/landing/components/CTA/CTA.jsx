import "./CTA.scss";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="cta-section">

      <div className="cta-box">

        <h2>Ready to Crack Your Next Interview?</h2>

        <p>
          Join MockMate AI today and practice with AI-generated
          interview questions tailored to your resume.
        </p>

        <Link to="/register" className="cta-btn">
          Get Started Free
        </Link>

      </div>

    </section>
  );
};

export default CTA;