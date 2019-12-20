import React from "react";
import Background from '../../img/books.jpeg'

function Jumbotron({ children }) {
  return (
    <div
      style={{ 
        height: 300, 
        clear: "both", 
        paddingTop: 120, 
        textAlign: "center",
        backgroundImage: `url(${Background})`
    }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
