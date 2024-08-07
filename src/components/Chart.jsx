import { ResponsiveBar } from "@nivo/bar";
import { tokens } from "../theme";
import { useTheme } from "@emotion/react";

const data = [
	{
		country: "AD",
		"hot dog": 127,
		"hot dogColor": "hsl(24, 70%, 50%)",
	},
	{
		country: "AE",
		"hot dog": 100,
		"hot dogColor": "hsl(9, 70%, 50%)",
	},
	{
		country: "AF",
		"hot dog": 174,
		"hot dogColor": "hsl(197, 70%, 50%)",
	},
	{
		country: "AG",
		"hot dog": 131,
		"hot dogColor": "hsl(293, 70%, 50%)",
	},
	{
		country: "AI",
		"hot dog": 100,
		"hot dogColor": "hsl(285, 70%, 50%)",
	},
	{
		country: "AL",
		"hot dog": 150,
		"hot dogColor": "hsl(22, 70%, 50%)",
	},
	{
		country: "AM",
		"hot dog": 127,
		"hot dogColor": "hsl(219, 70%, 50%)",
	},
];

const BarChart = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	return (
		<ResponsiveBar
			data={data}
			theme={{
				// added
				axis: {
					domain: {
						line: {
							stroke: colors.grey[100],
						},
					},
					legend: {
						text: {
							fill: colors.grey[100],
						},
					},
					ticks: {
						line: {
							stroke: colors.grey[100],
							strokeWidth: 1,
						},
						text: {
							fill: colors.grey[100],
						},
					},
				},
			}}
			keys={["hot dog"]}
			indexBy="country"
			margin={{ top: 50, right: 50, bottom: 50, left: 60 }}
			padding={0.3}
			colors={{ scheme: "dark2" }}
			borderRadius={10}
			borderColor={{
				from: "color",
				modifiers: [["darker", 1.6]],
			}}
			axisTop={null}
			axisRight={null}
			axisLeft={{
				tickSize: 5,
				tickPadding: 5,
				tickRotation: 0,
				truncateTickAt: 0,
			}}
			labelSkipWidth={12}
			labelSkipHeight={12}
			labelTextColor={{
				from: "color",
				modifiers: [["darker", 1.6]],
			}}
			isInteractive={false}
		/>
	);
};

export default BarChart;
