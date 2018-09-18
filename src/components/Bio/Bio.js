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
        I attended the <a href="https://techbootcamps.utexas.edu/coding/">University of Texas Coding Bootcamp</a>, which taught me how to learn and implement languages basics quickly and where I honed front and backend skills. There was lots of web dev collaboration and I worked on projects independently and collaboratively. 
      </p>
      <p className="bioWords">
        My first career was in teaching, so I
      </p>
        
        <ul>
          <li>know how to break things down.</li>
          <li>can juggle mulitple projects at once.</li>
          <li>am efficient and manage time well.</li>
          <li>know how data analysis influences work.</li>
        </ul>
      <p className="bioWords">
        Random facts:
      </p>

        <ul>
          <li>I like traveling.</li>
          <li>Writing analytical papers is fun.</li>
          <li>I love coding because it's a cool combo of <a href="https://res.cloudinary.com/teepublic/image/private/s--E4iFZJvP--/t_Preview/b_rgb:ef4a81,c_limit,f_jpg,h_630,q_90,w_630/v1500915594/production/designs/1762056_0.jpg">building something</a>, <a href="https://usercontent1.hubstatic.com/1127756.jpg">doing a puzzle</a> and logic games. Plus, it <a href="https://images-na.ssl-images-amazon.com/images/I/511CYVo9TDL._SX370_BO1,204,203,200_.jpg">stretches the little grey cells to the max</a>.</li>
        </ul>

    </div>
    <div className="space"></div>
  </div>  
);

export default Bio;
