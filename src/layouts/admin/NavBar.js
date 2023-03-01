import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link as RouterLink } from "react-router-dom";
import NavBarItem from "./NavBarItem";
import { Box, Divider, Drawer, Hidden, List } from "@mui/material";
import { makeStyles } from "@mui/styles";
import {
	Person,
	Ballot,
	EmojiEvents,
	Groups,
	Shield,
} from "@mui/icons-material";
import { ReactComponent as Icon } from "../../assets/logo.svg";
import theme from "../../theme";
import { getElement } from "../../API/API";

const useStyles = makeStyles((theme) => ({
	mobileDrawer: {
		width: 256,
	},
	desktopDrawer: {
		width: 256,
		height: "calc(100%)",
	},
	menu: {
		background: theme.color.gradient_ver,
		textAlign: "center",
	},
	logo: {
		fill: theme.color.primary,
	},
}));

const NavBar = ({ onMobileClose, openMobile }) => {
	const classes = useStyles();
	const user = JSON.parse(localStorage.getItem("user")) || "";
	const [torneig, setTorneig] = useState();

	useEffect(() => {
		const getTorneig = async () => {
			const { result } = await getElement("torneig", 1);
			setTorneig(result);
		};
		getTorneig();
	}, []);

	const items = [
		{
			href: "/admin/tornejos",
			icon: EmojiEvents,
			title: "Tots els tornejos",
		},

		{},
		{
			href: "/admin/club",
			icon: Shield,
			title: "Club",
		},
		{
			href: "/admin/perfil",
			icon: Person,
			title: "Perfil",
		},
		{
			href: "/admin/pistes",
			icon: Ballot,
			title: "Pistes",
		},
		{
			href: "/admin/users",
			icon: Groups,
			title: "Usuaris",
		},
	];

	const content = (
		<Box
			height="100%"
			display="flex"
			flexDirection="column"
			className={classes.menu}
		>
			<Box pt={1}>
				<RouterLink to="/">
					<Icon
						alt="Logo Match Maker"
						className={classes.logo}
						width={80}
					/>
				</RouterLink>

				<Divider
					style={{
						margin: 8,
						borderColor: "transparent",
					}}
				/>
				{/* <TorneigNavBar torneig={torneig} onClose={onMobileClose} /> */}
				<List>
					{items?.map((item) =>
						item.href ? (
							<NavBarItem
								href={item.href}
								key={item.title}
								title={item.title}
								icon={item.icon}
								onClose={onMobileClose}
							/>
						) : (
							<Divider
								style={{
									margin: 17,
									borderColor:
										theme.palette.background.color + "40",
								}}
							/>
						)
					)}
				</List>
			</Box>
			<Box flexGrow={1} />
		</Box>
	);

	return (
		<div>
			<Hidden lgUp>
				<Drawer
					anchor="left"
					classes={{ paper: classes.mobileDrawer }}
					onClose={onMobileClose}
					open={openMobile}
					variant="temporary"
				>
					{content}
				</Drawer>
			</Hidden>
			<Hidden mdDown>
				<Drawer
					anchor="left"
					classes={{ paper: classes.desktopDrawer }}
					open
					variant="persistent"
				>
					{content}
				</Drawer>
			</Hidden>
		</div>
	);
};

NavBar.propTypes = {
	onMobileClose: PropTypes.func,
	openMobile: PropTypes.bool,
};

NavBar.defaultProps = {
	onMobileClose: () => {},
	openMobile: false,
};

export default NavBar;
