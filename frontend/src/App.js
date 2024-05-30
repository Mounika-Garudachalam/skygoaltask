import React from 'react';
import {Routes,Route,BrowserRouter} from 'react-router-dom';
import axios from 'axios';

import './App.css';
import HomePage from './pages/HomePage';
import Register from './pages/Register';
import Login from './pages/Login';
import LoginPage from './pages/subpages/LoginPage';

//database and axios connection
axios.defaults.baseURL='http://localhost:8000';
axios.defaults.withCredentials=true

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route index element={<HomePage/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/login/loginpage' element={<LoginPage/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
