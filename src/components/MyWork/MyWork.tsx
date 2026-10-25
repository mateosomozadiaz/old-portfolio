import styles from "./MyWork.module.css";
import SectionHeader from "@/components/SectionHeader/SectionHeader";

interface Project {
	readonly title: string;
	readonly description: string;
	readonly tags: readonly string[];
	readonly href?: string;
}

// Placeholder slots; replace with real projects. The first one gets the
// large tile, the second the wide one and the last two the small ones.
const projects: readonly Project[] = [
	{
		title: "Coming soon",
		description: "A new project is on its way. Check back shortly.",
		tags: ["In development"],
	},
	{
		title: "Coming soon",
		description: "A new project is on its way. Check back shortly.",
		tags: ["In development"],
	},
	{
		title: "Coming soon",
		description: "A new project is on its way.",
		tags: [],
	},
	{
		title: "Coming soon",
		description: "A new project is on its way.",
		tags: [],
	},
];

const tileClasses = [styles.large, styles.wide, styles.small, styles.small];

export default function MyWork() {
	return (
		<section id="my-work">
			<SectionHeader
				index="03"
				title="My Work"
				description="A selection of things I’ve built."
			/>
			<div className={styles.container}>
				{projects.map((project, i) => {
					const content = (
						<>
							<span className={styles.number}>
								{String(i + 1).padStart(2, "0")}
							</span>
							<div className={styles.body}>
								<h3 className={styles.projectTitle}>
									{project.title}
									{project.href && <span className={styles.arrow}>↗</span>}
								</h3>
								<p className={styles.description}>{project.description}</p>
								{project.tags.length > 0 && (
									<ul className={styles.tags}>
										{project.tags.map((tag) => (
											<li key={tag} className={styles.tag}>
												{tag}
											</li>
										))}
									</ul>
								)}
							</div>
						</>
					);

					const className = [styles.card, tileClasses[i]].join(" ");

					return project.href ? (
						<a
							key={i}
							href={project.href}
							target="_blank"
							rel="noreferrer"
							className={className}
						>
							{content}
						</a>
					) : (
						<article key={i} className={className}>
							{content}
						</article>
					);
				})}
			</div>
		</section>
	);
}
