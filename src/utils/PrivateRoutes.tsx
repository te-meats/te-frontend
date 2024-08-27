import { useAppSelector } from "@hooks/hooks";
import { CircularProgress } from "@mui/material";
import { useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { authApi } from "./api";

const PrivateRoutes = () => {
    const loading = useAppSelector(state => state.user.pending);
    const token = localStorage.getItem('token');

    // Set token to make authorized api calls
    useEffect(() => {
        if (token) {
            authApi.defaults.headers.Authorization = `Token ${token}`
        }
    }, [token, loading])

    return (
        loading 
            ? <CircularProgress />
            : token ? <Outlet /> : <Navigate to="/" />
    );
}

export default PrivateRoutes;