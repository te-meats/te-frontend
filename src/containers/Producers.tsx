// src/containers/Producers.tsx
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@hooks/hooks";
import {
   createProducer,
   deleteProducer,
   fetchProducers,
   updateProducer,
} from "@actions/producers";
import Header from "@components/Header";
import Table from "@components/Table.tsx";
import { Box } from "@mui/material";

const Producers = () => {
   const dispatch = useAppDispatch();
   const producersLoading = useAppSelector((state) => state.producers.pending);
   const producers = useAppSelector((state) => state.producers.producers);

   useEffect(() => {
      dispatch(fetchProducers());
   }, [dispatch]);

   const columns = [
      {
         accessorKey: "id",
         header: "Id",
         enableEditing: false,
         visibleInShowHideMenu: false,
      },
      { accessorKey: "first_name", header: "First Name", enableHiding: false },
      { accessorKey: "last_name", header: "Last Name", enableHiding: false },
      { accessorKey: "address", header: "Address", enableHiding: false },
      { accessorKey: "email", header: "Email", enableHiding: false },
      { accessorKey: "phone", header: "Phone Number", enableHiding: false },
   ];

   return (
      <>
         <Header title="Producers" />
         <Box className={"container-content"}>
            <Table
                data={producers}
                dispatchCreateEntity={(customer) => dispatch(createProducer(customer))}
                dispatchUpdateEntity={(customer) => dispatch(updateProducer(customer))}
                dispatchDeleteEntity={(id) => dispatch(deleteProducer({ id: String(id) }))}
                columnsDef={columns}
                isLoading={producersLoading}
            />
         </Box>
      </>
   );
};

export default Producers;
