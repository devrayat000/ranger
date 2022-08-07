const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
const config = {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		"./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
	],

	theme: {
		extend: {
			colors: {
				primary: {
					'light-grayish-red': 'hsl(14, 92%, 95%)',
					'light-red': 'hsl(15, 100%, 70%)',
				},
				'pale-blue': 'hsl(226, 100%, 87%)',
				'very-pale-blue': 'hsl(230, 100%, 99%)',
				cyan: {
					strong: 'hsl(174, 86%, 45%)',
					soft: 'hsl(174, 77%, 80%)',
				},
				'light-grayish-blue': {
					DEFAULT: 'hsl(224, 65%, 95%)',
					toggle: 'hsl(223, 50%, 87%)',
				},
				'grayish-blue': 'hsl(225, 20%, 60%)',
				'dark-desaturated-blue': 'hsl(227, 35%, 25%)',
			},
			fontFamily: {
				sans: ['Manrope', ...defaultTheme.fontFamily.sans]
			},
			backgroundSize: {
				'1/2': '50%',
				full: '100%',
			}
		},
	},

	plugins: [
		require('flowbite/plugin')
	],
};

module.exports = config;
