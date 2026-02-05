import { NavLink, Link } from 'react-router-dom'

export default function Navbar() {
	const navLinks = [
		{ name: 'Home', path: '/' },
		{ name: 'About', path: '/about' },
		{ name: 'Projects', path: '/projects' },
		{ name: 'CV', path: '/cv' },
	]

	return (
		<div className="navbar bg-base-300 shadow-lg py-4 sticky top-0 z-50 w-full">
			<div className="container mx-auto flex justify-between items-center px-4 max-w-6xl">
				{/* Logo */}
				<Link
					to="/"
					className="group relative p-[4px] rounded-xl overflow-hidden hazard-bg"
					style={{ backgroundPosition: '0px 0' }}
				>
					<span className="bg-base-300 group-hover:bg-primary transition-colors duration-300 rounded-[10px] px-3 py-1.5 flex items-center justify-center">
						<span className="text-xl font-black tracking-tight text-primary group-hover:text-base-300 transition-colors duration-300">HT</span>
					</span>
				</Link>

				{/* Center Navigation */}
				<ul className="menu menu-horizontal px-1 gap-6">
					{navLinks.map((link) => (
						<li key={link.name}>
							<NavLink
								to={link.path}
								className={({ isActive }) =>
									`hazard-underline text-xl hover:bg-transparent focus:bg-transparent active:!bg-transparent transition-colors duration-200 font-bold
									${isActive ? "hazard-underline-active text-primary focus:text-primary"
										: "hover:text-primary active:text-primary focus:text-primary text-base-content/80"}`
								}
							>
								{link.name}
							</NavLink>
						</li>
					))}
				</ul>

				{/* Contact Button */}
				<NavLink
					to="/contact"
					className={({ isActive }) => `btn-hazard hover:bg-transparent ${isActive ? "btn-hazard-active" : ""}`}
				>
					<span>Contact Me</span>
				</NavLink>
			</div>
		</div>
	)
}
