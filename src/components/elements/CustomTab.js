import * as React from "react";
import { styled } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { TabList } from "@mui/lab";
import theme from "../../theme";

const CustomTabs = styled((props) => (
	<TabList
		{...props}
		TabIndicatorProps={{
			children: <span className="MuiTabs-indicatorSpan" />,
		}}
	/>
))({
	"& .MuiTabs-indicator": {
		display: "flex",
		justifyContent: "center",
		backgroundColor: "transparent",
		height: "100%",
		zIndex: 0,
	},
	"& .MuiTabs-indicatorSpan": {
		width: "100%",
		height: "100%",
		backgroundColor: theme.color.primary,
		borderRadius: 5,
	},
});

const CustomTab = styled((props) => <Tab disableRipple {...props} />)(
	({ theme }) => ({
		textTransform: "none",
		fontWeight: theme.typography.fontWeightRegular,
		fontSize: theme.typography.pxToRem(15),
		marginRight: theme.spacing(1),
		color: "rgba(255, 255, 255, 0.7)",
		zIndex: 100,
		"& .MuiTypography-root": {
			transition: "0.4s",
		},
		"&.Mui-selected": {
			"& .MuiTypography-root": {
				color: "#fff",
			},
		},
		"&.Mui-focusVisible": {
			backgroundColor: theme.color.primary,
		},
	})
);

export { CustomTab, CustomTabs };
