import React from 'react';
import '../App.css';
import Background from '../Components/Background';
import HomeContent from '../Components/HomeContent';
import NavBar from '../Components/NavBar';



export default function Home() {
  return ( 
    <>
    <style>
    @import url('https://fonts.googleapis.com/css2?family=Gaegu&display=swap');
    </style>
    <Background/>
    <NavBar/>
    <HomeContent/>
    </>
  )
}