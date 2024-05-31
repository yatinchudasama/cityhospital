import React from 'react';

import Home from '../containers/Home/Home'
import { Route, Routes } from 'react-router-dom';
import Departments from '../containers/Department/Departments';
import Doctors from '../containers/Doctor/Doctors';
import About from '../containers/About/About';
import Contact from '../containers/Contact/Contact';
import Appointment from '../containers/Appointment/Appointment';
import Auth from '../containers/Auth/Auth';

import Dept from '../containers/Department/Dept';
import Profile from '../containers/Home/Review';
import PrivateRoute from './PrivateRoute';
import Review from '../containers/Home/Review';
import Medisin from '../containers/Medisin/Medisin';
import MedisinData from '../containers/Medisin/MedisinData';
import Header from '../component/Header/Header';
import Footer from '../component/Footer/Footer';
import { useState } from 'react';
import Counter from '../containers/Counter';
import Form from '../containers/Form/Form'
import Display from '../containers/Display/Display';

function Userroute(props) {
    const [countCard, setCountCard] = useState('')
    const [favirote, setFavirote] = useState('')
    const [fav, setFav] = useState([])
    return (
        <>
            <Header countCard={countCard} fav={fav}/>
            <Routes>

                <Route exact path="/" element={<Home />} />
                <Route exact path='/review-detail/:id' element={<Review />} />
                <Route exact path='/departments' element={<Departments />} />
                <Route exact path='/departments/:id' element={<Dept />} />
                <Route exact path='/doctore' element={<Doctors />} />
                <Route exact path='/medisin' element={<Medisin increment={setCountCard} fav={fav} setFav={setFav}/>} />
                <Route exact path='/medisineslist/:id' element={<MedisinData />} />
                <Route exact path='/about' element={<About />} />

                <Route exact path='/counter' element={<Counter />} />
                <Route exact path='/contact' element={<Contact />} />
                <Route exact path='/form' element={<Form />} />
                <Route exact path='/display' element={<Display />} />

                <Route element={<PrivateRoute />}>
                    <Route exact path='/appointment' element={<Appointment />} />
                </Route>

                <Route exact path='/auth' element={<Auth />} />

            </Routes>
            <Footer />
        </>
    );
}

export default Userroute;