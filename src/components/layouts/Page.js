import React, { forwardRef, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";
import { Fade } from "@mui/material";
import theme from "../../theme";

const Page = forwardRef(({ children, title = "", ...rest }, ref) => {
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
				backgroundColor: theme.color.background_dark,
				paddingTop: 104
			}}
		>
			<Helmet>
				<title>{title}</title>
			</Helmet>
			<Fade in={appear} timeout={400}>
				<div
					style={{
						overflow: "hidden",
						backgroundColor: theme.color.background_dark,
					}}
				>
					{children}
				</div>
			</Fade>
		</div>
	);
});

Page.propTypes = {
	children: PropTypes.node.isRequired,
	title: PropTypes.string,
};

export default Page;
