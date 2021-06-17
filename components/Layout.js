import NavBar from "./NavBar";
import React from "react";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <>
      <div className="container">
        <NavBar />
      </div>
      <div>{children}</div>
      <div>
        <Footer />
      </div>
    </>
  );
}
export default Layout;
