import styles from "./TechStack.module.css";
import Image from "next/image";
import SectionHeader from "@/components/SectionHeader/SectionHeader";

export default function TechStack() {
	const techStack = [
		{ name: "Figma", icon: "/tech-stack-icons/figma.png" },
		{ name: "Git", icon: "/tech-stack-icons/git.png" },
		{ name: "CSS", icon: "/tech-stack-icons/css.png" },
		{ name: "JavaScript", icon: "/tech-stack-icons/javascript.png" },
		{ name: "TypeScript", icon: "/tech-stack-icons/typescript.png" },
		{ name: "NodeJS", icon: "/tech-stack-icons/nodejs.png" },
		{ name: "React", icon: "/tech-stack-icons/react.png" },
		{ name: "NextJS", icon: "/tech-stack-icons/nextjs.png" },
		{ name: "Express", icon: "/tech-stack-icons/express.png" },
		{ name: "PostgreSQL", icon: "/tech-stack-icons/postgresql.png" },
		{ name: "Firebase", icon: "/tech-stack-icons/firebase.png" },
		{ name: "MongoDB", icon: "/tech-stack-icons/mongodb.png" },
		{ name: "Python", icon: "/tech-stack-icons/python.png" },
	];

	return (
		<section id="tech-stack">
			<SectionHeader
				index="02"
				title="Tech Stack"
				description="The technologies and tools I use in my projects."
			/>
			<ul className={styles.stack}>
				{techStack.map((item) => (
					<li key={item.name} className={styles.item}>
						<span className={styles.icon}>
							<Image src={item.icon} alt="" width={28} height={28} />
						</span>
						<span className={styles.name}>{item.name}</span>
					</li>
				))}
			</ul>
		</section>
	);
}
