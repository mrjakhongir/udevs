import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	safelist: [
		{
			pattern:
				/bg-(bgSecondary|bgPrimary|devops|mobile|infrastructure|frontend|design|testing|backend|bgDelivery|colorDelivery|bgSmsuz|colorSmsuz|bgGoodzone|colorGoodzone|bgIman|colorIman)/,
		},
	],
	theme: {
		extend: {
			screens: {
				laptop: '900px',
			},
			colors: {
				primary: 'var(--color-primary)',
				disabled: 'var(--primary-disabled)',
				secondary: 'var(--color-secondary)',
				dark: 'var(--dark)',
				opacity: 'rgba(var(--opacity) / 0.57)',
				bgPrimary: 'var(--background)',
				bgSecondary: 'var(--bg-secondary)',
				font: 'var(--font-color)',
				devops: 'var(--devops)',
				mobile: 'var(--mobile)',
				infrastructure: 'var(--infrastructure)',
				frontend: 'var(--frontend)',
				design: 'var(--design)',
				pm: 'var(--pm)',
				testing: 'var(--testing)',
				backend: 'var(--backend)',
				bgDelivery: 'var(--bg-delivery)',
				colorDelivery: 'var(--color-delivery)',
				bgSmsuz: 'var(--bg-smsuz)',
				colorSmsuz: 'var(--color-smsuz)',
				bgGoodzone: 'var(--bg-goodzone)',
				colorGoodzone: 'var(--color-goodzone)',
				bgIman: 'var(--bg-iman)',
				colorIman: 'var(--color-iman)',
			},
			fontFamily: {
				monrope: ['ui-sans-serif', 'system-ui'],
			},
			keyframes: {
				scroll: {
					from: { left: 'translateX(0)' },
					to: { transform: 'translateX(-100%)' },
				},
			},
			animation: {
				scroll: 'scroll 130s linear infinite',
				scrollReverse: 'scroll 130s linear infinite reverse',
			},
		},
	},
};

export default config;
