import React from 'react';
import '../App.css';
import Header from '../Components/Header';
import Background from '../Components/Background';
import PageContent from '../Components/PageContent';



function Home() {
  return ( 
    <>
    <style>
    @import url('https://fonts.googleapis.com/css2?family=Gaegu&display=swap');
    </style>
    <Background/>
    <Header/>
    <PageContent/>
    </>
  );
}

export default Home;
