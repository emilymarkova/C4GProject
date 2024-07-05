import React from 'react'
import "./Header.css"
import {Link} from 'react-router-dom';
import logo from "../assets/image.png"

export default function Header() {
  return (
    <>
    <div className="headerTop"><br/></div>
    <div className="App-header">
      <span
        style={{textShadow: "0 0 7px #97bffb,0 0 10px #97bffb,0 0 21px #97bffb,0 0 42px #97bffb,0 0 84px #97bffb"}}>
          <Link to={"https://www.youtube.com"}>
          Eventide
          </Link>
          {/*<img src={logo} alt="logo" style="width:50px;height:100px;"></img>*/}
      </span>
      <span>   <a href="https://www.google.com" target="_self">IDK</a>     </span>
      <span>   <a href="https://www.google.com" target="_self">IDK</a>     </span>
      <span>   <a href="https://www.google.com">About</a>   </span>
      <span>   <a href="https://www.google.com">Guide</a>   </span>
      <span>   <a href="https://www.google.com">FAQ</a>     </span>
    </div>
    </>
  )
}
