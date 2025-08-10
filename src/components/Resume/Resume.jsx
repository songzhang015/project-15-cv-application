// Resume.jsx

import "../../styles/Resume.css";

function Resume() {
	return (
		<div className="resume">
			<header className="resume-header">
				<h1>Title</h1>
				<div className="line-header">
					<h2>Email</h2>
					<h2>Phone</h2>
					<h2>Address</h2>
				</div>
			</header>

			<div className="resume-summary">
				<p>Summary</p>
			</div>

			<div className="resume-experience">
				<div className="resume-banner">
					<h2>Work Experience</h2>
				</div>
				<div className="line">
					<h2>Title</h2>
					<h2>Start Date - End Date</h2>
				</div>
				<h2>Company</h2>
				<h2>Address</h2>
				<p>Description</p>
			</div>

			<div className="resume-education">
				<div className="resume-banner">
					<h2>Education</h2>
				</div>
				<div className="line">
					<h2>Degree</h2>
					<h2>Start Date - End Date</h2>
				</div>
				<h2>University</h2>
				<h2>Address</h2>
			</div>

			<div className="resume-skills">
				<div className="resume-banner">
					<h2>Skills</h2>
				</div>
				<div>
					<p>Skill 1: Desc</p>
				</div>
			</div>
		</div>
	);
}

export default Resume;
