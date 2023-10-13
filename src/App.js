
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Userroute from './routes/Userroute';
import Adminroute from './routes/Adminroute';
import { configureStore } from './reducx/store';
import { Provider } from 'react-redux';


function App() {
  let store = configureStore();
  return (
    <>
      <Provider store={store}>
      <Routes>
        <Route exact path="/*" element={<Userroute />} />
        <Route exact path="/admin/*" element={<Adminroute />} />
      </Routes>
      </Provider>

    </>
  );
}

export default App;
