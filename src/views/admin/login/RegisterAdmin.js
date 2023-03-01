import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import {
	Box,
	Checkbox,
	Divider,
	FormControlLabel,
	Grid,
	Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Registre, registreAdministrador } from "../../../API/API";
import CustomButton from "../../../components/elements/CustomButton";
import CustomTextField from "../../../components/elements/CustomTextField";

const useStyles = makeStyles((theme) => ({
	root: {
		background: theme.color.gradient,
		paddingTop: 150,
		paddingBottom: 200,
	},
	pill: {
		background: theme.color.background,
		padding: 50,
		borderRadius: 20,
		boxShadow: "20px 20px 48px #c27757,-20px -20px 48px #ffbb87",
	},
}));

const RegisterAdmin = () => {
	const [error, setError] = useState("");
	let navigate = useNavigate();

	const schema = Yup.object().shape({
		email: Yup.string()
			.email("Ha de ser un email vàlid")
			.max(255)
			.required("L'email és obligatòri"),
		password: Yup.string()
			.max(255)
			.required("La contrasenya és obligatòria"),
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		mode: "onTouched",
		resolver: yupResolver(schema),
	});

	const registre = async (values) => {
		const missatge = await registreAdministrador(values);
		console.log(values);
		if (missatge === "error") {
			setError("Usuari o contrasenya incorrectes");
		} else {
			navigate("/admin/");
		}
	};

	return (
		<form onSubmit={handleSubmit(registre)}>
			<Divider>
				<Typography>DADES USUARI</Typography>
			</Divider>
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

			<Box my={5} />
			<Divider>
				<Typography>DADES CLUB</Typography>
			</Divider>
			<Grid container spacing={2}>
				<Grid item md={6} xs={12}>
					<CustomTextField
						name="nom_club"
						label="Nom del club"
						type="text"
						errors={errors.nom_club}
						register={register}
					/>
				</Grid>
				<Grid item md={6} xs={12}>
					<CustomTextField
						name="pistes"
						label="Número de pistes"
						type="text"
						errors={errors.pistes}
						register={register}
					/>
				</Grid>
			</Grid>
			<Grid container spacing={2}>
				<Grid item md={6} xs={12}>
					<CustomTextField
						name="telefon_club"
						label="Telèfon"
						type="text"
						errors={errors.telefon_club}
						register={register}
					/>
				</Grid>
				<Grid item md={6} xs={12}>
					<CustomTextField
						name="email_club"
						label="E-mail club"
						type="text"
						errors={errors.email_club}
						register={register}
					/>
				</Grid>
			</Grid>
			<Box my={5} />
			<Divider>
				<Typography>DADES DE FACTURACIÓ</Typography>
			</Divider>
			<Grid container spacing={2}>
				<Grid item md={6} xs={12}>
					<CustomTextField
						name="rao"
						label="Raó social"
						type="text"
						errors={errors.rao}
						register={register}
					/>
				</Grid>
				<Grid item md={6} xs={12}>
					<CustomTextField
						name="nif"
						label="NIF"
						type="text"
						errors={errors.nif}
						register={register}
					/>
				</Grid>
			</Grid>
			<Grid container spacing={2}>
				<Grid item md={6} xs={12}>
					<CustomTextField
						name="pais"
						label="País"
						type="text"
						errors={errors.pais}
						register={register}
					/>
				</Grid>
				<Grid item md={6} xs={12}>
					<CustomTextField
						name="poblacio"
						label="Població"
						type="text"
						errors={errors.poblacio}
						register={register}
					/>
				</Grid>
			</Grid>
			<Grid container spacing={2}>
				<Grid item md={6} xs={12}>
					<CustomTextField
						name="codi_postal"
						label="Codi postal"
						type="text"
						errors={errors.codi_postal}
						register={register}
					/>
				</Grid>
				<Grid item md={6} xs={12}>
					<CustomTextField
						name="adreca"
						label="Adreça"
						type="text"
						errors={errors.adreca}
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
				<CustomButton
					fullWidth
					type="submit"
					title="Crear usuari i club"
				/>
			</Box>
		</form>
	);
};

export default RegisterAdmin;
