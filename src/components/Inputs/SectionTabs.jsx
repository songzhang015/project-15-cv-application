// SectionTabs.jsx

import "../../styles/Inputs.css";

function SectionTabs({ activeTab, onTabChange }) {
    // const [count, setCount] = useState(0)

    return (
        <div className="section-tabs">
            <button
                onClick={() => onTabChange("general")}
                className={`section-tab ${activeTab === "general" ? "active" : ""}`}
            >
                General
            </button>

            <button
                onClick={() => onTabChange("experience")}
                className={`section-tab ${activeTab === "experience" ? "active" : ""}`}
            >
                Experience
            </button>

            <button
                onClick={() => onTabChange("education")}
                className={`section-tab ${activeTab === "education" ? "active" : ""}`}
            >
                Education
            </button>

            <button
                onClick={() => onTabChange("skills")}
                className={`section-tab ${activeTab === "skills" ? "active" : ""}`}
            >
                Skills
            </button>
        </div>
    );
}

export default SectionTabs;
