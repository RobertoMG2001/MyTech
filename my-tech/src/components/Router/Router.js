import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import '../../App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Sidebar from './Sidebar';
import HomePage from '../../pages/HomePage';
import ProvidersPage from '../../pages/ProvidersPage';
import ProductsPage from '../../pages/ProductsPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Sidebar />
        <ToastContainer />
        <Switch>
          <Route path='/home' component={HomePage} />
          <Route path='/providers' component={ProvidersPage} />
          <Route path='/products' component={ProductsPage} />
          <Redirect exact path='/' to='/home' />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
