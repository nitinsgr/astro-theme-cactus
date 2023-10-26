import { fontFamily } from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}"],
  darkMode: "class",
  corePlugins: {
    // ... (existing core plugins)
  },
  theme: {
	extend: {
		scale: {
			'100': '1', // You can adjust the scale value as needed
		  },
	  colors: {
		bgColor: "var(--theme-bg)",
		textColor: "var(--theme-text)",
		link: "var(--theme-link)",
		accent: "var(--theme-accent)",
		"accent-2": "var(--theme-accent-2)",
		// Add more custom colors if needed
	  },
	  maxWidth: {
		half: "200%",
	  },
	  fontWeight: {
		thin: '100',
		hairline: '100',
		extralight: '200',
		light: '300',
		normal: '400',
		medium: '500',
		semibold: '600',
		bold: '700',
		extrabold: '800',
		black: '900',
	  },
	  fontFamily: {
		// ... (existing fonts)
		'Aileron-Black': ['Aileron-Black', 'sans-serif'],
		'Aileron-Bold': ['Aileron-Bold', 'sans-serif'],
		Lato:['Lato', 'sans-serif'],
		'Raleway': ['Raleway', 'sans-serif'],
		'SourceSerif4':['Source Serif 4','serif'],
		'SourceSerifPro-Black': ['SourceSerifPro-Black','serif'],
	  },
	  fontSize: {
        // Define your font sizes here
        'xs': '0.75rem',   // Extra Small (12px)
        'sm': '0.875rem',  // Small (14px)
        'base': '1rem',    // Base (16px)
        'lg': '1.125rem',  // Large (18px)
        'xl': '1.25rem',   // Extra Large (20px)
        '2xl': '1.2rem',   // 2X Large (24px)
        '3xl': '1.675rem', // 3X Large (30px)
        '4xl': '2.25rem',  // 4X Large (36px)
        '5xl': '3rem',     // 5X Large (48px)
        '6xl': '4rem',     // 6X Large (64px)
      },
	  lineHeight :{
		'xs':'1rem'
	  },
	  transitionProperty: {
		height: "height",
	  },
	  typography: (theme) => ({
		cactus: {
		  css: {
			"--tw-prose-body": "var(--theme-text)",
			"--tw-prose-headings": "var(--theme-text)",
			"--tw-prose-links": "var(--theme-text)",
			"--tw-prose-bullets": "var(--theme-text)",
			"--tw-prose-quotes": "var(--theme-quote)",
			"--tw-prose-code": "var(--theme-text)",
			"--tw-prose-hr": "0.5px dashed #666",
			"--tw-prose-th-borders": "#666",
			h2: {
			  fontSize: theme("fontSize.2xl"),
			  fontFamily: "Lato, sans-serif",
			//   fontFamily: "Libre Baskerville, serif",
			  fontWeight: theme("fontWeight.bold")

			  // Add any other styles specific to h1 here
			},
			h3: {
				fontSize: theme("fontSize.xl"),
				fontFamily: "Lato, sans-serif",
				fontWeight:theme("fontWeight.extrabold")
				

				// Add any other styles specific to h1 here
			  },
			"h1, h2, h3, h4, h5, h6": {
			

			},
			"p, span, a, B, ol,li": {
			  fontFamily: "SourceSerif4, serif",
			  lineHeight: "1.4",
			  fontSize: theme("fontSize.[2xl]")
			  // Add any other text-specific styles here
			},
			"li": {
				fontFamily: "SourceSerifPro-Regular, Serif",
				fontSize: theme("fontSize.xl"),
				lineHeight: "1.4",
				// Add any other text-specific styles here
			  },
			  "ol":{
				fontFamily: "SourceSerif4, serif",
				fontSize: theme("fontSize.2xl"),
				lineHeight: "1.4",
			  },
			  "b": {
				fontFamily: "SourceSerifPro-Regular, Serif",
				fontSize: theme("fontSize.xl"),
				lineHeight: "1.4",
				// Add any other text-specific styles here
			  },
		  },
		},
	  }),
	  backgroundColor: (theme) => ({
		...theme("colors"),
		// Add background colors for dark mode
		dark: theme("colors.gray.800"),
	  }),
	  textColor: (theme) => ({
		...theme("colors"),
		// Add text colors for dark mode
		dark: theme("colors.white"),
	  }),
	},
  },
  
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
	[require("tw-elements/dist/plugin.cjs")],
    plugin(function ({ addComponents }) {
      addComponents({
        // ... (existing components)
      });
    }),
  ],
};
