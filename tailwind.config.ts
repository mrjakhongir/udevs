import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
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
			},
			fontFamily: {
      'monrope': ['ui-sans-serif', 'system-ui'],
      
    }
		},
	},
};

export default config;
