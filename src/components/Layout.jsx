import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout() {
	return (
		<div className="flex flex-col min-h-screen bg-base-100 text-base-content transition-colors duration-300">
			<Navbar />
			<main className="flex-grow container mx-auto px-2 py-8">
				<Outlet />
			</main>
			<Footer />
		</div>
	)
}
