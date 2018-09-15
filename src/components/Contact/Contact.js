import React from "react";
import "./Contact.css";

const Contact = () => (
  <div className="contact">
    <div className="row sectionContact">
      <h3>Contact Me</h3>
    </div>

    <div class="row justify-content-center">
      <a href="https://www.linkedin.com/in/kris-acker-bierma/" class="fab fa-linkedin-in fa-lg" target="_blank"
      alt="linkedIn icon leads to Kris's linkedIn page"></a>
      <a href="https://github.com/KrisBierma" class="fab fa-github fa-lg" target="_blank" 
      alt="GitHub icon leads to Kris's GitHub page"></a>
      <a href={"mailto:kris.bierma@gmail.com"} class="fas fa-envelope fa-lg" target="_blank" alt="icon to email Kris"></a>
    </div>  
  </div>
);

export default Contact;
