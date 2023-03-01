import { Schedule } from "@mui/icons-material";
import {
	Box,
	CircularProgress,
	Dialog,
	Fade,
	Modal,
	Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useEffect } from "react";

const useStyles = makeStyles((theme) => ({
	loading: {
		position: "absolute",
		top: 0,
		bottom: 0,
		right: 0,
		left: 0,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		zIndex: 0,
		width: "100%",
		height: "100%",
	},
}));

export default function LoadingGenerar({ loading }) {
	const classes = useStyles();

	return (
		<Modal
			open={loading}
			BackdropProps={{
				style: { backgroundColor: "black", opacity: 0.8 },
			}}
		>
			<Box
				className={classes.loading}
				display="flex"
				flexDirection={"column"}
			>
				<Schedule color="info" fontSize="large" />
				<Typography color="white" variant="h4">
					Generant horaris...
				</Typography>
				<Typography color="white" mb={4}>
					Pot portar temps... Vés a fer un cafè
				</Typography>
				<CircularProgress color="info" />
			</Box>
		</Modal>
	);
}
