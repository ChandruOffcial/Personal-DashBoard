import { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";

import DashboardIcon from "@mui/icons-material/Dashboard";
import HomeIcon from "@mui/icons-material/Home";
import AssessmentIcon from "@mui/icons-material/Assessment";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import Profilebox from "./components/Profilebox";

export default function MobileSidebar() {
	const [open, setOpen] = useState(false);

	const toggleDrawer = (newOpen) => () => {
		setOpen(newOpen);
	};

	const DrawerList = (
		<Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)} mt={"3rem"}>
			{/* Profile Box */}
			<Profilebox size={50} />

			{/* Links */}
			<List>
				{[
					{ text: "DashBoard", icon: <HomeIcon />, path: "/dashBoard" },
					{ text: "Statistics", icon: <AssessmentIcon />, path: "/statistics" },
					{ text: "Checklist", icon: <ContentPasteIcon />, path: "/checklist" },
					{ text: "Documents", icon: <AccountBalanceWalletIcon />, path: "/documents" },
					{ text: "Shopping", icon: <ShoppingBagIcon />, path: "/shopping" },
				].map(({ text, icon, path }) => (
					<ListItem key={text}>
						<ListItemButton component={Link} to={path}>
							<ListItemIcon>{icon}</ListItemIcon>
							<ListItemText primary={text} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Box>
	);

	return (
		<Box
			sx={{
				display: {
					sm: "none",
				},
			}}
		>
			<IconButton type="button" onClick={toggleDrawer(true)}>
				<DashboardIcon />
			</IconButton>
			<Drawer open={open} onClose={toggleDrawer(false)}>
				{DrawerList}
			</Drawer>
		</Box>
	);
}
