import React from "react";
import "../css/Main.css";
import NavBar from "./Nav-bar/NavBar";
import Sidebar from "../../Sidebar/Sidebar";
import MainBody from "./Main-body/MainBody";
export default function Main() {
  
  return (
    <>
      <div className="Header">
        <Sidebar />
        <NavBar />
      </div>
        <MainBody />
      
    </>
  );
}
