import { Box, Button, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

const DataGridTable = () => {
	const customers = [
		{
			id: 0,
			customerImage: "https://randomuser.me/api/portraits/men/1.jpg",
			name: "John Doe",
			orderId: 75478,
			amount: 560,
			status: "delivered",
		},
		{
			id: 1,
			customerImage: "https://randomuser.me/api/portraits/women/2.jpg",
			name: "Jane Smith",
			orderId: 75479,
			amount: 120,
			status: "pending",
		},
		{
			id: 2,
			customerImage: "https://randomuser.me/api/portraits/women/3.jpg",
			name: "Alice Johnson",
			orderId: 75480,
			amount: 250,
			status: "delivered",
		},
		{
			id: 3,
			customerImage: "https://randomuser.me/api/portraits/men/4.jpg",
			name: "Bob Brown",
			orderId: 75481,
			amount: 320,
			status: "cancelled",
		},
		{
			id: 4,
			customerImage: "https://randomuser.me/api/portraits/women/5.jpg",
			name: "Carol White",
			orderId: 75482,
			amount: 450,
			status: "shipped",
		},
		{
			id: 5,
			customerImage: "https://randomuser.me/api/portraits/men/6.jpg",
			name: "David Green",
			orderId: 75483,
			amount: 600,
			status: "delivered",
		},
		{
			id: 6,
			customerImage: "https://randomuser.me/api/portraits/women/7.jpg",
			name: "Eve Black",
			orderId: 75484,
			amount: 75,
			status: "processing",
		},
		{
			id: 7,
			customerImage: "https://randomuser.me/api/portraits/men/8.jpg",
			name: "Frank Blue",
			orderId: 75485,
			amount: 180,
			status: "delivered",
		},
		{
			id: 8,
			customerImage: "https://randomuser.me/api/portraits/women/9.jpg",
			name: "Grace Red",
			orderId: 75486,
			amount: 90,
			status: "shipped",
		},
		{
			id: 9,
			customerImage: "https://randomuser.me/api/portraits/men/10.jpg",
			name: "Hank Yellow",
			orderId: 75487,
			amount: 220,
			status: "delivered",
		},
	];
	// Render Image
	const renderImage = ({ row }) => {
		const { customerImage, name } = row;
		return (
			<Box display={"flex"} alignItems={"center"} justifyContent={"flex-start"} columnGap={"10px"} height={"100%"}>
				<img src={customerImage} alt={name} height={30} width={30} style={{ borderRadius: "50%" }} />
				<Typography>{name}</Typography>
			</Box>
		);
	};
	// Set Status
	const setStatus = ({ row }) => {
		const { status } = row;

		const getStatusColor = (status) => {
			switch (status) {
				case "delivered":
					return "green";
				case "pending":
					return "orange";
				case "cancelled":
					return "red";
				case "shipped":
					return "blue";
				case "processing":
					return "purple";
				default:
					return "grey";
			}
		};

		return <Button style={{ backgroundColor: getStatusColor(status), borderRadius: "30px", color: "white", minWidth: "6rem" }}>{status}</Button>;
	};

	const columsDetails = [
		{
			field: "customerImage",
			headerName: "Customer",
			renderCell: renderImage,
			filterable: false,
			flex: 2,
		},
		{
			field: "orderId",
			headerName: "Order No.",
			filterable: false,
			flex: 1,
		},
		{
			field: "amount",
			headerName: "Amount",
			filterable: false,
			flex: 1,
		},
		{
			field: "status",
			headerName: "Status",
			renderCell: setStatus,
			filterable: false,
			flex: 1,
			align: "center",
			headerAlign: "center",
		},
	];

	return (
		<Box>
			<DataGrid rows={customers} columns={columsDetails} disableColumnSorting disableColumnMenu disableColumnFilter disableAutosize hideFooter />
		</Box>
	);
};

export default DataGridTable;
