/* eslint-disable react/prop-types */
import { Box, Typography } from "@mui/material";
import { tokens } from "../../../theme";
import { useTheme } from "@emotion/react";

const Profilebox = ({ size }) => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);

	return (
		<Box mb={"25px"}>
			<Box display="flex" justifyContent="center" alignItems="center">
				<img src="/assets/Chandru.jpg" alt="profile-image" height={size} width={size} style={{ borderRadius: "50%", cursor: "pointer" }} />
			</Box>
			<Box textAlign="center">
				<Typography variant="h3" color={colors.grey[100]} fontWeight="bold" mt="10px">
					Chandru
				</Typography>
				<Typography variant="h5" color={colors.greenAccent[400]}>
					Admin
				</Typography>
			</Box>
		</Box>
	);
};

export default Profilebox;
