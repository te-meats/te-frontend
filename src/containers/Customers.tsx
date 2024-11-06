import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@hooks/hooks";
import {
   createCustomer,
   deleteCustomer,
   fetchCustomers,
   updateCustomer,
} from "@actions/customers";
import Header from "@components/Header";
import Table from "@components/Table.tsx";
import { Box } from "@mui/material";

const Customers = () => {
   const dispatch = useAppDispatch();
   const customersLoading = useAppSelector((state) => state.customers.pending);
   const customers = useAppSelector((state) => state.customers.customers);

   useEffect(() => {
      dispatch(fetchCustomers());
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
         <Header title="Customers" />
         <Box className={"container-content"}>
            <Table
                data={customers}
                dispatchCreateEntity={(customer) => dispatch(createCustomer(customer))}
                dispatchUpdateEntity={(customer) => dispatch(updateCustomer(customer))}
                dispatchDeleteEntity={(id) => dispatch(deleteCustomer({ id: String(id) }))}
                columnsDef={columns}
                isLoading={customersLoading}
            />
         </Box>
      </>
   );
};

export default Customers;
