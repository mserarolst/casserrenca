import * as React from "react";
import { styled } from "@mui/material/styles";
import { Box, TextField } from "@mui/material";

const CssTextField = styled(TextField)({
	"& .MuiInput-underline:before": {
		borderBottomColor: "transparent",
	},
	"& label.Mui-focused": {
		color: "grey",
	},
	"& .MuiInput-underline:after": {
		borderBottomColor: "grey",
	},
	"& .MuiOutlinedInput-root": {
		"& fieldset": {
			borderColor: "red",
		},
		"&:hover fieldset": {
			borderColor: "yellow",
		},
		"&.Mui-focused fieldset": {
			borderColor: "grey",
		},
	},
});

export default function CustomTextFieldForm({
	errors,
	label,
	name,
	type,
	register,
	size,
	...rest
}) {
	return (
		<Box mt={3}>
			<CssTextField
				error={Boolean(errors)}
				helperText={errors?.message}
				fullWidth
				label={label}
				name={name}
				type={type}
				variant="standard"
				{...register(name)}
				{...rest}
				InputLabelProps={{ shrink: true }}
			/>
		</Box>
	);
}
