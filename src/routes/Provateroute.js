import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

function Provateroute(props) {
    let auth = false
    return (
        <div>
            {auth ? <Outlet/> : <Navigate to={"/auth"} replace/>}
        </div>
    );
}

export default Provateroute;