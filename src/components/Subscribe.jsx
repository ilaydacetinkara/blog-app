import React from "react";
import styled from "styled-components";

export default function Subscribe() {
  
  return (
    <Section id="subscribe">
        <div className="background">
        <div className="title">
                <h1>SUBSCRIBE TO NEWSLETTER</h1>      
        </div>
      
        </div>
        <div className="container">
        <label >
             <input name="myInput" className="label"/>
      </label>
      < div >
                <button>SUBSCRIBE</button>
            </div>
        </div>
    </Section>
    );
}
const Section = styled.section`
    display: flex;
    background-color: #EED2CD;
    position: relative;
    width: 92%;
    height: 5rem;   
    align-items: center;
    justify-content: space-between;
    margin: 1rem 3rem 1rem ;
    padding: 1rem;
    
    .container {
        display: flex;
        align-items: center;
    }

    .title {
        margin-left: 3rem;
    }

    .label {
        margin-left: 3rem;
        border: none;
        cursor: pointer;
        width:  30rem;
        border-radius: 3rem;
        font-size: 0.9rem;
        padding: 0.7rem;
    }
    
    button {
        margin-right: 10rem;
        margin-left: 3rem;
        padding: 1rem;
        cursor: pointer;
        border-radius: 3rem;
        border: none;
        color: #EED2CD;
        background-color: #821111;
        font-size: 1rem;
        text-transform: uppercase;
        transition: 0.3s ease-in-out;
        &:hover {
          background-color: black;
        }
      }

      @media screen and (min-width: 280px) and (max-width: 768px) {
        justify-content: center;
        height: 5rem;
               
        .title {
            font-size: 0.5rem;
        }

        .label {
            border: none;
            width:  10rem;
            border-radius: 3rem;
            font-size: 1rem;
        }
        
        button {
            padding: 0.7rem;
            font-size: 1rem;
         }
`;