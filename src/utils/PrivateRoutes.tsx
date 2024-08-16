import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = () => {
    // TODO: Add authentication when user logs in
    const auth = { 'token': true };

    return (
        auth.token ? <Outlet /> : <Navigate to="/"/>
    );
}

export default PrivateRoutes;