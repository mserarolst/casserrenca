import React, { useEffect, useState } from "react";
import { useRoutes } from "react-router-dom";
import routes from "./routes";
import theme from "./theme";
import { SnackbarProvider } from "notistack";
import { ThemeProvider } from "@mui/material/styles";
import { Grow, IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";
// import { getUser } from "./API/API";
import Loading from "./components/layouts/Loading";

function App() {
	const notistackRef = React.createRef();
	const onClickDismiss = (key) => () => {
		notistackRef.current.closeSnackbar(key);
	};
	const [logged, setLogged] = useState(true);
    const [isMobile, setIsMobile] = useState(getIsMobile());
	const [loading, setLoading] = useState(false);
	const [hideMenu, setHideMenu] = useState(false);
	const routing = useRoutes(routes(logged, isMobile, hideMenu, setHideMenu));

	function getIsMobile() {
        return window.innerWidth < 1024;
    }

	useEffect(() => {
		// const get = async () => {
		// 	const userExist = localStorage.getItem("user");
		// 	if (userExist) {
		// 		const { message } = await getUser();
		// 		if (message === 200) {
		// 			setLogged(true);
		// 			setLoading(false);
		// 		} else {
		// 			setLogged(false);
		// 			setLoading(false);
		// 		}
		// 	} else {
		// 		setLogged(false);
		// 		setLoading(false);
		// 	}
		// };
		// get();
	}, [routing]);

	return (
		<ThemeProvider theme={theme}>
			<SnackbarProvider
				maxSnack={3}
				anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
				TransitionComponent={Grow}
				ref={notistackRef}
				action={(key) => (
					<IconButton onClick={onClickDismiss(key)}>
						<Close style={{ color: "white" }} />
					</IconButton>
				)}
			>
				<Loading loading={loading}>{routing}</Loading>
			</SnackbarProvider>
		</ThemeProvider>
	);
}

export default App;
