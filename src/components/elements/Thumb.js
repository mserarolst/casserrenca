import { Avatar } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useEffect, useState } from "react";

const useStyles = makeStyles((theme) => ({
	image: {
		width: "100%",
	},
}));

const Thumb = (props) => {
	const [loading, setLoading] = useState(false);
	const [thumb, setThumb] = useState();
	const classes = useStyles();

	useEffect(() => {
		// console.log(props?.file.length);
		if (props?.file?.[0]?.name) {
			let reader = new FileReader();

			reader.onloadend = () => {
				setThumb(reader.result);
			};
			reader?.readAsDataURL(props.file?.[0]);
		} else {
			setThumb("http://localhost:8000/storage/" + props.file);
		}
	}, [props?.file]);

	return (
		<Avatar
			variant={props.small ? "circular" : "rounded"}
			src={thumb}
			alt={props?.file?.name}
			sx={
				props.small
					? {
							width: 125,
							height: 125,
					  }
					: {
							width: "100%",
							height: 400,
					  }
			}
		/>
	);
};

export default Thumb;
