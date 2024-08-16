import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@hooks/hooks"
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { fetchCustomers } from "@actions/customers";
import Header from "@components/Header";

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

    useEffect(() => {
        dispatch(fetchCustomers());
    }, [])

    return (
        <>
            <Header
                title="Customers"
            />
            <DataGrid 
                rows={customers}
                columns={columns}
                checkboxSelection
                loading={customersLoading}
                autoHeight={true}
            />
        </>
    )
}

export default Customers;