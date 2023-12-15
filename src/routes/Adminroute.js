import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Medisin from '../admin/container/Medisin/Medisin';
import PrivateRoute from './PrivateRoute';
import Layout from '../admin/layout/Layout';
import Doctor from '../admin/container/Doctor/Doctor';
import Todo from '../admin/container/Todo/TodoList';

function Adminroute(props) {
    return (
        <Layout>
            <Routes>
                {/* <Route element={<PrivateRoute />}> */}
                    <Route exact path="/medisin" element={<Medisin />} />
                    <Route exact path='/doctor' element={<Doctor/>} />
                    <Route exact path='/todo' element={<Todo/>} />
                {/* </Route> */}

            </Routes>
        </Layout>
    );
}

export default Adminroute;