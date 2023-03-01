import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
// import { ReactComponent as Icon } from "../../assets/img/logo_inv.svg";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Container } from "@mui/system";
import PinatellIcon from "../../components/elements/PinatellIcon";
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { useNavigate } from 'react-router';

const Footer = (props) => {
    let navigate = useNavigate();
	const classes = useStyles();

	return (
		<Box className={classes.root}>
			<Container>
				<Grid container spacing={3} className={classes.main}>
					<Grid item xs={12} md={2}>
						<Typography variant="footer" className="Footer-text">
							Gràcies per fer possible La Casserrenca!
						</Typography>
					</Grid>
					<Grid item xs={12} md={2}>
						<Typography variant='body1' color='#fff'>Organitza</Typography>
						<Typography variant='body1' color='#fff'>Lorem</Typography>
						<Typography variant='body1' color='#fff'>ipsum</Typography>
						<Typography variant='body1' color='#fff'>dolor si amet</Typography>
						<Typography variant='body1' color='#fff'>consectetur</Typography>
						<Typography variant='body1' color='#fff'>adipiscing</Typography>
					</Grid>
					<Grid item xs={12} md={2}>
						<Typography variant='body1' color='#fff'>Col·labora</Typography>
						<Typography variant='body1' color='#fff'>Lorem</Typography>
						<Typography variant='body1' color='#fff'>ipsum</Typography>
						<Typography variant='body1' color='#fff'>dolor si amet</Typography>
						<Typography variant='body1' color='#fff'>consectetur</Typography>
						<Typography variant='body1' color='#fff'>adipiscing</Typography>
					</Grid>
					<Grid item xs={12} md={6}>
						<Typography variant='h5' color='#fff'>Tens dubtes? Llegeix el reglament!</Typography>
						<Typography variant='h5' color='#fff'>Sinó, ens pots contactar:</Typography>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default Footer;

const useStyles = makeStyles((theme) => ({
	root: {
		backgroundColor: '#152525',
		borderTop: '1px solid white'
	},
	main: {
		paddingTop: 50,
		paddingBottom: 50,
	},
	header: {
		textAlign: "center",
	},
	logo: {
		fill: 'white',
	},
	icon: {
		width: 60,
		height: 60,
		border: "1px solid " + theme.color.background,
		borderRadius: 50,
		padding: 10,
		color: theme.color.background,
	},
	iconSVG: {
		width: 25,
		height: 25,
		border: "1px solid " + theme.color.background,
		borderRadius: 50,
		padding: 10,
		fill: theme.color.background,
		fontSize: 20,
	},
	iconWrap: {
		"&.MuiButtonBase-root": {
			borderRadius: 50,
		},
	},
}));
