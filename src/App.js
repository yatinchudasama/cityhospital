
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Userroute from './routes/Userroute';
import Adminroute from './routes/Adminroute';
import { configureStore } from './reducx/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'


function App() {
  let { store, persistor } = configureStore();
  return (
    <>
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Routes>
          <Route exact path="/*" element={<Userroute />} />
          <Route exact path="/admin/*" element={<Adminroute />} />
        </Routes>
        </PersistGate>
      </Provider>

    </>
  );
}

export default App;
