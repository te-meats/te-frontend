import { authenticateUser } from "@actions/user";
import { Box, Button, TextField } from "@mui/material"
import React, {  useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "@hooks/hooks";
import { LoginConfig } from "src/interfaces";

const Login = () => {
    const navigate = useNavigate();

    const dispatch = useAppDispatch();

    const [config, setConfig] = useState<LoginConfig>({
        username: '',
        password: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setConfig({
            ...config,
            [e.target.name]: e.target.value,
        })
    };

    const handleLogin = () => {
        navigate('/home');
    }

    return (
        <>
            <Box
                sx={{ 
                    display: 'flex',
                    flexGrow: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                }}
            >
                <Box sx={{ padding: '20px'}}>
                    <h1>
                        Login
                    </h1>
                </Box>
                <TextField
                    id="username"
                    name="username"
                    label="User Name"
                    onChange={handleChange}
                />
                <TextField
                    id="password"
                    name="password"
                    label="Password"
                    type="password"
                    onChange={handleChange}
                />
                <Button 
                    // onClick={() => dispatch(authenticateUser(config))}
                    onClick={handleLogin}
                >
                        Sign In
                </Button>
            </Box>
        </>
    )
}

export default Login;