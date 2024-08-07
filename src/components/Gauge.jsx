import { Box, Typography } from "@mui/material";
import { Gauge, gaugeClasses } from "@mui/x-charts/Gauge";

export default function GaugeWithValue() {
	const settings = {
		width: 100,
		height: 100,
		value: 70,
	};

	return (
		<Box position="relative" width={100} height={100}>
			<Gauge
				{...settings}
				cornerRadius="50%"
				sx={(theme) => ({
					[`& .${gaugeClasses.valueText}`]: {
						fontSize: 0,
					},
					[`& .${gaugeClasses.valueArc}`]: {
						fill: "#52b202",
					},
					[`& .${gaugeClasses.referenceArc}`]: {
						fill: theme.palette.text.disabled,
					},
				})}
			/>
			<Box position="absolute" sx={{ inset: 1, display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
				<Typography
					sx={{
						fontSize: {
							xs: "12px",
							sm: "14px",
						},
					}}
				>
					70%
				</Typography>
				<Typography
					sx={{
						width: "50%",
						textAlign: "center",
						fontSize: {
							xs: "8px",
						},
					}}
				>
					Goal Completed
				</Typography>
			</Box>
		</Box>
	);
}
