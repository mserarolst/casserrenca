import * as React from "react";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Add } from "@mui/icons-material";

const useStyles = makeStyles((theme) => ({
	header: {
		borderBottom: "1px solid " + theme.palette.background.light,
	},
	boto: {
		boxShadow: "none",
		textTransform: "none",
		padding: "10px 20px",
		borderRadius: 5,
		lineHeight: 1.5,
		color: "white",
		backgroundColor: theme.color.primary,
		borderColor: theme.palette.background.main,
		fontFamily: "Open Sans",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		cursor: "pointer",
		width: "100%",
	},
}));

export default function ImageInput({
	errors,
	name,
	register,
	trigger,
	multiple,
	text,
}) {
	const classes = useStyles();
	return (
		<Box mt={3}>
			<Box display="flex" justifyContent="space-between">
				<Box>
					<label htmlFor={name}>
						<input
							id={name}
							name={name}
							type="file"
							{...register(name, {
								onChange: () => {
									trigger(name);
								},
							})}
							style={{
								display: "none",
							}}
						/>
						<Box className={classes.boto}>
							<Add size={15} />
							<Typography
								style={{
									fontSize: 13,
									color: "white",
								}}
							>
								{" "}
								{text}
							</Typography>
						</Box>
					</label>
				</Box>
			</Box>

			<Typography variant="error">{errors?.message}</Typography>
		</Box>
	);
}
