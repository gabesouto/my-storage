/** @type {import('tailwindcss').Config} */
export default {
content:[
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

	],
	theme: {
		extend: {
			width: {
				'big': '105px',
				'small': '75px',
				'mobile': '380px'
			},
			colors: {
				'yellow': '#F2E635',
				'gold': '#F2BA52',
				'red': '#F21D55',
			},
			fontFamily: {
				'croissant': ['Croissant One', 'cursive'],
				'lato': ['Lato', 'sans-serif'],
				'argentum': ['Argentum-Sans-Bold',],
				'poppins': ['Poppins', 'sans-serif'],
			},
			backgroundColor: {
				semiwhite: 'rgb(249, 250, 251)'
			}
		},
	},

}

