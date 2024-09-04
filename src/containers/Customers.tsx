import { useCallback, useEffect, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "@hooks/hooks"
import { createCustomer, deleteCustomer, fetchCustomers, updateCustomer } from "@actions/customers";
import Header from "@components/Header";
import { Box, Button, DialogActions, DialogContent, DialogTitle, IconButton, Tooltip } from "@mui/material";
import { MaterialReactTable, MRT_ColumnDef, MRT_EditActionButtons, MRT_EditCellTextField, MRT_Row, MRT_TableOptions, useMaterialReactTable } from "material-react-table";
import { Customer } from "src/interfaces";
import { Delete, Edit } from "@mui/icons-material";

const Customers = () => {
    const dispatch = useAppDispatch();

    const customersLoading = useAppSelector(state => state.customers.pending);
    const customers = useAppSelector(state => state.customers.customers);

    useEffect(() => {
        dispatch(fetchCustomers());
    }, []);

    const handleCreateCustomer: MRT_TableOptions<Customer>['onCreatingRowSave'] = ({ values, table }) => {
        dispatch(createCustomer(values));
        table.setCreatingRow(null);
    };

    const handleEditCustomer: MRT_TableOptions<Customer>['onEditingRowSave'] = ({ values, table }) => {
        dispatch(updateCustomer(values))
        table.setEditingRow(null);
    };

    const handleDeleteCustomer = (row: MRT_Row<Customer>) => {
        dispatch(deleteCustomer(row));
    }  

    const columns = useMemo<MRT_ColumnDef<Customer>[]>(() => [
        {
            accessorKey: 'id',
            header: 'Id',
            enableEditing: false,
            visibleInShowHideMenu: false,
        },
        {
            accessorKey: 'first_name',
            header: 'First Name',
            enableHiding: false,
        },
        {
            accessorKey: 'last_name',
            header: 'Last Name',
            enableHiding: false,
        },
        {
            accessorKey: 'address',
            header: 'Address',
            enableHiding: false,
        },
        {
            accessorKey: 'email',
            header: 'Email',
            enableHiding: false,
        },
        {
            accessorKey: 'phone',
            header: 'Phone Number',
            enableHiding: false,
        },
    ], [])

    const table = useMaterialReactTable({
        columns,
        data: customers,
        enableGlobalFilter: true,
        createDisplayMode: 'modal',
        editDisplayMode: 'modal',
        enableRowActions: true,
        positionActionsColumn: 'last',
        onCreatingRowSave: handleCreateCustomer,
        onEditingRowSave: handleEditCustomer,
        getRowId: (row) => row.id,
        renderRowActions: ({ row, table }) => (
            <Box sx={{ display: 'flex', gap: '1rem' }}>
                <Tooltip title="Edit">
                    <IconButton onClick={() => table.setEditingRow(row)}>
                        <Edit />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Delete">
                    <IconButton onClick={() => handleDeleteCustomer(row)}>
                        <Delete />
                    </IconButton>
                </Tooltip>
            </Box> 
        ),
        renderCreateRowDialogContent: ({ table, row, internalEditComponents }) => (
            <>
                <DialogTitle variant="h3">Create New Customer</DialogTitle>
                <DialogContent
                    sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
                >
                    {internalEditComponents}
                </DialogContent>
                <DialogActions>
                    <MRT_EditActionButtons variant="text" table={table} row={row} />
                </DialogActions>
            </>
        ),
        renderEditRowDialogContent: ({ table, row }) => {
            return (
            <>
                <DialogTitle variant="h3">Edit Customer</DialogTitle>
                <DialogContent
                    sx={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
                >
                    {
                        row.getAllCells()
                        .filter((cell) => cell.column.id !== 'password')
                        .map((cell) => (
                            <MRT_EditCellTextField 
                                cell={cell}
                                key={cell.id}
                                table={table}
                            />
                        ))
                    }
                </DialogContent>
                <DialogActions>
                    <MRT_EditActionButtons variant="text" table={table} row={row} />
                </DialogActions>
            </>
        )},
        renderTopToolbarCustomActions: ({ table }) => (
            <Button
                variant="contained"
                onClick={() => {
                    table.setCreatingRow(true);
                }}
            >
                Create New Customer
            </Button>
        ),
        state: {
            columnVisibility: { id: false, password: false } ,
            isLoading: customersLoading,
        }
    });

    const CustomerList = useCallback(() => {
        return (
            <Box className="container-content">
                <MaterialReactTable 
                    table={table}
                />
            </Box>
        )
    }, [customers, customersLoading]);

    return (
        <>
            <Header
                title="Customers"
            />
            <CustomerList />
        </>
    )
}

export default Customers;