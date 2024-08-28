import { Box, TextField } from "@mui/material";
import { UserFormData } from "src/interfaces";

const AddUser = ({ userConfig, setUserConfig }: UserFormData) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserConfig({
            ...userConfig,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <Box>
            <TextField 
                name="username"
                value={userConfig.username}
                label="Username"
                onChange={handleChange}
            />
            <TextField 
                name="password"
                value={userConfig.password}
                label="Password"
                onChange={handleChange}
            />
        </Box>
    );
};

export default AddUser;