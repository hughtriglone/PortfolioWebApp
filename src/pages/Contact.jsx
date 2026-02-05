import { useState } from 'react'

export default function Contact() {
	const [submitted, setSubmitted] = useState(false)

	const handleSubmit = (e) => {
		e.preventDefault()
		const form = e.target
		const formData = new FormData(form)

		fetch('/', {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: new URLSearchParams(formData).toString(),
		})
			.then(() => setSubmitted(true))
			.catch((error) => alert('Error submitting form'))
	}

	if (submitted) {
		return (
			<div className="max-w-lg mx-auto text-center py-20">
				<div className="text-6xl mb-6">✓</div>
				<h2 className="text-3xl font-bold mb-4 text-primary">Message Sent!</h2>
				<p className="text-base-content/70">Thanks for reaching out. I'll get back to you soon.</p>
			</div>
		)
	}

	return (
		<div className="max-w-lg mx-auto">
			<h2 className="text-3xl font-bold mb-6 text-center">Contact Me</h2>
			<form
				name="contact"
				method="POST"
				data-netlify="true"
				onSubmit={handleSubmit}
				className="card bg-base-200 shadow-xl p-6"
			>
				<input type="hidden" name="form-name" value="contact" />

				<div className="form-control w-full mb-4">
					<label className="label">
						<span className="label-text">Name</span>
					</label>
					<input type="text" name="name" placeholder="Your Name" className="input input-bordered w-full" required />
				</div>

				<div className="form-control w-full mb-4">
					<label className="label">
						<span className="label-text">Email</span>
					</label>
					<input type="email" name="email" placeholder="Your Email" className="input input-bordered w-full" required />
				</div>

				<div className="form-control w-full mb-6">
					<label className="label">
						<span className="label-text">Message</span>
					</label>
					<textarea name="message" className="textarea textarea-bordered h-24" placeholder="Your Message" required></textarea>
				</div>

				<div className="form-control mt-6">
					<button type="submit" className="btn btn-primary">Send Message</button>
				</div>
			</form>
		</div>
	)
}

