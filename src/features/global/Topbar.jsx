import { Box, IconButton, InputBase, useTheme } from "@mui/material";
import { tokens, ColorContext } from "../../theme";
import { useContext } from "react";

import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import SearchdIcon from "@mui/icons-material/Search";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import MobileSidebar from "./MobileSidebar";

const Topbar = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	const colorMode = useContext(ColorContext);

	return (
		<Box display="flex" justifyContent="space-between" p={2}>
			{/* Search bar */}
			<Box
				display="flex"
				bgcolor={colors.primary[400]}
				borderRadius="3px"
				sx={{
					display: {
						xs: "none",
						sm: "flex",
					},
				}}
			>
				<IconButton type="button" sx={{ p: 1 }}>
					<SearchdIcon />
				</IconButton>
				<InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search" />
			</Box>

			{/* For Mobile  */}

			<MobileSidebar />

			<Box display={"flex"}>
				<IconButton onClick={colorMode.toggleColorMode}>
					{theme.palette.mode === "light" ? <DarkModeOutlinedIcon /> : <LightModeOutlinedIcon />}
				</IconButton>
				<IconButton>
					<EmailOutlinedIcon />
				</IconButton>
				<IconButton>
					<SettingsOutlinedIcon />
				</IconButton>
				<IconButton>
					<NotificationsNoneOutlinedIcon />
				</IconButton>
				<IconButton>
					<AccountCircleOutlinedIcon />
				</IconButton>
			</Box>
		</Box>
	);
};

export default Topbar;
