import React from "react";
import "./Bio.css";

// building things section
const Bio = () => (
  <div>
    <div className="row sectionBio">
        <h3>Bio</h3>
    </div>  

    <div>
      <p className="bioWords">
        I attended the <a href="https://techbootcamps.utexas.edu/coding/" taraget="_blank" rel="noopener noreferrer" aria-hidden>

          University of Texas Coding Bootcamp</a>
          <div className="box2">
            <iframe src="https://techbootcamps.utexas.edu/coding/" frameBorder="0" title="University of Texas Bootcamp website"></iframe>
          </div>          
          , which taught me how to learn and implement languages basics quickly and where I honed front and backend skills. There was lots of web dev collaboration and I worked on projects independently and collaboratively. 
      </p>
      <p className="bioWords">
        My first career was in teaching, so I
      </p>
        
        <ul>
          <li>know how to break things down.</li>
          <li>can juggle multiple projects at once.</li>
          <li>am efficient and manage time well.</li>
          <li>know how data analysis influences work.</li>
        </ul>
      <p className="bioWords">
        Random facts:
      </p>
        <ul>

          <li>I like <a href="https://kristineacker.wordpress.com/" target="_blank" rel="noopener noreferrer" aria-hidden>traveling.</a>
            <div className="box2">
              <iframe src="https://kristineacker.wordpress.com/" frameBorder="0" title="my travel website"></iframe>
            </div>
          </li>

          <li>Writing analytical papers is fun.</li>

          <li>I love coding because it's a cool combo of 
             building something, doing a puzzle and logic games. Plus, it 
            <a href="https://images-na.ssl-images-amazon.com/images/I/511CYVo9TDL._SX370_BO1,204,203,200_.jpg" target="_blank" rel="noopener noreferrer" aria-hidden> stretches the little grey cells to the max</a>
              <div className="box">
                <iframe src="https://images-na.ssl-images-amazon.com/images/I/511CYVo9TDL._SX370_BO1,204,203,200_.jpg" frameBorder="0" title="quote from Poirot"></iframe></div>
            .
          </li>
        </ul>

    </div>
    <div className="space"></div>
  </div>  
);

export default Bio;
