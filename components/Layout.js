import NavBar from "./NavBar";
import React from "react";
import Footer from "./Footer";
import Notify from './Notify';

function Layout({ children }) {
  return (
    <>
      <div className="container">
        <NavBar />
      </div>
      <div><Notify/> {children}</div>
      <div>
        <Footer />
      </div>
    </>
  );
}
export default Layout;
