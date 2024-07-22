export function fadeIn(direction: string, delay: number) {
	return {
		hidden: {
			y: direction === 'up' ? 100 : direction === 'down' ? -72 : 0,
			x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
			opacity: 0,
		},
		show: {
			y: 0,
			x: 0,
			opacity: 1,
			transition: {
				type: 'tween',
				duration: 0.2,
				delay: delay,
				ease: [0.25, 0.25, 0.25, 0.75],
			},
		},
	};
}

export function scaleUp(delay: number = 0) {
	return {
		hidden: {
			scale: 0.4,
			opacity: 0,
		},
		show: {
			scale: 1,
			opacity: 1,
			transition: {
				type: 'tween',
				duration: 0.3,
				delay: delay,
				ease: [0.25, 0.25, 0.25, 0.75],
			},
		},
	};
}
