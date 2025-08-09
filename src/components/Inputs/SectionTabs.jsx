// SectionTabs.jsx

import "../../styles/Inputs.css";

function SectionTabs({ activeTab, onTabChange }) {
    // const [count, setCount] = useState(0)

    return (
        <div className="section-tabs">
            <button
                onClick={() => onTabChange("general")}
                className="section-tab"
            >
                General
            </button>

            <button
                onClick={() => onTabChange("experience")}
                className="section-tab"
            >
                Experience
            </button>
            <button
                onClick={() => onTabChange("education")}
                className="section-tab"
            >
                Education
            </button>
            <button
                onClick={() => onTabChange("skills")}
                className="section-tab"
            >
                Skills
            </button>
        </div>
    );
}

export default SectionTabs;
