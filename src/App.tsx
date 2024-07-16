import React from 'react';
import './App.css';
import { Route, useLocation } from "react-router-dom";
import Login from './pages/Login';
import Home from './pages/Home';
import Account from './pages/Account';
import SignUp from './pages/SignUp';
import FullPageCalendar from './pages/FullPageCalendar'
import Notes from './pages/Notes';
import { AnimatePresence } from "framer-motion";
import { Routes } from 'react-router';
import About from './pages/About';

function App() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/"       element={<Home />}></Route>
        <Route path="/login"     element={<Login />}></Route>
        <Route path="/account" element={<Account />}></Route>

        <Route path="/calendar" element={<FullPageCalendar />}></Route>
        <Route path="/" element={<SignUp />}></Route>
        <Route path="/signUp"     element={<SignUp />}></Route>
        <Route path="/about"     element={<About />}></Route>
        <Route path="/notes"     element={<Notes />}></Route>
      </Routes>
      </AnimatePresence>
  );
}

export default App;
