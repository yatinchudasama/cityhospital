import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

function PrivateRoute(props) {
    let auth = true
    return (
        <div>
            {auth ? <Outlet/> : <Navigate to={"/auth"} replace/>}
        </div>
    );
}

export default PrivateRoute;