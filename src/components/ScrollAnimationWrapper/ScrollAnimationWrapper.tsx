"use client";
import styles from "./ScrollAnimationWrapper.module.css";
import type { ReactNode } from "react";
import useIsVisible from "@/hooks/useIsVisible";

type Props = {
	children: ReactNode;
};

export default function ScrollAnimationWrapper(props: Props) {
	const { ref, isVisible } = useIsVisible({ threshold: 0.1 });

	return (
		<div ref={ref} className={`${styles.wrapper} ${isVisible ? styles.show : ""}`}>
			{props.children}
		</div>
	);
}
