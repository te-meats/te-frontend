import Header from "@components/Header";
import { Box, TextField } from "@mui/material";

const Users = () => {

    const addUserHandler = () => {
        // TODO: Implement add user
        console.log("Added new user");
    };

    return (
        <>
            <Header
                title="Manage Users"
                actionTitle="Add New User"
                actions={addUserHandler}
            />
            <Box className="container-content">
                <TextField
                    variant="filled"
                    name="firstName"
                    label="First Name"
                />
            </Box>
        </>
    );
};

export default Users;