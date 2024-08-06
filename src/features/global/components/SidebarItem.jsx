/* eslint-disable react/prop-types */
import { useState } from "react";
import { useTheme } from "@emotion/react";
import { tokens } from "../../../theme";
import { MenuItem } from "react-pro-sidebar";
import { List, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";
import AssessmentIcon from "@mui/icons-material/Assessment";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

const SidebarItem = ({ type = "" }) => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	const [selected, setSelected] = useState("Dasboard");

	function Item({ icon, selected, setSelected, title, to }) {
		return (
			<MenuItem active={title === selected} onClick={() => setSelected(title)} color={{ colors: colors.grey[400] }} icon={icon} to={to}>
				<Typography>{title}</Typography>
			</MenuItem>
		);
	}

	if (type && type === "mobile") {
		return (
			<List>
				{["All mail", "Trash", "Spam"].map((text) => (
					<ListItem key={text} disablePadding>
						<ListItemButton>
							<ListItemText primary={text} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
		);
	}

	return (
		<>
			<Item title={"DashBoard"} selected={selected} setSelected={setSelected} to={"/dashBoard"} icon={<HomeIcon />} />
			<Item title={"Statistics"} selected={selected} setSelected={setSelected} to={"/statistics"} icon={<AssessmentIcon />} />
			<Item title={"Checklist"} selected={selected} setSelected={setSelected} to={"/checklist"} icon={<ContentPasteIcon />} />
			<Item title={"Documents"} selected={selected} setSelected={setSelected} to={"/documents"} icon={<AccountBalanceWalletIcon />} />
			<Item title={"Shopping"} selected={selected} setSelected={setSelected} to={"/shopping"} icon={<ShoppingBagIcon />} />
		</>
	);
};

export default SidebarItem;
