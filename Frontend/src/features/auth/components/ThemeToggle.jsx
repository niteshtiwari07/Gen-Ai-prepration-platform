import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../../../context/ThemeContext";

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            className="theme-toggle"
            onClick={toggleTheme}
        >
            {theme === "dark" ? <FaSun /> : <FaMoon />}
        </button>
    );
};

export default ThemeToggle;