import React from 'react'
import styled from "styled-components";
import lake from "../assets/lake.jpg";

export default function Welcome() {
  return (
    <Section id='welcome'>
      <div className="background">
        <img src={lake} />
      </div>
      <div className="content">
        <div className="title">
          <h1>WELCOME</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            natus, enim ipsam magnam odit deserunt itaque? Minima earum velit
            tenetur!
          </p>
        </div>
        <div className="container">
          <button>Read The Post</button>
        </div>
      </div>
    </Section>
  )
}
const Section = styled.section`
    position: relative;
   
    width: 100%;
    height: 100%;
    .background {
        padding: 3rem;
        height: 50rem;
        
        img {
            border-radius: 1rem;
        width: 100%;
          height: 100%;
          filter: brightness(60%);
        }
      }
      .content {
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        z-index: 3;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        .title {
          color: white;
          h1 {
            font-size: 3rem;
            letter-spacing: 0.2rem;
          }
          p {
            text-align: center;
            padding: 0 30vw;
            margin-top: 0.5rem;
            font-size: 1.2rem;
          }
        }
        button {
            padding: 1rem;
            cursor: pointer;
            border-radius: 0.3rem;
            border: none;
            color: #EED2CD;
            background-color: #821111;
            font-size: 1.1rem;
            text-transform: uppercase;
            transition: 0.3s ease-in-out;
            &:hover {
              background-color: black;
            }
          }
`;