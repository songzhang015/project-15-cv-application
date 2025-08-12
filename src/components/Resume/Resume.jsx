// Resume.jsx

import "../../styles/Resume.css";

function Resume({ generalData, experiences, educations, skills }) {
	return (
		<div className="resume">
			<header className="resume-header">
				<h1>{generalData.fullName}</h1>
				<div className="line-header">
					<h4>
						<i className="fa-solid fa-envelope"></i> {generalData.email}
					</h4>
					<h4>
						<i className="fa-solid fa-phone"></i> {generalData.phoneNumber}
					</h4>
					<h4>
						<i className="fa-solid fa-location-dot"></i> {generalData.address}
					</h4>
				</div>
			</header>

			<div className="resume-summary">
				<p>{generalData.summary}</p>
			</div>

			<div className="resume-experience">
				<div className="resume-banner">
					<h2>Work Experience</h2>
				</div>
				{experiences.map((experience, index) => (
					<div className="resume-collection" key={index}>
						<div className="line">
							<h3>{experience.jobRole}</h3>
							<h4>
								{experience.startDate} - {experience.endDate}
							</h4>
						</div>
						<h4>{experience.companyTitle}</h4>
						<h4>{experience.companyLocation}</h4>
						<p>{experience.description}</p>
					</div>
				))}
			</div>

			<div className="resume-education">
				<div className="resume-banner">
					<h2>Education</h2>
				</div>
				{educations.map((education, index) => (
					<div className="resume-collection" key={index}>
						<div className="line">
							<h3>{education.degree}</h3>
							<h4>
								{education.startDate} - {education.endDate}
							</h4>
						</div>
						<h4>{education.university}</h4>
						<h4>{education.location}</h4>
					</div>
				))}
			</div>

			<div className="resume-skills">
				<div className="resume-banner">
					<h2>Skills</h2>
				</div>
				{skills.map((skill, index) => (
					<li key={index}>{skill.skill}</li>
				))}
			</div>
		</div>
	);
}

export default Resume;
