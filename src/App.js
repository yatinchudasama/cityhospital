
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Userroute from './routes/Userroute';
import Adminroute from './routes/Adminroute';


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/*" element={<Userroute/>} />
        <Route exact path="/admin/*" element={<Adminroute/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
