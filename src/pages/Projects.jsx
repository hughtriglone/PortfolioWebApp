import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Projects() {
	const [projects, setProjects] = useState([])
	const [loading, setLoading] = useState(true)
	const [revealIndex, setRevealIndex] = useState(0)
	const USERNAME = 'hughtriglone'


	// REVEAL LOGIC
	useEffect(() => {
		if (loading) return;

		const timer = setInterval(() => {
			setRevealIndex(prev => prev + 1)
		}, 500)

		return () => clearInterval(timer)
	}, [loading])

	// FETCH LOGIC
	useEffect(() => {
		const fetchProjects = fetch(`https://api.github.com/users/${USERNAME}/repos?sort=updated&per_page=30`)
			.then(res => {
				if (!res.ok) throw new Error('Failed to fetch')
				return res.json()
			})
			.then(data => (Array.isArray(data) ? data.filter(repo => !repo.fork) : []))

		// Handshake animation lasts 1 second
		const minWait = new Promise(resolve => setTimeout(resolve, 800))

		Promise.all([fetchProjects, minWait])
			.then(([repos]) => {
				setProjects(repos)
				setLoading(false)
			})
			.catch(err => {
				console.error("Error fetching projects:", err)
				setLoading(false)
			})
	}, [])

	// Determine what to display in the grid
	const displayData = loading
		? [...Array(12)].map((_, i) => ({ id: `loading-${i}`, isPlaceholder: true }))
		: projects;

	return (
		<div className="w-full min-h-[1200px]">
			{!loading && projects.length === 0 ? (
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{/* Slot 0: Greyed-out empty box */}
					<div className="relative h-72">
						<motion.div
							initial={{ opacity: 1 }}
							animate={{ opacity: 0.4 }}
							transition={{ duration: 0.5 }}
							className="absolute inset-0 rounded-2xl border-4 border-neutral bg-neutral overflow-hidden grayscale"
						>
							<div className="absolute inset-0 opacity-10"
								style={{
									backgroundImage: `repeating-linear-gradient(-45deg, #000 0px, #000 20px, transparent 20px, transparent 40px)`
								}}
							/>
						</motion.div>
					</div>

					{/* Slot 1: Notice box (centered on desktop) */}
					<motion.div
						initial={{ opacity: 0, scale: 0.95 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ delay: 0.5, duration: 0.3 }}
						className="h-72 rounded-2xl border-2 border-dashed border-primary/30 flex flex-col items-center justify-center gap-3 text-center px-6"
					>
						<span className="text-primary/50 text-3xl font-black">∅</span>
						<p className="text-sm text-base-content/60 leading-relaxed">
							No projects found.<br />Check again later!
						</p>
					</motion.div>

					{/* Slot 2: Empty for grid balance */}
					<div className="hidden lg:block h-72" />
				</div>
			) : (
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
					{displayData.map((repo, index) => {
						const isScanning = index === revealIndex
						const isRevealed = index < revealIndex

						return (
							<div key={index} className="relative h-72">
								<AnimatePresence mode="wait">
									{isScanning ? (
										<motion.div
											key="the-box" // Totally stable key across data loads
											initial={{ opacity: 0, scale: 0.95 }}
											animate={{ opacity: 1, scale: 1 }}
											exit={{ opacity: 0, scale: 1.05 }}
											transition={{ duration: 0.2 }}
											className="absolute inset-0 z-20 rounded-2xl border-4 border-primary bg-primary overflow-hidden flex items-center justify-center shadow-[0_0_20px_rgba(94,234,212,0.3)]"
										>
											<div className="absolute inset-0 opacity-20"
												style={{
													backgroundImage: `repeating-linear-gradient(-45deg, #000 0px, #000 20px, transparent 20px, transparent 40px)`
												}}
											/>
											<div className="flex flex-col items-center gap-2 relative z-10 text-center px-4">
												<span className="loading loading-bars loading-md text-base-300"></span>
												<div className="h-5 flex items-center justify-center">
													<AnimatePresence mode="wait">
														<motion.span
															key={loading ? 'uplink' : 'decrypt'}
															initial={{ opacity: 0, y: 5 }}
															animate={{ opacity: 1, y: 0 }}
															exit={{ opacity: 0, y: -5 }}
															transition={{ duration: 0.2 }}
															className="text-base-300 font-black tracking-widest text-[11px] uppercase"
														>
															{loading ? 'Fetching...' : 'Loading...'}
														</motion.span>
													</AnimatePresence>
												</div>
											</div>
										</motion.div>
									) : isRevealed && !repo.isPlaceholder ? (
										<motion.div
											key={`card-${repo.id}`}
											initial={{ opacity: 0, y: 10 }}
											animate={{ opacity: 1, y: 0 }}
											className="card bg-base-200 shadow-xl border border-primary/10 hover:border-primary/40 transition-all duration-300 group overflow-hidden h-full"
										>
											<div className="card-body">
												<h3 className="card-title text-primary text-xl font-black group-hover:translate-x-1 transition-transform truncate">{repo.name}</h3>
												<p className="line-clamp-3 text-sm opacity-70 leading-relaxed italic">
													{repo.description || "No description provided."}
												</p>
												<div className="card-actions justify-end mt-auto pt-4 gap-2">
													<a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="btn btn-xs btn-outline btn-primary px-4 font-bold border-2">REPOS</a>
													{repo.homepage && (
														<a href={repo.homepage} target="_blank" rel="noopener noreferrer" className="btn btn-xs btn-primary px-4 font-bold border-2 border-primary">LAUNCH</a>
													)}
												</div>
												<div className="mt-4 flex items-center justify-between text-[11px] font-bold uppercase tracking-widest opacity-40">
													<div className="flex items-center gap-2">
														<span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
														{repo.language || "Native"}
													</div>
													<span>Stars: {repo.stargazers_count}</span>
												</div>
											</div>
										</motion.div>
									) : (
										// EMPTY SLOT
										<div key="empty" className="w-full h-full" />
									)}
								</AnimatePresence>
							</div>
						)
					})}
				</div>
			)}
		</div>
	)
}
