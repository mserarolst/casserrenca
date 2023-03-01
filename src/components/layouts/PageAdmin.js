import React, { forwardRef, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";
import { Avatar, Fade } from "@mui/material";
import theme from "../../theme";
import Title from "./Title";
import { Box } from "@mui/system";
import { EmojiEvents } from "@mui/icons-material";
import MenuTorneig from "../../views/admin/torneig/MenuTorneig";

const PageAdmin = forwardRef(
	(
		{
			children,
			title = "",
			button,
			icon,
			noMargin,
			element,
			torneig,
			...rest
		},
		ref
	) => {
		const [appear, setApperar] = useState(false);
		useEffect(() => {
			window.scrollTo(0, 0);
			setTimeout(() => {
				setApperar(true);
			}, 300);
		}, []);

		return (
			<div
				ref={ref}
				{...rest}
				style={{
					position: "relative",
				}}
			>
				<Helmet>
					<title>Match Maker - {title}</title>
				</Helmet>

				<Fade in={appear} timeout={400}>
					<div
						style={{
							overflow: "hidden",
							backgroundColor: theme.color.background_dark,
						}}
					>
						<Title button={button} icon={icon}>
							{torneig ? (
								<TorneigTitol torneig={torneig} title={title} />
							) : (
								title
							)}
						</Title>
						<Box
							m={noMargin ? 0 : 3}
							mt={noMargin ? 0 : 13}
							zIndex={0}
						>
							{torneig && <MenuTorneig torneig={torneig} />}
							{children}
						</Box>
					</div>
				</Fade>
			</div>
		);
	}
);

function TorneigTitol({ torneig, title }) {
	return (
		<Box display="flex">
			<Box mr={2}>
				{torneig?.cartell ? (
					<Avatar
						src={
							"http://127.0.0.1:8000/storage/" + torneig?.cartell
						}
						sx={{
							width: 40,
							height: 40,
							border: "2px solid white",
						}}
					/>
				) : (
					<EmojiEvents
						fontSize="inherit"
						sx={{ fontSize: 40 }}
						color="secondary"
					/>
				)}
			</Box>
			{torneig?.nom} - {title}
		</Box>
	);
}

PageAdmin.propTypes = {
	children: PropTypes.node.isRequired,
	title: PropTypes.string,
	button: PropTypes.object,
};

export default PageAdmin;
