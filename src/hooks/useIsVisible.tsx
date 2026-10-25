import { useEffect, useState, useRef } from "react";

type Props = {
	threshold?: number;
};

export default function useInView({ threshold = 0 }: Props = {}) {
	const ref = useRef<HTMLDivElement | null>(null);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const el = ref.current;
		if (!el) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				setIsVisible(entry.isIntersecting);
			},
			{ threshold },
		);

		observer.observe(el);

		return () => observer.disconnect();
	}, [threshold]);

	return { ref, isVisible };
}
