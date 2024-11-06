// src/components/EntityTable.tsx
import { useCallback, useMemo } from "react";
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
interface EntityTableProps<T extends MRT_RowData> {
   data: T[];
   dispatchCreateEntity: (values: T) => void;
   dispatchUpdateEntity: (values: T) => void;
   dispatchDeleteEntity: (id: number | string) => void;
   columnsDef: MRT_ColumnDef<T>[];
   isLoading: boolean;
}

function Table<T extends MRT_RowData>({
   data,
   dispatchCreateEntity,
   dispatchUpdateEntity,
   dispatchDeleteEntity,
   columnsDef,
   isLoading,
}: EntityTableProps<T>) {
   const handleCreateEntity: MRT_TableOptions<T>["onCreatingRowSave"] = ({
      values,
      table,
   }) => {
      dispatchCreateEntity(values as T);
      table.setCreatingRow(null);
   };

   const handleEditEntity: MRT_TableOptions<T>["onEditingRowSave"] = ({
      values,
      table,
   }) => {
      dispatchUpdateEntity(values as T);
      table.setEditingRow(null);
   };

   const handleDeleteEntity = (row: MRT_Row<T>) => {
      dispatchDeleteEntity(row.original.id);
   };

   const columns = useMemo<MRT_ColumnDef<T>[]>(() => columnsDef, [columnsDef]);

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
      getRowId: (row) => row.id,
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

   const RenderTable = useCallback(() => {
      return (
          <MaterialReactTable
              table={table}
          />
      )
   }, [table]);

   return (
       <RenderTable />
   );
}

export default Table;
