import React from 'react';

import Home from '../containers/Home/Home'
import { Route, Routes } from 'react-router-dom';
import Departments from '../containers/Department/Departments';
import Doctors from '../containers/Doctor/Doctors';
import About from '../containers/About/About';
import Contact from '../containers/Contact/Contact';
import Appointment from '../containers/Appointment/Appointment';
import Auth from '../containers/Auth/Auth';
import Provateroute from './Provateroute';
import Dept from '../containers/Department/Dept';


function Userroute(props) {
    return (
        <Routes>

            <Route exact path="/" element={<Home />} />
            <Route exact path='/departments' element={<Departments />} />
            <Route exact path='/departments:id' element={<Dept />} />
            <Route exact path='/doctore' element={<Doctors />} />
            <Route exact path='/about' element={<About />} />
            <Route exact path='/contact' element={<Contact />} />

            <Route element={<Provateroute />}>
                <Route exact path='/appointment' element={<Appointment />} />
            </Route>

            <Route exact path='/auth' element={<Auth />} />

        </Routes>
    );
}

export default Userroute;