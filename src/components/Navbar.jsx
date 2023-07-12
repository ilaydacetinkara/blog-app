import React, { useState } from "react";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'

export default function Navbar() {
  const [navbarState, setNavbarState] = useState(false);
  const navigate=useNavigate()
  const [active, setActive] = useState(1);
  return (
    <>
      <Nav>
        <div className="brand">
          <div className="container">
            Logo
            
          </div>
          <div className="toggle">
             {navbarState ? (
              <VscChromeClose onClick={() => setNavbarState(false)} />
            ) : (
              <GiHamburgerMenu onClick={() => setNavbarState(true)} />
            )} 
          </div>
        </div>
          <div className="ul">
          <div className="li" > <Link  className="a" to="/"  >Home</Link></div>
                <div className="li" > <Link  className="a" to="/about"  >About</Link></div>
                <div className="li" > <Link  className="a" to="/blogs"  >Blogs</Link></div>
                <div className="li" > <Link  className="a" to="/pages"  >Pages</Link></div>
              
         </div>
        
        <button  onClick={()=>navigate("/login")}>Login</button>
      </Nav>

       <ResponsiveNav state={navbarState}>
          <div className="ul">
            
                <div className="li" > <Link  className="a" to="/" onClick={() => setNavbarState(false)} >Home</Link></div>
                <div className="li" > <Link  className="a" to="/about" onClick={() => setNavbarState(false)} >About</Link></div>
                <div className="li" > <Link  className="a" to="/blogs" onClick={() => setNavbarState(false)} >Blogs</Link></div>
                <div className="li" > <Link  className="a" to="/pages" onClick={() => setNavbarState(false)} >Pages</Link></div>
                <div className="li" > <Link  className="a" to="/login" onClick={() => setNavbarState(false)} >Login</Link></div>

          </div>
        
      </ResponsiveNav> 
    </>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #821111;
  padding: 1rem;

  .brand {
    .container {
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.4rem;
      font-size: 1.2rem;
      font-weight: 900;
      text-transform: uppercase;
    }
    .toggle {
      display: none;
    }
  }

  .ul {
    display: flex;
    gap: 2rem;
    list-style-type: none;
    margin: 2rem;
    .li {
      
      .a {
        padding: 2rem;
         text-decoration: none;
         color: #EED2CD;
         font-size: 1.4rem;
         transition: 0.1s ease-in-out;
         &:hover {
           color: black;
         }
       }
       &:first-of-type {
         .a {
           color: black;
           font-weight: 1000;
          }
        }
       
      }
  }
  button {
    padding: 0.5rem 1rem;
    cursor: pointer;
    border-radius: 1rem;
    border: none;
    color: #821111;
    background-color: #EED2CD;
    font-size: 1.1rem;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
    transition: 0.3s ease-in-out;
    &:hover {
      background-color: black;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .brand {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      .toggle {
        display: block;
      }
    }
    .ul {
      display: none;
    }
    button {
      display: none;
    }
  }
`;

const ResponsiveNav = styled.div`
  display: flex;
  position: absolute;
  z-index: 1;
  top: ${({ state }) => (state ? "50px" : "-400px")};
  background-color: #821111;
  height: 35vh;
  width: 100%;
  align-items: center;
  transition: 0.3s ease-in-out;
  .ul {
    list-style-type: none;
    width: 100%;
    margin-left: 2rem;

    .li {
      width: 100%;
      margin: 1rem 0;
     

      .a {
        text-decoration: none;
        color: #EED2CD;
        font-size: 1.2rem;
        transition: 0.1s ease-in-out;
        &:hover {
          color: black;
        }
      }
      &:first-of-type {
        .a {
          color: black;
          font-weight: 900;
        }
      }
    }
  }

`;