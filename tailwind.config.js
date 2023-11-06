/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			gridTemplateColumns: {
				"3-100px": "repeat(3, 18rem)",
				"2-100px": "repeat(2, 18rem)",
				"1-100px": "repeat(1, 18rem)",
			},
		},
		colors: {
			white: "#fff",
			light: "#E5CAFD",
			pink: "#FA7BC4",
			purple: "#624A8E",
			dark2: "#331D5F",
			dark1: "#141639",
			darkest: "#030C1E",
		},
		fontFamily: {
			display: ["Purple Purse"],
			body: ["Modern Antiqua"],
		},
	},
	plugins: [],
};
