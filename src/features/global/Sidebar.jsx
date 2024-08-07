/* eslint-disable react/prop-types */
import { useState } from "react";
import { Box, IconButton, Typography, useTheme } from "@mui/material";

import { tokens } from "../../theme";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";

import Profilebox from "./components/Profilebox";
import SidebarItem from "./components/SidebarItem";

import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";

const SidebarComponent = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	const [collapsed, setCollapsed] = useState(false);

	return (
		<Box
			sx={{
				display: {
					xs: "none",
					sm: "flex",
				},
			}}
			bgcolor={colors.primary[400]}
		>
			<Sidebar
				collapsed={collapsed}
				rootStyles={{
					[`.ps-sidebar-container`]: {
						backgroundColor: colors.primary[400],
					},
					[`.ps-menuitem-root:hover`]: {
						backgroundColor: "red",
					},
					minWidth: "unset",

					border: "none",
				}}
			>
				<Menu
					menuItemStyles={"square"}
					rootStyles={{
						[`.ps-menu-button:hover`]: {
							backgroundColor: colors.primary[700],
							color: colors.grey[100],
						},
						[`.ps-active`]: {
							backgroundColor: colors.primary[700],
							color: colors.grey[100],
						},
					}}
				>
					{/* Profile Details */}
					<MenuItem
						onClick={() => setCollapsed(!collapsed)}
						icon={collapsed ? <SpaceDashboardIcon /> : undefined}
						style={{ margin: "10px 0 20px 0", color: colors.grey[100] }}
					>
						{!collapsed && (
							<Box display="flex" justifyContent="space-between" alignItems="center" ml="15px">
								<Typography variant="h3" color={colors.grey[100]}>
									ADMINS
								</Typography>
								<IconButton onClick={() => setCollapsed(!collapsed)}>
									<SpaceDashboardIcon />
								</IconButton>
							</Box>
						)}
					</MenuItem>

					{!collapsed && <Profilebox size={60} />}

					{/* Menu Item */}
					<SidebarItem />
				</Menu>
			</Sidebar>
		</Box>
	);
};

export default SidebarComponent;
