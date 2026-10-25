import styles from "./HeroSection.module.css";

export default function HeroSection() {
	return (
		<section id="top" className={styles.heroSection}>
			<p className={styles.eyebrow}>Based in Buenos Aires, Argentina</p>
			<div className={styles.headline}>
				<h2 className={styles.title}>I’m Mateo</h2>
				<span className={styles.cursor} aria-hidden />
			</div>
			<h1 className={styles.subtitle}>full-stack developer</h1>
			<p className={styles.description}>
				I build clean, professional web applications, from the database all the way
				to the interface.
			</p>
			<div className={styles.actions}>
				<button className={styles.button}>View Resume</button>
				<a href="#contact" className={styles.secondaryButton}>
					Get in touch
				</a>
			</div>
		</section>
	);
}
