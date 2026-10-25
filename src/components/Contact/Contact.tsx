import styles from "./Contact.module.css";
import SectionHeader from "@/components/SectionHeader/SectionHeader";

export default function Contact() {
	return (
		<section id="contact" className={styles.contact}>
			<SectionHeader
				index="04"
				title="Contact Me"
				description="Have a project in mind or just want to say hi? Send me a message and I’ll get back to you."
			/>
			<form action="" className={styles.contactForm}>
				<div className={styles.row}>
					<label className={styles.field}>
						<span className={styles.label}>Name</span>
						<input
							className={styles.input}
							type="text"
							name="name"
							placeholder="Your name"
							autoComplete="name"
							required
						/>
					</label>
					<label className={styles.field}>
						<span className={styles.label}>Email</span>
						<input
							className={styles.input}
							type="email"
							name="email"
							placeholder="you@example.com"
							autoComplete="email"
							required
						/>
					</label>
				</div>
				<label className={styles.field}>
					<span className={styles.label}>Message</span>
					<textarea
						className={[styles.input, styles.textarea].join(" ")}
						name="message"
						placeholder="What would you like to talk about?"
						rows={5}
						maxLength={150}
						required
					/>
				</label>
				<button className={styles.submitButton} type="submit">
					Send message
				</button>
			</form>
		</section>
	);
}
