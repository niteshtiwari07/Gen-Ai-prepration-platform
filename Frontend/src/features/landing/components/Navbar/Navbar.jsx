import { Link } from "react-router-dom";
import { FaRobot } from "react-icons/fa";
import "./Navbar.scss";

const Navbar = () => {
    return (
        <header className="navbar">
            <div className="container">
                <Link to="/" className="logo">
                    <FaRobot />
                    <span>MockMate AI</span>
                </Link>

                <nav>
                    <a href="#features">Features</a>
                    <a href="#how-it-works">How It Works</a>
                    <a href="#faq">FAQ</a>
                </nav>

                <div className="buttons">
                    <Link to="/login" className="login-btn">
                        Login
                    </Link>

                    <Link to="/register" className="primary-btn">
                        Get Started
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Navbar;