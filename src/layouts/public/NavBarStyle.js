import { makeStyles } from "@mui/styles";

const navBarStyle = makeStyles((theme) => ({
	title: {
		color: "white",
	},
	button: {
		padding: 20,
		textDecoration: "none",
		color: "white",
		borderTop: "3px solid #00000000",
		marginTop: "-3px !important",
		transition: "0.2s",
		"&.active": {
			borderTop: "3px solid " + theme.palette.background.color,
			"& span": {
				color: theme.palette.text.secondary,
			},
		},
		"&:hover": {
			borderTop: "3px solid " + theme.palette.background.color,
			"& span": {
				color: theme.palette.text.secondary,
			},
		},
	},
	buttonMobile: {
		padding: 20,
		textDecoration: "none",
		borderTop: "3px solid #00000000",
		marginTop: "-3px !important",
		transition: "0.2s",
		color: theme.palette.background.color,
		width: 200,
		"&.active": {
			backgroundColor: theme.palette.background.color,
			borderBottom: "3px solid " + theme.palette.background.color,
			"& span": {
				color: theme.palette.text.primary,
			},
		},
		"&:hover": {
			backgroundColor: theme.palette.background.color,
			borderTop: "3px solid " + theme.palette.background.color,
			borderBottom: "3px solid " + theme.palette.background.color,
			"& span": {
				color: theme.palette.text.primary,
			},
		},
	},
}));

export default navBarStyle;
