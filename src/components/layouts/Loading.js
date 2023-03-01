import { Box, CircularProgress, Fade } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
	loading: {
		position: "absolute",
		top: 150,
		bottom: 0,
		right: 0,
		left: 0,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		zIndex: 0,
	},
}));

export default function Loading({ loading, children }) {
	const classes = useStyles();

	return (
		<Box style={{ width: "100%", height: "100%" }}>
			{!loading ? (
				<Fade in={!loading}>
					<div style={{ width: "100%", height: "100%" }}>
						{children}
					</div>
				</Fade>
			) : (
				<Box className={classes.loading}>
					<Fade in={loading}>
						<CircularProgress color="primary" />
					</Fade>
				</Box>
			)}
		</Box>
	);
}
