"use client";
import styles from "./Navbar.module.css";
import { useState, useEffect } from "react";
import { motion } from "motion/react";

const maxMobileWidth = 950;
const title = "Mateo Somoza Diaz";

interface NavLink {
	readonly label: string;
	readonly href: string;
	readonly styleAsButton?: boolean;
}

const links: readonly NavLink[] = [
	{ label: "About Me", href: "#about-me" },
	{ label: "Tech Stack", href: "#tech-stack" },
	{ label: "My Work", href: "#my-work" },
	{ label: "Contact", href: "#contact", styleAsButton: true },
];

export default function Navbar() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			if (mobileMenuOpen && window.innerWidth >= maxMobileWidth) {
				setMobileMenuOpen(false);
			}
		};

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, [mobileMenuOpen]);

	useEffect(() => {
		document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [mobileMenuOpen]);

	useEffect(() => {
		const onScroll = () => setIsScrolled(window.scrollY > 0);
		window.addEventListener("scroll", onScroll, { passive: true });
		onScroll();
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<>
			<header
				className={[
					styles.mainHeader,
					isScrolled ? styles.scrolled : null,
					mobileMenuOpen ? styles.open : null,
				]
					.filter(Boolean)
					.join(" ")}
			>
				<div className={styles.container}>
					<a
						href="#top"
						className={styles.title}
						onClick={() => setMobileMenuOpen(false)}
					>
						{title}
					</a>

					<nav className={styles.nav}>
						<div className={styles.linksContainer}>
							{links.map((link) => (
								<a
									key={link.label}
									href={link.href}
									className={link.styleAsButton ? styles.button : styles.link}
								>
									{link.label}
								</a>
							))}
						</div>

						<button
							type="button"
							onClick={() => setMobileMenuOpen((v) => !v)}
							className={styles.mobileMenuButton}
							aria-expanded={mobileMenuOpen}
						>
							<div className={styles.iconContainer}>
								<motion.div
									inert
									animate={mobileMenuOpen ? "cross" : "menu"}
									transition={{ duration: 0.18, ease: "linear" }}
									style={{ top: "25%", left: "50%", x: "-50%", y: "-50%" }}
									variants={{
										cross: { rotate: "45deg", top: "50%" },
										menu: { rotate: "0deg" },
									}}
								/>
								<motion.div
									inert
									animate={mobileMenuOpen ? "cross" : "menu"}
									transition={{ duration: 0.18, ease: "linear" }}
									style={{ top: "75%", left: "50%", x: "-50%", y: "-50%" }}
									variants={{
										cross: { rotate: "-45deg", top: "50%" },
										menu: { rotate: "0deg" },
									}}
								/>
							</div>
						</button>
					</nav>
				</div>
			</header>

			<motion.aside
				className={styles.mobileMenu}
				inert={!mobileMenuOpen}
				initial="closed"
				animate={mobileMenuOpen ? "open" : "closed"}
				variants={{
					open: {
						x: 0,
						opacity: 1,
						transition: {
							type: "tween",
							duration: 0.28,
							ease: "easeOut",
						},
					},
					closed: {
						x: "100%",
						opacity: 0,
						transition: {
							type: "tween",
							duration: 0.28,
							ease: "easeIn",
						},
					},
				}}
			>
				{links.map((link) => (
					<a
						key={link.label}
						href={link.href}
						onClick={() => setMobileMenuOpen(false)}
						className={link.styleAsButton ? styles.button : styles.link}
					>
						{link.label}
					</a>
				))}
			</motion.aside>

			<motion.div
				className={styles.mobileMenuPageOverlay}
				onClick={() => setMobileMenuOpen(false)}
				animate={mobileMenuOpen ? "open" : "closed"}
				initial="closed"
				variants={{
					open: { opacity: 1, display: "block" },
					closed: { opacity: 0, display: "none" },
				}}
			/>
		</>
	);
}
