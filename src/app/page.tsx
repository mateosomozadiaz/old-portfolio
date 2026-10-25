import styles from "./page.module.css";

import HeroSection from "@/components/HeroSection/HeroSection";
import AboutMe from "@/components/AboutMe/AboutMe";
import TechStack from "@/components/TechStack/TechStack";
import MyWork from "@/components/MyWork/MyWork";
import Contact from "@/components/Contact/Contact";
import SAW from "@/components/ScrollAnimationWrapper/ScrollAnimationWrapper";

export default function Home() {
	return (
		<main className={styles.main}>
			<HeroSection />

			<SAW>
				<AboutMe />
			</SAW>

			<SAW>
				<TechStack />
			</SAW>

			<SAW>
				<MyWork />
			</SAW>

			<SAW>
				<Contact />
			</SAW>
		</main>
	);
}
