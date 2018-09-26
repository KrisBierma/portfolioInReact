import React from "react";
import "./intro.css";

const Intro = props => (
  <div>
    <div className="row sectionHome justify-content-center">
      <div className="col-sm">
          <img src={require("../../assets/images/profilePic.JPG")} className="profilePic img-fluid" alt="headshot of Kris Acker Bierma"/>
      </div>

      <div className="col-sm">
        <div className="row justify-content-center change">
          <div className="scrollBody1">
              <h2 className=" scrolling1">Hi! I'm Kris.</h2>
          </div>
          <br />
        </div>

        <div className="row justify-content-center change">
          <div className="center">
              <h4 className="animated fadeIn">Full-Stack Developer - Engineer</h4>
              <a href="https://unsplash.com/photos/QDM6-fFKP0s?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" rel="noopener noreferrer" target="_blank"><img src={require("../../assets/images/p3.jpg")} alt="full stack of pancakes" className="img-fluid pancakes animated fadeIn center" /></a>
          </div>
        </div>
      </div>
    </div>

    <div className="row justify-content-center">
      <div className="scrollBody2">
          <h2 className=" scrolling2">Turning others' ideas into reality</h2> 
          <h2 id="mission" className="animated fadeIn">Turning others' ideas into reality</h2>
      </div>
    </div>  
  </div>
);

export default Intro; 