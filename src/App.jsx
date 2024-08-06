import { ThemeProvider, CssBaseline } from "@mui/material";
import { ColorContext, useMode } from "./theme";
import Topbar from "./features/global/Topbar";
import SidebarComponent from "./features/global/Sidebar";
import DataGridTable from "./components/DataGrid";

function App() {
	const [colorMode, theme] = useMode();
	return (
		<ColorContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>
				{/* Reset The Css */}
				<CssBaseline />
				<div className="app">
					<SidebarComponent />
					<div className="content">
						<Topbar />

						<DataGridTable />
					</div>
				</div>
			</ThemeProvider>
		</ColorContext.Provider>
	);
}

export default App;
