import { Check } from "@mui/icons-material";
import { Step, Stepper } from "@mui/material";
import StepConnector, {
	stepConnectorClasses,
} from "@mui/material/StepConnector";
import { styled } from "@mui/styles";

const CustomConnector = styled(StepConnector)(({ theme }) => ({}));

const CustomStep = styled(Step)(({ theme }) => ({
	"& .MuiStepLabel-root": {
		backgroundColor: "grey",
		padding: 10,
		flexDirection: "row !important",
		alignItems: "center",
	},
}));

const QontoStepIconRoot = styled("div")(({ theme, ownerState }) => ({
	color: theme.palette.mode === "dark" ? theme.palette.grey[700] : "#eaeaf0",
	display: "flex",
	height: 22,
	alignItems: "center",
	...(ownerState.active && {
		color: "#784af4",
	}),
	"& .QontoStepIcon-completedIcon": {
		color: "#784af4",
		zIndex: 1,
		fontSize: 18,
	},
	"& .QontoStepIcon-circle": {
		width: 8,
		height: 8,
		borderRadius: "50%",
		backgroundColor: "currentColor",
	},
}));

function CustomIcon(props) {
	const { active, completed, className } = props;

	return (
		<QontoStepIconRoot ownerState={{ active }} className={className}>
			{completed ? (
				<Check className="QontoStepIcon-completedIcon" />
			) : (
				<div className="QontoStepIcon-circle" />
			)}
		</QontoStepIconRoot>
	);
}

export { CustomConnector, CustomIcon, CustomStep };
