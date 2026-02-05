import { motion } from 'framer-motion'

export default function About() {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6 }}
			className="max-w-3xl mx-auto py-12 px-4"
		>
			<h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-primary tracking-tight">About Me</h1>
			<div className="text-xl leading-relaxed text-base-content/80 max-w-2xl space-y-6">
				<p>
					I'm currently pursuing my 3rd year in Bachelor of Advanced Computing at <span className="font-bold text-base-content">The University of Sydney</span>.
					Majoring in <span className="text-primary font-medium">Cybersecurity</span> and <span className="text-primary font-medium">Computational Data Science</span>.
				</p>
				<p className="text-base-content/60">
					Explore my projects or check out my CV for a detailed breakdown of my skills and experience.
				</p>
			</div>
		</motion.div>
	)
}