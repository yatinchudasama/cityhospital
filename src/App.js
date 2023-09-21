
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import Home from './containers/Home/Home'
import { Route, Routes } from 'react-router-dom';
import Departments from './containers/Department/Departments';
import Doctors from './containers/Doctor/Doctors';
import About from './containers/About/About';
import Contact from './containers/Contact/Contact';
import Appointment from './containers/Appointment/Appointment';
import Auth from './containers/Auth/Auth';


function App() {
  return (
    <>
      <Header />
      <Routes>

        <Route exact path="/" element={<Home/>} />
        <Route exact path='/departments' element={<Departments />} />
        <Route exact path='/doctore'element={<Doctors/>}/>
        <Route exact path='/about' element={<About/>}/>
        <Route exact path='/contact' element={<Contact/>}/>
        <Route exact path='/appointment' element={<Appointment/>}/>
        <Route exact path='/auth' element={<Auth/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
