import { Box, TextField } from "@mui/material";
import { useState } from "react";
import { CreateUserConfig, UserFormData } from "src/interfaces";

const AddUser = ({ setUserConfig }: UserFormData) => {
    const [user, setUser] = useState<CreateUserConfig>({
        username: '',
        password: '',
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    };

    const handleBlur = () => {
        setUserConfig({
            ...user,
        });
    };

    return (
        <Box>
            <TextField 
                name="username"
                value={user.username}
                label="Username"
                onChange={handleChange}
                onBlur={handleBlur}
            />
            <TextField 
                name="password"
                value={user.password}
                label="Password"
                onChange={handleChange}
                onBlur={handleBlur}
            />
        </Box>
    );
};

export default AddUser;