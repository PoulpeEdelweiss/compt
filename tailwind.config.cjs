/** @type {import('tailwindcss').Config} */
const defaultTheme =require('tailwindcss/defaultTheme');

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		screens: {
		sm: '640px',
		md:'768px',
		lg:'1024px',
		xl: '1280px',
		},
		extend: {
			fontFamily: {
				body: ['Montserrat', ...defaultTheme.fontFamily.sans],
				
			},

		},
	},
	plugins: [],
}
