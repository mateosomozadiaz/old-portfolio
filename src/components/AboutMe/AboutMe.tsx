import styles from "./AboutMe.module.css";
import SectionHeader from "@/components/SectionHeader/SectionHeader";

interface ListItem {
	readonly label: string;
	readonly detail?: string;
	readonly inProgress?: boolean;
}

const groups: readonly { title: string; items: readonly ListItem[] }[] = [
	{
		title: "Education",
		items: [{ label: "Bachillerato con orientación en Diseño" }],
	},
	{
		title: "Courses",
		items: [
			{ label: "Web Development", detail: "Coderhouse" },
			{ label: "JavaScript", detail: "Coderhouse" },
			{ label: "React JS", detail: "Coderhouse" },
			{ label: "Backend I", detail: "Coderhouse" },
			{ label: "Full Stack Open", detail: "University of Helsinki", inProgress: true },
			{
				label: "CS50’s Introduction to Programming with Python",
				detail: "Harvard",
				inProgress: true,
			},
		],
	},
	{
		title: "Languages",
		items: [
			{ label: "Spanish", detail: "Native" },
			{ label: "English", detail: "Cambridge FCE · C1" },
		],
	},
];

export default function AboutMe() {
	return (
		<section id="about-me" className={styles.aboutMe}>
			<div className={styles.intro}>
				<SectionHeader index="01" title="About Me" />
				<p className={styles.p}>
					I’m a full-stack web developer based in Buenos Aires, Argentina. My main focus
					is building clean and professional applications. I enjoy solving problems and
					staying up to date with modern technologies.
				</p>
			</div>

			<div className={styles.groups}>
				{groups.map((group) => (
					<div key={group.title} className={styles.card}>
						<h3 className={styles.subtitle}>{group.title}</h3>
						<ul className={styles.list}>
							{group.items.map((item) => (
								<li key={item.label} className={styles.item}>
									<span className={styles.label}>{item.label}</span>
									{item.detail && (
										<span className={styles.detail}>{item.detail}</span>
									)}
									{item.inProgress && (
										<span className={styles.badge}>In progress</span>
									)}
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</section>
	);
}
