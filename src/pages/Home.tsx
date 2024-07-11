<<<<<<< Updated upstream
import React from 'react';
import '../App.css';
import Header from '../Components/Header';
import Background from '../Components/Background';
import PageContent from '../Components/PageContent';
import NavBar from '../Components/NavBar';



export default function Home() {
  return ( 
    <>
    <style>
    @import url('https://fonts.googleapis.com/css2?family=Gaegu&display=swap');
    </style>
    <Background/>
      {/* <Header/> */}
      <NavBar/>
    <PageContent/>
    </>
  );
=======
import React from 'react';
import '../App.css';
import Header from '../Components/Header';
import Background from '../Components/Background';
import PageContent from '../Components/PageContent';



export default function Home() {
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
>>>>>>> Stashed changes
}