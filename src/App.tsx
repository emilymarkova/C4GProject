import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import Home from './pages/Home';
import Account from './pages/Account';
import SignUp from './pages/SignUp';
import About from './pages/About'
import Calendar from './pages/Calender'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home"       element={<Home />}></Route>
        <Route path="/login"     element={<Login />}></Route>
        <Route path="/signUp"  element={<SignUp/>}></Route>
        <Route path="/account" element={<Account />}></Route>
        <Route path="/calendar" element={<Calendar />}></Route>
        <Route path="/"               element={<SignUp />}></Route>
        <Route path="/about"     element={<About />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
