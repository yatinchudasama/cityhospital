import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Medisin from '../admin/container/Medisin/Medisin';
import Provateroute from './Provateroute';

function Adminroute(props) {
    return (
        <Routes>
            <Route element={<Provateroute/>}>
                <Route exact path="/medisin" element={<Medisin />} />
            </Route>

        </Routes>
    );
}

export default Adminroute;