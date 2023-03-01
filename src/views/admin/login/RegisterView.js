import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Container, Tab, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Page from "../../../components/layouts/Page";
import theme from "../../../theme";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import RegisterAdmin from "./RegisterAdmin";
import RegisterJugador from "./RegisterJugador";

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

const RegisterView = () => {
	const classes = useStyles();
	let navigate = useNavigate();
	const [value, setValue] = React.useState("1");

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<Page title={"Login"}>
			<Box
				display="flex"
				flexDirection="column"
				justifyContent="center"
				className={classes.root}
			>
				<Container maxWidth="md">
					<Box className={classes.pill}>
						<Box sx={{ width: "100%", typography: "body1" }}>
							<Box mb={3}>
								<Typography color="textPrimary" variant="h2">
									{"Crear compte"}
								</Typography>
							</Box>
							<TabContext value={value}>
								<Box
									sx={{
										// borderBottom: 1,
										borderColor: "divider",
									}}
								>
									<TabList
										onChange={handleChange}
										aria-label="alta select"
										centered
									>
										<Tab label="Alta Jugador" value="1" />
										<Tab
											label="Alta Administrador"
											value="2"
										/>
									</TabList>
								</Box>
								<TabPanel
									value="1"
									sx={{ padding: 0, paddingTop: 3 }}
								>
									<RegisterJugador />
								</TabPanel>
								<TabPanel
									value="2"
									sx={{ padding: 0, paddingTop: 3 }}
								>
									<RegisterAdmin />
								</TabPanel>
							</TabContext>
						</Box>
						<Typography>
							Ja tens un compte?{" "}
							<span
								style={{
									color: theme.color.primary,
									cursor: "pointer",
								}}
								onClick={() => navigate("/login")}
							>
								Inicia sessió
							</span>
						</Typography>
					</Box>
				</Container>
			</Box>
		</Page>
	);
};

export default RegisterView;
