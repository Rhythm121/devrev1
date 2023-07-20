import React from "react";
import Books from "./books";
import Header from "./header";
import LoginUi from "./LoginUi";
import ScrollToTop from "./scrolltotop";
import "./sass/style.css";

const App = () => {
  return (
    
    <div>
      <Header></Header>
      <Books></Books>
      <ScrollToTop></ScrollToTop>
    </div>
  );
};

export default App;
