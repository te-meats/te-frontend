import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@hooks/hooks"
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { fetchCustomers } from "@actions/customers";
import Header from "@components/Header";
import { Box } from "@mui/material";
import PrimaryModal from "@components/Modals/PrimaryModal";
import AddCustomer from "./Forms/AddCustomer";

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'first_name', headerName: 'First Name', width: 130 },
    { field: 'last_name', headerName: 'Last Name', width: 130 },
    { field: 'address', headerName: 'Address', width: 200 },
    { field: 'email', headerName: 'Email', width: 200 },
    { field: 'phone', headerName: 'Phone Number', width: 130 },
]

const Customers = () => {
    const dispatch = useAppDispatch();

    const customersLoading = useAppSelector(state => state.customers.pending);
    const customers = useAppSelector(state => state.customers.customers);

    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        dispatch(fetchCustomers());
    }, []);

    const addCustomerHandler = () => {
        // TODO: Implement functionality
        setModalOpen(true);
    };

    const onClose = () => {
        setModalOpen(false);
    }

    return (
        <>
            <Header
                title="Customers"
                actionTitle="Add new Customer"
                actions={addCustomerHandler}
            />
            <Box className="container-content">
                <DataGrid 
                    rows={customers}
                    columns={columns}
                    checkboxSelection
                    loading={customersLoading}
                    autoHeight={true}
                />
            </Box>
            <PrimaryModal
                title={"Add Customer"}
                modalOpened={modalOpen}
                onClose={onClose}
                onSubmit={() => {}}
                children={<AddCustomer />}
            />
        </>
    )
}

export default Customers;