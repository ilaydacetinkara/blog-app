import React, { useEffect } from "react";
import scrollreveal from "scrollreveal";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import About from "./components/About";
import Footer from "./components/Footer";
import { Route, Routes, BrowserRouter } from "react-router-dom";

export default function App() {
  useEffect(() => {
    const sr = scrollreveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: true,
    });
    sr.reveal(
      `
        nav,
        #welcome,
        #recommend,
        #about,
        footer
        `,
      {
        opacity: 0,
        interval: 300,
      }
    );
  }, []);

return (
  <>
     <BrowserRouter>

    <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/blogs" element={<Login/>} />
        <Route path="/pages" element={<Login/>} />
        
      </Routes>
      <Footer></Footer>
  </BrowserRouter>
  </>

)
}


