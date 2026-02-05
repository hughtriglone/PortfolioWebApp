import { motion } from 'framer-motion'

export default function CV() {
	// Advanced Skills
	const advancedSkills = ["Python", "Object Oriented Programming", "Git", "GitHub"]

	// Foundational Skills
	const foundationalSkills = [
		// Languages
		"Java", "C++", "C#", "Luau", "JavaScript", "HTML", "CSS",
		// Frameworks & DB
		"React", "Node.js", "Tailwind CSS", "PostgreSQL",
		// Tools
		"Linux", "Vite", "npm",
		// Concepts
		"Data Structures and Algorithms", "Time and Space Complexity",
		"Software Design Patterns", "Database Design", "Agile Methodologies",
		"Data Analysis", "Basic Cryptography", "UI/UX Design", "Debugging & Testing"
	]

	const container = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: { staggerChildren: 0.1 }
		}
	}

	const item = {
		hidden: { opacity: 0, y: 20 },
		show: { opacity: 1, y: 0 }
	}

	return (
		<motion.div
			variants={container}
			initial="hidden"
			animate="show"
			className="max-w-4xl mx-auto py-12 px-4"
		>
			{/* Page Header */}
			<motion.div variants={item} className="mb-16">
				<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-4">
					<div>
						<p className="text-secondary tracking-[0.15em] uppercase text-sm font-bold mb-2">Curriculum Vitae</p>
						<h1 className="text-4xl md:text-5xl font-extrabold text-primary tracking-tight">Hugh Triglone</h1>
					</div>
					<a
						href="/Hugh_Triglone_CV.pdf"
						download
						className="btn btn-outline btn-primary rounded-xl font-bold px-6 gap-2 hover:scale-105 transition-transform"
					>
						<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
						</svg>
						Download PDF
					</a>
				</div>
				<p className="text-lg text-base-content/60">A summary of my education, experience, and skills.</p>
			</motion.div>

			{/* Education Section */}
			<motion.section variants={item} className="mb-16">
				<div className="flex items-center gap-4 mb-6">
					<h2 className="text-2xl font-bold text-secondary">Education</h2>
					<div className="h-px bg-gradient-to-r from-secondary/50 to-transparent flex-grow" />
				</div>
				<div className="card bg-base-200 shadow-lg border border-primary/10 p-6">
					<h3 className="text-xl font-bold text-primary mb-2">Bachelor of Advanced Computing</h3>
					<p className="text-base-content/70 mb-1">The University of Sydney</p>
					<p className="text-base-content/50 text-sm mb-4">Expected Graduation: 2027</p>
					<div className="flex flex-wrap gap-2">
						<span className="badge badge-outline badge-sm">Cybersecurity</span>
						<span className="badge badge-outline badge-sm">Computational Data Science</span>
					</div>
				</div>
			</motion.section>

			{/* Experience Section */}
			{/* <motion.section variants={item} className="mb-16">
				<div className="flex items-center gap-4 mb-6">
					<h2 className="text-2xl font-bold text-secondary">Experience</h2>
					<div className="h-px bg-gradient-to-r from-secondary/50 to-transparent flex-grow" />
				</div>
				<div className="card bg-base-200 shadow-lg border border-primary/10 p-6">
					<h3 className="text-xl font-bold text-primary mb-2">Your Role Title</h3>
					<p className="text-base-content/70 mb-1">Company Name</p>
					<p className="text-base-content/50 text-sm mb-4">Start Date – End Date</p>
					<ul className="list-disc list-inside text-base-content/70 space-y-1">
						<li>Describe your key responsibility or achievement</li>
						<li>Another accomplishment or task</li>
						<li>Technologies or skills applied</li>
					</ul>
				</div>
			</motion.section> */}

			{/* Skills Section */}
			<div className="grid gap-16">
				{/* Advanced Skills */}
				<motion.section variants={item}>
					<div className="flex items-center gap-4 mb-6">
						<h2 className="text-2xl font-bold text-secondary">Advanced Skills</h2>
						<div className="h-px bg-gradient-to-r from-secondary/50 to-transparent flex-grow" />
					</div>
					<div className="flex flex-wrap gap-3">
						{advancedSkills.map(skill => (
							<div key={skill} className="badge badge-lg p-4 bg-primary/10 text-primary border-primary/20 font-bold tracking-wide shadow-sm hover:scale-105 transition-transform cursor-default">
								{skill}
							</div>
						))}
					</div>
				</motion.section>

				{/* Foundational Skills */}
				<motion.section variants={item}>
					<div className="flex items-center gap-4 mb-6">
						<h2 className="text-2xl font-bold text-base-content/60">Foundational Skills</h2>
						<div className="h-px bg-base-content/10 flex-grow" />
					</div>
					<div className="flex flex-wrap gap-3">
						{foundationalSkills.map(skill => (
							<div key={skill} className="badge badge-outline badge-lg p-4 hover:bg-base-content/5 transition-colors cursor-default text-base-content/70">
								{skill}
							</div>
						))}
					</div>
				</motion.section>
			</div>
		</motion.div>
	)
}
