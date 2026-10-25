import styles from "./SectionHeader.module.css";

type Props = {
	index: string;
	title: string;
	description?: string;
};

export default function SectionHeader({ index, title, description }: Props) {
	return (
		<header className={styles.header}>
			<span className={styles.index}>{index}</span>
			<h2 className={styles.title}>{title}</h2>
			{description && <p className={styles.description}>{description}</p>}
		</header>
	);
}
