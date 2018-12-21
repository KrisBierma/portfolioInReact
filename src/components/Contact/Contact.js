import React from "react";
import "./Contact.css";
// remove ?? from between <a>
const Contact = () => (
  <div className="contact">
    <div className="row sectionContact">
      <h3>Contact Me</h3>
    </div>

    <div className="row justify-content-center">
      <a aria-hidden href="https://www.linkedin.com/in/kris-acker-bierma/" className="fab fa-linkedin-in fa-lg" rel="noopener noreferrer" target="_blank"
      alt="linkedIn icon leads to Kris's linkedIn page"></a>
      <a aria-hidden href="https://github.com/KrisBierma" className="fab fa-github fa-lg" rel="noopener noreferrer" target="_blank" 
      alt="GitHub icon leads to Kris's GitHub page"></a>
      <a href={"mailto:kris.bierma@gmail.com"} className="fas fa-envelope fa-lg" rel="noopener noreferrer" target="_blank" alt="icon to email Kris" aria-hidden></a>
    </div>  
  </div>
);

export default Contact;
