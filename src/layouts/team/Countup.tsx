'use client';
import {
	KeyframeOptions,
	animate,
	useInView,
	useIsomorphicLayoutEffect,
} from 'framer-motion';

import { useRef } from 'react';

type CountupProps = {
	from: number;
	to: number;
	animationOptions?: KeyframeOptions;
};

function Countup({ from, to, animationOptions }: CountupProps) {
	const ref = useRef<HTMLSpanElement | null>(null);
	const inView = useInView(ref);
	useIsomorphicLayoutEffect(() => {
		const element = ref.current;

		if (!element) return;
		if (!inView) return;

		element.textContent = String(from);

		const controls = animate(from, to, {
			duration: 2,
			ease: 'easeOut',
			...animationOptions,
			onUpdate(value) {
				element.textContent = value.toFixed(0);
				if (value === to) {
					setTimeout(() => {
						element.textContent += '+';
					}, 250);
				}
			},
		});

		return () => {
			controls.stop();
		};
	}, [inView]);

	return <span ref={ref} />;
}

export default Countup;
