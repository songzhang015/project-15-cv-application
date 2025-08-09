// SectionTabs.jsx

import { useState } from 'react'
import '../../styles/Inputs.css'

function SectionTabs() {
    // const [count, setCount] = useState(0)

    return (
        <div className="section-tabs">
            <button className="section-tab">General</button>
            <button className="section-tab">Experience</button>
            <button className="section-tab">Education</button>
            <button className="section-tab">Skills</button>
        </div>
    )
}

export default SectionTabs
