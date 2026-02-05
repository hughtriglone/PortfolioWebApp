
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Home() {
	return (
		<div className="hero w-full relative overflow-visible flex-grow py-12 md:py-20">
			{/* Ambient Background Glow */}
			<div className="absolute inset-0 overflow-visible pointer-events-none -z-10">
				<div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] opacity-40 animate-pulse" />
				<div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[120px] opacity-30" />
			</div>

			<div className="hero-content text-center z-10 w-full">
				<div className="max-w-3xl w-full">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
					>
						{/* Subtle Tagline */}
						<h3 className="text-secondary tracking-[0.2em] uppercase text-xs md:text-sm font-bold mb-6">
							Portfolio & CV
						</h3>

						{/* Main Headline */}
						<h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight leading-tight">
							Hi, I'm <span className="text-primary inline-block">Hugh Triglone</span>.
						</h1>

						{/* Subheadline with Gradient */}
						<h2 className="text-2xl md:text-4xl font-bold text-base-content/80 mb-8 leading-snug">
							<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Uni Student </span>& Aspiring Developer.
						</h2>
					</motion.div>

					{/* Bio/Description */}
					<motion.p
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.4, duration: 0.8 }}
						className="py-2 text-lg text-base-content/70 leading-relaxed max-w-2xl mx-auto mb-10"
					>
						Currently pursuing a Bachelor of Advanced Computing at <span className="font-semibold text-base-content">The University of Sydney</span>.
						Majoring in <span className="text-primary/80 font-medium">Cybersecurity</span> and <span className="text-primary/80 font-medium">Computational Data Science</span>.
					</motion.p>

					{/* Call to Actions */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.6 }}
						className="flex justify-center"
					>
						<Link
							to="/projects"
							className="btn btn-primary btn-lg rounded-xl border-none font-bold text-base-300 px-8 transition-all duration-300 hover:scale-105"
						>
							Explore Work
						</Link>
					</motion.div>
				</div>
			</div>
		</div>
	)
}
