import { createUser, deleteUser, fetchUsers, updateUser } from "@actions/users";
import Header from "@components/Header";
import { useAppDispatch, useAppSelector } from "@hooks/hooks";
import { Box, Button, DialogActions, DialogContent, DialogTitle, IconButton, Tooltip } from "@mui/material";
import { useCallback, useEffect, useMemo } from "react";
import { UserState } from "src/interfaces";
import { MaterialReactTable, MRT_EditActionButtons, MRT_EditCellTextField, MRT_Row, MRT_TableOptions, useMaterialReactTable, type MRT_ColumnDef } from "material-react-table";
import { Delete, Edit } from "@mui/icons-material";

const Users = () => {
    const dispatch = useAppDispatch();

    const handleCreateUser: MRT_TableOptions<UserState>['onCreatingRowSave'] = ({ values, table }) => {
        dispatch(createUser(values));
        table.setCreatingRow(null);
    };

    const handleEditUser: MRT_TableOptions<UserState>['onEditingRowSave'] = ({ values, table }) => {
        dispatch(updateUser(values))
        table.setEditingRow(null);
    };

    const handleDeleteUser = (row: MRT_Row<UserState>) => {
        dispatch(deleteUser(row));
    }  

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    const usersLoading = useAppSelector(state => state.users.pending);
    const users = useAppSelector(state => state.users.users);

    const columns = useMemo<MRT_ColumnDef<UserState>[]>(() => [
        {
            accessorKey: 'id',
            header: 'Id',
            enableEditing: false,
            visibleInShowHideMenu: false,
        },
        {
            accessorKey: 'username',
            header: 'Username',
            enableHiding: false,
        },
        {
            accessorKey: 'password',
            header: 'Password',
            enableHiding: false,
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
            accessorKey: 'email',
            header: 'Email',
            enableHiding: false,
        },
        {
            accessorKey: 'phone_number',
            header: 'Phone Number',
            enableHiding: false,
        },
    ], [])

    const table = useMaterialReactTable({
        columns,
        data: users,
        enableGlobalFilter: true,
        createDisplayMode: 'modal',
        editDisplayMode: 'modal',
        enableRowActions: true,
        positionActionsColumn: 'last',
        onCreatingRowSave: handleCreateUser,
        onEditingRowSave: handleEditUser,
        getRowId: (row) => row.id,
        renderRowActions: ({ row, table }) => (
            <Box sx={{ display: 'flex', gap: '1rem' }}>
                <Tooltip title="Edit">
                    <IconButton onClick={() => table.setEditingRow(row)}>
                        <Edit />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Delete">
                    <IconButton onClick={() => handleDeleteUser(row)}>
                        <Delete />
                    </IconButton>
                </Tooltip>
            </Box> 
        ),
        renderCreateRowDialogContent: ({ table, row, internalEditComponents }) => (
            <>
                <DialogTitle variant="h3">Create New User</DialogTitle>
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
                <DialogTitle variant="h3">Edit User</DialogTitle>
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
                Create New User
            </Button>
        ),
        state: {
            columnVisibility: { id: false, password: false } ,
            isLoading: usersLoading,
        }
    });

    const UserList = useCallback(() => {
        return (
            <Box className="container-content">
                <MaterialReactTable 
                    table={table}
                />
            </Box>
        )
    }, [users, usersLoading]);

    return (
        <>
            <Header
                title="Manage Users"
            />
            <UserList />
        </>
    );
};

export default Users;