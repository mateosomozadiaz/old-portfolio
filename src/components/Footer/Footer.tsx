import styles from "./Footer.module.css";

export default function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				<p className={styles.p}>© {currentYear} Mateo Somoza Diaz. All rights reserved.</p>
				<a href="#top" className={styles.backToTop}>
					Back to top ↑
				</a>
			</div>
		</footer>
	);
}
