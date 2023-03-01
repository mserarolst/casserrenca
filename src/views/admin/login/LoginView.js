import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Login } from "../../../API/API";
import Page from "../../../components/layouts/Page";
import CustomButton from "../../../components/elements/CustomButton";
import theme from "../../../theme";

const useStyles = makeStyles((theme) => ({
	root: {
		background: theme.color.gradient,
		height: "100vh",
		paddingBottom: theme.spacing(3),
		paddingTop: theme.spacing(3),
	},
	pill: {
		background: theme.color.background,
		padding: 50,
		borderRadius: 20,
		boxShadow: "20px 20px 48px #c27757,-20px -20px 48px #ffbb87",
	},
}));

const LoginView = () => {
	const classes = useStyles();
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

	const logInEmail = async (values) => {
		const { email, password } = values;
		const token = await Login(email, password);
		if (token === "error") {
			setError("Usuari o contrasenya incorrectes");
		} else {
			navigate("/admin/");
		}
	};

	return (
		<Page title={"Login"}>
			{/* <Header img={img} small /> */}
			<Box
				display="flex"
				flexDirection="column"
				justifyContent="center"
				className={classes.root}
			>
				<Container maxWidth="sm">
					<Box className={classes.pill}>
						<form onSubmit={handleSubmit(logInEmail)}>
							<Box mb={3}>
								<Typography color="textPrimary" variant="h2">
									{"Entrar"}
								</Typography>
								<Typography variant="body1">
									{"Entra a la pàgina d'administració"}
								</Typography>
							</Box>
							<TextField
								error={Boolean(errors && errors.email)}
								fullWidth
								helperText={errors && errors?.email?.message}
								label="E-mail"
								margin="normal"
								name="email"
								type="email"
								variant="outlined"
								{...register("email")}
							/>
							<TextField
								error={Boolean(errors && errors.password)}
								fullWidth
								helperText={errors && errors?.password?.message}
								label={"Contrasenya"}
								margin="normal"
								name="password"
								type="password"
								variant="outlined"
								{...register("password")}
							/>
							<Typography
								variant="body1"
								style={{ color: "red" }}
							>
								{error}
							</Typography>

							<Box my={2}>
								<CustomButton
									fullWidth
									type="submit"
									title="Entrar"
								/>
							</Box>
						</form>
						<Typography>
							No tens compte?{" "}
							<span
								style={{
									color: theme.color.primary,
									cursor: "pointer",
								}}
								onClick={() => navigate("/registre")}
							>
								Dona't d'alta
							</span>
						</Typography>
					</Box>
				</Container>
			</Box>
		</Page>
	);
};

export default LoginView;
