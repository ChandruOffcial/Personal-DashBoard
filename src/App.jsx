import { ThemeProvider, CssBaseline } from "@mui/material";
import { ColorContext, useMode } from "./theme";
import Topbar from "./features/global/Topbar";
import SidebarComponent from "./features/global/Sidebar";
import GaugeWithValue from "./components/Gauge";
import DataGridTable from "./components/DataTable";
import BarChart from "./components/Chart";

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
						<GaugeWithValue />
						<BarChart />
					</div>
				</div>
			</ThemeProvider>
		</ColorContext.Provider>
	);
}

export default App;
