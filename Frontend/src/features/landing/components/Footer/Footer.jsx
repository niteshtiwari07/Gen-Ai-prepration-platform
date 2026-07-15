import "./Footer.scss";
import { FaGithub, FaLinkedin, FaRobot } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-brand">

          <div className="footer-logo">

            <FaRobot />

            <span>MockBuddy AI</span>

          </div>

          <p>
            Practice Smarter. Interview Better.
          </p>

        </div>

        <div className="footer-links">

          <h4>Quick Links</h4>

          <a href="#">Home</a>

          <a href="#features">Features</a>

          <a href="#how-it-works">How It Works</a>

        </div>

        <div className="footer-social">

          <h4>Connect</h4>

          <a href="https://github.com">GitHub</a>

          <a href="https://linkedin.com">LinkedIn</a>

        </div>

      </div>

      <div className="copyright">

        © 2026 MockBuddy AI. All rights reserved.

      </div>

    </footer>
  );
};

export default Footer;