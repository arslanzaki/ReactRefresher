// # Chapter 05 - Let's Get Hooked

import React from "react";
import ReactDOM from "react-dom/client";
// Default Export
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
// Named Export [Not Object Destructring]
// import { Title } from "./components/Header";

// OR
// import Header, { Title } from "./components/Header";





const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
