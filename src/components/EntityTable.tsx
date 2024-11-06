// src/components/EntityTable.tsx
import { useMemo } from "react";
import {
   Box,
   Button,
   DialogActions,
   DialogContent,
   DialogTitle,
   IconButton,
   Tooltip,
} from "@mui/material";
import {
   MaterialReactTable,
   MRT_ColumnDef,
   MRT_EditActionButtons,
   MRT_EditCellTextField,
   MRT_Row,
   MRT_TableOptions,
   useMaterialReactTable,
   MRT_RowData,
} from "material-react-table";
import { Delete, Edit } from "@mui/icons-material";

// Ensure Entity extends MRT_RowData which is necessary for Material React Table functions
interface EntityTableProps<
   Entity extends MRT_RowData & { id: string | number }
> {
   data: Entity[];
   dispatchCreateEntity: (values: Entity) => void;
   dispatchUpdateEntity: (values: Entity) => void;
   dispatchDeleteEntity: (id: number | string) => void;
   columnsDef: MRT_ColumnDef<Entity>[];
   isLoading: boolean;
}

function EntityTable<Entity extends MRT_RowData & { id: string | number }>({
   data,
   dispatchCreateEntity,
   dispatchUpdateEntity,
   dispatchDeleteEntity,
   columnsDef,
   isLoading,
}: EntityTableProps<Entity>) {
   const handleCreateEntity: MRT_TableOptions<Entity>["onCreatingRowSave"] = ({
      values,
      table,
   }) => {
      dispatchCreateEntity(values as Entity);
      table.setCreatingRow(null);
   };

   const handleEditEntity: MRT_TableOptions<Entity>["onEditingRowSave"] = ({
      values,
      table,
   }) => {
      dispatchUpdateEntity(values as Entity);
      table.setEditingRow(null);
   };

   const handleDeleteEntity = (row: MRT_Row<Entity>) => {
      dispatchDeleteEntity(row.original.id);
   };

   const columns = useMemo(() => columnsDef, [columnsDef]);

   const table = useMaterialReactTable({
      columns,
      data,
      enableGlobalFilter: true,
      createDisplayMode: "modal",
      editDisplayMode: "modal",
      enableRowActions: true,
      positionActionsColumn: "last",
      onCreatingRowSave: handleCreateEntity,
      onEditingRowSave: handleEditEntity,
      getRowId: (row) => row.id.toString(),
      renderRowActions: ({ row, table }) => (
         <Box sx={{ display: "flex", gap: "1rem" }}>
            <Tooltip title="Edit">
               <IconButton onClick={() => table.setEditingRow(row)}>
                  <Edit />
               </IconButton>
            </Tooltip>
            <Tooltip title="Delete">
               <IconButton onClick={() => handleDeleteEntity(row)}>
                  <Delete />
               </IconButton>
            </Tooltip>
         </Box>
      ),
      renderCreateRowDialogContent: ({
         table,
         row,
         internalEditComponents,
      }) => (
         <>
            <DialogTitle variant="h3">Create New Entity</DialogTitle>
            <DialogContent
               sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            >
               {internalEditComponents}
            </DialogContent>
            <DialogActions>
               <MRT_EditActionButtons variant="text" table={table} row={row} />
            </DialogActions>
         </>
      ),
      renderEditRowDialogContent: ({ table, row }) => (
         <>
            <DialogTitle variant="h3">Edit Entity</DialogTitle>
            <DialogContent
               sx={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
            >
               {row
                  .getAllCells()
                  .filter((cell) => cell.column.id !== "password")
                  .map((cell) => (
                     <MRT_EditCellTextField
                        cell={cell}
                        key={cell.id}
                        table={table}
                     />
                  ))}
            </DialogContent>
            <DialogActions>
               <MRT_EditActionButtons variant="text" table={table} row={row} />
            </DialogActions>
         </>
      ),
      renderTopToolbarCustomActions: ({ table }) => (
         <Button
            variant="contained"
            onClick={() => {
               table.setCreatingRow(true);
            }}
         >
            Create New Entity
         </Button>
      ),
      state: {
         columnVisibility: {
            id: false,
            password: false,
         },
         isLoading: isLoading,
      },
   });

   return (
      <Box className="container-content">
         <MaterialReactTable table={table} />
      </Box>
   );
}

export default EntityTable;
