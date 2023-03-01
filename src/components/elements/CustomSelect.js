import * as React from "react";
import { Chip, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Box } from "@mui/system";
import { Controller } from "react-hook-form";

export default function CustomSelect({
	name,
	label,
	register,
	list,
	multiple,
	control,
}) {
	return (
		<Box mt={3}>
			<FormControl fullWidth>
				<InputLabel htmlFor="tipus">{label}</InputLabel>
				{multiple ? (
					<Controller
						control={control}
						name="categories"
						render={({
							field: { onChange, onBlur, value, name, ref },
						}) => (
							<Select
								options={list}
								fullWidth
								variant="outlined"
								onChange={onChange}
								isMulti={true}
								onBlur={onBlur}
								value={value}
								name={name}
								label={label}
								ref={ref}
								multiple
								defaultValue={[]}
								renderValue={(selected) => (
									<Box
										sx={{
											display: "flex",
											flexWrap: "wrap",
											gap: 0.5,
										}}
									>
										{selected.map((value) => (
											<Chip
												key={value.id}
												label={value.nom}
											/>
										))}
									</Box>
								)}
							>
								{list?.map((item) => (
									<MenuItem value={item}>{item.nom}</MenuItem>
								))}
							</Select>
						)}
					/>
				) : (
					<Controller
						render={({ field }) => (
							<Select
								{...field}
								label={label}
								variant="outlined"
								fullWidth
							>
								{list?.map((item) => (
									<MenuItem value={item.id}>
										{item.nom}
									</MenuItem>
								))}
							</Select>
						)}
						name={name}
						control={control}
						defaultValue={1}
					/>
				)}
			</FormControl>
		</Box>
	);
}
