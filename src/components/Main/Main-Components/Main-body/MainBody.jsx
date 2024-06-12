import React, { useContext } from "react";
import { BsStars } from "react-icons/bs";
import "../../css/Main.css";
import Sugesstions from "./Sugesstions";
import Search from "./Search";
import { Context } from "../../../../context/Context";
import { TypeAnimation } from "react-type-animation";

export default function MainBody() {
  const { recentPrompt, showResult, loading, result } = useContext(Context);
  return (
    <div className="container-fluid">
      {!showResult ? (
        <>
          <div className=" p-3 main-section ">
            <img className=" main-photo" src="/assets/main.gif" alt="" />
            <div className="greet">
              <div className="card-body">
                <p className="greet-p-head">
                  <span></span>
                  <TypeAnimation
      sequence={[
        
        "",
        500, 
        "Hello,Dev...",
        1000,
        
      ]}
      wrapper="span"
      speed={20}
      repeat={Infinity}
    />
                </p>
                <p className="card-text greate-body">
                  How Can I Help You Today?
                </p>
                <Search />
              </div>
            </div>
          </div>
          <Sugesstions />
        </>
      ) : (
        <div className="container">
          <div className="result">
            <div className="result-title">
              <img className="Logo" src="/assets/Fotos.jpeg" alt="logo" />

              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <span className="star-iqon">
                <BsStars />
              </span>
              {loading ? (
                <div className="loading">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: result }}></p>
              )}
            </div>
          </div>
        </div>
      )}
      {showResult?
      (
        <div className="search-bottom container">
<Search/>
      </div>
      ):""}
  
    </div>
  );
}
