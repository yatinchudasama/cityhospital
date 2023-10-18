import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Medisin from '../admin/container/Medisin/Medisin';
import PrivateRoute from './PrivateRoute';
import Layout from '../admin/layout/Layout';
import Doctor from '../admin/container/Doctor/Doctor';
import Department from '../admin/container/Department/Department';

function Adminroute(props) {
    return (
        <Layout>
            <Routes>
                <Route element={<PrivateRoute />}>
                    <Route exact path="/medisin" element={<Medisin />} />
                    <Route exact path='/doctor' element={<Doctor/>} />
                    <Route exact path='/department' element={<Department/>} />
                </Route>

            </Routes>
        </Layout>
    );
}

export default Adminroute;