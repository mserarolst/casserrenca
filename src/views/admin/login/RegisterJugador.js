import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import {
	Box,
	Checkbox,
	FormControlLabel,
	Grid,
	Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Registre, registreJugador } from "../../../API/API";
import CustomButton from "../../../components/elements/CustomButton";
import CustomTextField from "../../../components/elements/CustomTextField";

const RegisterJugador = () => {
	const [error, setError] = useState("");
	let navigate = useNavigate();

	const schema = Yup.object().shape({
		name: Yup.string().max(255).required("El nom és obligatòri"),
		telefon: Yup.string().max(255).required("El telèfon és obligatòri"),
		email: Yup.string()
			.email("Ha de ser un email vàlid")
			.max(255)
			.required("L'email és obligatòri"),
		password: Yup.string()
			.max(255)
			.required("La contrasenya és obligatòria"),
		password_confirm: Yup.string().oneOf(
			[Yup.ref("password"), null],
			"La contrasenya ha de coincidir"
		),
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const registre = async (values) => {
		console.log(values);

		const message = await registreJugador(values);
		if (message === "error") {
			setError("Usuari o contrasenya incorrectes");
		} else {
			navigate("/admin/");
		}
	};

	return (
		<form onSubmit={handleSubmit(registre)}>
			<Grid container spacing={2}>
				<Grid item md={4} xs={12}>
					<CustomTextField
						name="name"
						label="Nom"
						type="text"
						errors={errors.name}
						register={register}
					/>
				</Grid>
				<Grid item md={4} xs={12}>
					<CustomTextField
						name="email"
						label="E-mail"
						type="email"
						errors={errors.email}
						register={register}
					/>
				</Grid>
				<Grid item md={4} xs={12}>
					<CustomTextField
						name="telefon"
						label="Telèfon"
						type="text"
						errors={errors.telefon}
						register={register}
					/>
				</Grid>
			</Grid>

			<Grid container spacing={2}>
				<Grid item md={6} xs={12}>
					<CustomTextField
						name="password"
						label="Contrasenya"
						type="password"
						errors={errors.password}
						register={register}
					/>
				</Grid>
				<Grid item md={6} xs={12}>
					<CustomTextField
						name="password_confirm"
						label="Confirma contrasenya"
						type="password"
						errors={errors.password_confirm}
						register={register}
					/>
				</Grid>
			</Grid>

			<Typography variant="body1" style={{ color: "red" }}>
				{error}
			</Typography>

			<Box my={3}>
				<FormControlLabel
					control={
						<Checkbox
							onChange={(e) => {}}
							name="accepta"
							{...register("accepta")}
							required
						/>
					}
					label={
						<Typography>
							He llegit i accepto la{" "}
							<a
								href="/politica-privacitat"
								target="_blank"
								alt="Política de Privacitat"
								rel="noreferrer"
							>
								Política de Privacitat
							</a>{" "}
							i les{" "}
							<a
								href="/condicions-lloguer"
								target="_blank"
								alt="Política de Privacitat"
								rel="noreferrer"
							>
								Condicions lloguer
							</a>
						</Typography>
					}
				/>
			</Box>

			<Box my={2}>
				<CustomButton fullWidth type="submit" title="Crear jugador" />
			</Box>
		</form>
	);
};

export default RegisterJugador;
