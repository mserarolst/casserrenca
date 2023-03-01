import { createTheme } from "@mui/material/styles";
import { colors } from "@mui/material";
import { createBreakpoints } from "@mui/system";

const breakpoints = createBreakpoints({});

const theme = createTheme({
	breakpoints: {
		values: {
			xs: 0,
			sm: 600,
			md: 960,
			lg: 1150,
			xl: 1920,
		},
	},
	color: {
		primary: "#1E1E1E",
		secondary: "#1e1e1e",
		third: "#1D1D1B",
		background: "#FFFFFF",
		background_dark: "#FFFFFF",
		gradient11: "#6F8A30",
		gradient12: "#f6b2a7",
		gradient21: "#ae74c7",
		gradient22: "#d4a4e9",
		gradient31: "#FBC371",
		gradient32: "#eec993",
		gradient41: "#fbb48c",
		gradient42: "#ecb783",
		gradientI: "#E7EBF0",
		gradient: "linear-gradient(90deg, #6F8A30,#6F8A30);",
		gradient0: "linear-gradient(50deg, #d6d6d6,#d6d6d6,#f6b2a7);",
		gradient1: "linear-gradient(50deg, #1E1E1E,#1E1E1E,#f6b2a7);",
		gradient2: "linear-gradient(50deg, #ae74c7,#ae74c7,#d4a4e9);",
		gradient3: "linear-gradient(50deg, #FBC371,#FBC371,#eec993);",
		gradient4: "linear-gradient(50deg, #fbb48c,#fbb48c,#ecb783);",
		gradient5: "linear-gradient(50deg, #fbb48c,#fbb48c,#ecb783);",
		gradient6: "linear-gradient(50deg, #fbb48c,#fbb48c,#ecb783);",
		gradientinfo: "linear-gradient(50deg, #E7EBF0,#E7EBF0,#F2EBF0);",

		gradient_inv: "linear-gradient(260deg, #6e8a3085, #6e8a3085);",
		gradient_ver: "linear-gradient( #fff,#fff);",
		mig: "#F9996F",
		boxShadow: "0px 0px 8px 0px #1E1E1E",
		boxShadowGrey: "0px 0px 8px 0px #d6d6d6",
		divider: "rgba(0, 0, 0, 0.12)",
		// boxShadow: "12px 12px 37px #d6d6d6,-12px -12px 37px #ffffff;",
	},
	palette: {
		background: {
			main: "#FFF",
			secondary: "#1E1E1E",
			third: "#FBC371",
		},
		primary: {
			main: "#1E1E1E",
			hover: "#1D1D1B",
		},
		secondary: {
			main: "#FBC371",
			hover: "#FFF",
		},
		danger: {
			main: colors.red[500],
			light: colors.red[300],
		},
		success: {
			main: colors.green[500],
		},
		info: {
			main: "#FFF",
			hover: "#1E1E1E",
		},
		text: {
			primary: "#1E1E1E",
			secondary: "#1E1E1E",
			third: "#FFF",
		},
		typography: {
			fontFamily: "Azeret Mono",
		},
	},
	typography: {
		h1: {
			fontSize: "4rem",
			fontFamily: "Helvetica",
			color: "#000",
			lineHeight: 0.9,
			[breakpoints.down("sm")]: {
				fontSize: "3.7rem",
			},
			textTransform: "unset",
		},
		h2: {
			fontSize: "3rem",
			fontFamily: "Helvetica",
			color: "#000",
			lineHeight: 0.9,
			[breakpoints.down("sm")]: {
				fontSize: "2.5rem",
			},
			textTransform: "unset",
			fontWeight: 500,
		},
		h3: {
			fontSize: "2.5rem",
			fontFamily: "Helvetica",
			textTransform: "unset",
			color: "#000",
			[breakpoints.down("sm")]: {
				fontSize: "2rem",
			},
		},
		h4: {
			fontSize: "1.9rem",
			fontFamily: "Helvetica",
			textTransform: "unset",
			color: "#000",
			[breakpoints.down("sm")]: {
				fontSize: "1.5rem",
			},
		},
		h5: {
			fontSize: "1.5rem",
			fontFamily: "Helvetica",
			fontWeight: 800,
			color: "#000",
		},
		h6: {
			fontSize: "1.2rem",
			fontFamily: "Helvetica",
			fontWeight: 500,
			color: "#1D1D1B",
			textTransform: "unset",
		},
		body1: {
			fontSize: "1.1rem",
			fontFamily: "Helvetica",
			color: "#000",
			paddingTop: 5,
			paddingBottom: 5,
			[breakpoints.down("sm")]: {
				fontSize: "0.8rem",
			},
		},
		body2: {
			fontFamily: "Helvetica",
			fontSize: "1rem",
			color: "#898C94",
		},
		caption: {
			fontFamily: "Helvetica",
			color: "#1D1D1B",
		},
		root: {
			"& a": {
				color: "#1D1D1B",
				textDecoration: "none",
				transition: "0.5s",
				"&:hover": {
					color: "black",
				},
			},
		},
		error: {
			fontFamily: "Helvetica",
			color: "#d32f2f",
			fontSize: "0.75rem",
		},
		title: {
			fontFamily: "Helvetica",
			fontSize: "3.5rem",
			color: "#1D1D1B",
		},
		link: {
			fontSize: "1.3rem",
			fontFamily: "Helvetica",
			fontWeight: 500,
			color: "#1D1D1B",
		},
		footer: {
			fontSize: "0.8rem",
			fontFamily: "'Helvetica'",
			color: "#fff",
		},
		menu: {
			fontFamily: "Helvetica",
			fontSize: 23,
			textDecoration: "none",
			color: '#fff',
			"&:hover": {
				color: "#FF0090",
			},
		},
		menuSocial: {
			fontFamily: "Helvetica",
			fontSize: 18,
			textDecoration: "none",
			color: '#FF0090'
		},
	},
	"& a": {
		color: "black",
	},
});

export default theme;
