import { useCallback, useEffect, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "@hooks/hooks"
import { fetchProducers, createProducer, deleteProducer, updateProducer } from "@actions/producers";
import Header from "@components/Header";
import { Box, Button, DialogActions, DialogContent, DialogTitle, IconButton, Tooltip } from "@mui/material";
import { MaterialReactTable, MRT_ColumnDef, MRT_EditActionButtons, MRT_EditCellTextField, MRT_Row, MRT_TableOptions, useMaterialReactTable } from "material-react-table";
import { Producer } from "src/interfaces";
import { Delete, Edit } from "@mui/icons-material";

const Producers = () => {
    const dispatch = useAppDispatch();

    const producersLoading = useAppSelector(state => state.producers.pending);
    const producers = useAppSelector(state => state.producers.producers);

    useEffect(() => {
        dispatch(fetchProducers());
    }, []);

    const handleCreateProducer: MRT_TableOptions<Producer>['onCreatingRowSave'] = ({ values, table }) => {
        dispatch(createProducer(values));
        table.setCreatingRow(null);
    };

    const handleEditProducer: MRT_TableOptions<Producer>['onEditingRowSave'] = ({ values, table }) => {
        dispatch(updateProducer(values))
        table.setEditingRow(null);
    };

    const handleDeleteProducer = (row: MRT_Row<Producer>) => {
        dispatch(deleteProducer(row));
    }  

    const columns = useMemo<MRT_ColumnDef<Producer>[]>(() => [
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
        data: producers,
        enableGlobalFilter: true,
        createDisplayMode: 'modal',
        editDisplayMode: 'modal',
        enableRowActions: true,
        positionActionsColumn: 'last',
        onCreatingRowSave: handleCreateProducer,
        onEditingRowSave: handleEditProducer,
        getRowId: (row) => row.id,
        renderRowActions: ({ row, table }) => (
            <Box sx={{ display: 'flex', gap: '1rem' }}>
                <Tooltip title="Edit">
                    <IconButton onClick={() => table.setEditingRow(row)}>
                        <Edit />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Delete">
                    <IconButton onClick={() => handleDeleteProducer(row)}>
                        <Delete />
                    </IconButton>
                </Tooltip>
            </Box> 
        ),
        renderCreateRowDialogContent: ({ table, row, internalEditComponents }) => (
            <>
                <DialogTitle variant="h3">Create New Producer</DialogTitle>
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
                <DialogTitle variant="h3">Edit Producer</DialogTitle>
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
                Create New Producer
            </Button>
        ),
        state: {
            columnVisibility: { id: false, password: false } ,
            isLoading: producersLoading,
        }
    });

    const ProducerList = useCallback(() => {
        return (
            <Box className="container-content">
                <MaterialReactTable 
                    table={table}
                />
            </Box>
        )
    }, [producers, producersLoading]);

    return (
        <>
            <Header
                title="Producers"
            />
            <ProducerList />
        </>
    )
}

export default Producers;