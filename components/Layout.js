import NavBar from "./NavBar";
import React from "react";
import Footer from "./Footer";
import Notify from './Notify';
import Modal from "./Modal";
import ScrollToTop from "./ScrollToTop";

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
      <ScrollToTop></ScrollToTop>
    </>
  );
}
export default Layout;
