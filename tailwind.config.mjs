/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
                primary: '#0070f3',
                secondary: '#f5f6fa',
                tertiary: '#212121',
                dark: '#121212',
                light: '#ffffff',
                accent: '#BF4A1E',
            },
            fontFamily: {
                sans: ['Inter', 'ui-sans-serif', 'system-ui'],
            },
            boxShadow: {
                sm: '0 0 4px rgba(0, 0, 0, 0.1)',
                default: '0 0 8px rgba(0, 0, 0, 0.1)',
                md: '0 0 16px rgba(0, 0, 0, 0.1)',
                lg: '0 0 24px rgba(0, 0, 0, 0.1)',
				xl: '0 0 32px rgba(0, 0, 0, 0.1)',
            },
			backgroundImage: {
				'hero-pattern': 'url(/hero-pattern.webp)',
			}
		},
	},
	plugins: [],
}
