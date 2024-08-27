import { createUser, fetchUsers } from "@actions/users";
import Header from "@components/Header";
import PrimaryModal from "@components/Modals/PrimaryModal";
import { useAppDispatch, useAppSelector } from "@hooks/hooks";
import { Box } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { CreateUserConfig } from "src/interfaces";
import AddUser from '@containers/Forms/AddUser'

const Users = () => {
    const dispatch = useAppDispatch();

    const [modalOpen, setModalOpen] = useState(false);

    const addUserHandler = () => {
        dispatch(createUser(userConfig));
        clearState();
        setModalOpen(false);
    };

    const clearState = () => {
        setUserConfig({
            username: '',
            password: '',
        });
    }

    useEffect(() => {
        dispatch(fetchUsers());
    }, []);

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'username', headerName: 'Username', width: 130 },
        { field: 'first_name', headerName: 'First Name', width: 130 },
        { field: 'last_name', headerName: 'Last Name', width: 130 },
        { field: 'groups', headerName: 'Permissions', width: 200 },
    ]

    const usersLoading = useAppSelector(state => state.users.pending);
    const users = useAppSelector(state => state.users.users);

    const [userConfig, setUserConfig] = useState<CreateUserConfig>({
        username: '',
        password: '',
    });

    return (
        <>
            <Header
                title="Manage Users"
                actionTitle="Add New User"
                actions={() => setModalOpen(true)}
            />
            <Box className="container-content">
                <DataGrid 
                    rows={users}
                    columns={columns}
                    checkboxSelection
                    loading={usersLoading}
                    autoHeight={true}
                />
            </Box>
            <PrimaryModal
                title={"Add User"}
                modalOpened={modalOpen}
                setModalOpen={setModalOpen}
                onSubmit={addUserHandler}
                children={<AddUser setUserConfig={setUserConfig} />}
            />
        </>
    );
};

export default Users;