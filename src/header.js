import React from "react";
import "../src/sass/style.css";

const Header = () => {
  return (
    <>
     
         
        <strong>
          <h2
            className="heading-name"
            style={{
              background: "none",
              marginBottom: 50,
              // color: "#444",
              textAlign: "center",
              // fontWeight: "bold", //No need of bold because headings are itself bold
              fontFamily: "Scheherazade New",
              textShadow: "3px 3px 3px #444",
            }}
          >
            📚 A Book Library for all Book Lovers
          </h2>
        </strong>
     
    </>
  );
};

export default Header;
