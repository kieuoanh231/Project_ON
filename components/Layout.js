import NavBar from "./NavBar";
import React from "react";
import Footer from "./Footer";
import Notify from './Notify';
import Modal from "./Modal";
function Layout({ children }) {
  return (
    <>
   <Modal/>
      <div className="container">
        <NavBar />
      </div>
      <Notify/> 
    
      <div>{children}</div>
      <div>
        <Footer />
      </div>
    </>
  );
}
export default Layout;
