import React from 'react'
import styled from "styled-components";
import hero from "../assets/hero.png";
import avatar from "../assets/avatar.jpg";

export default function Hero() {
  return (
    <Section id='welcome'>
        <div className="background">
            <img src={hero} />
        </div>
        <div className="content">
            <div className="avatar">
                <img src={avatar} />
            </div>
            <div className="title">
                <h1>Welcome</h1>
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
                natus, enim ipsam magnam odit deserunt itaque? Minima earum velit
                tenetur!
                 </p>
        </div>
        </div>
    </Section>
  )
}
const Section = styled.section`
    display: flex;
    justify-content:  space-between;
    align-items: center;
    position: relative;
    width: 95%;
    height: 100%;
   
    .background {
        padding: 3rem;
        height: 50rem;
        
        img {
            border-radius: 1rem;
            width: 100%;
            height: 100%;
            filter: brightness(80%);
        }
      }
          .content {
            
            height: 50rem;
            width: 70%;
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            
            .avatar {
                height: 20rem;
                width: 20rem; 
                display: flex;
              
                img {
                    text-align: center;
                    width: 100%;
                    height: 100%;
                    
                }
              
            }
            .title {
                      color: black;
                      h1 {
                        font-size: 3rem;
                        letter-spacing: 0.2rem;
                        padding: 2rem;
                      }
                      p {
                        text-align: center;
                        padding: 2rem;
                        margin-top: 0.5rem;
                        font-size: 1.2rem;
                      }
                    }
        }
        
   
    @media screen and (min-width: 280px) and (max-width: 768px) {
        
          flex-direction: column;
          margin: 0;
          .content {
            height: 50rem;
            width: 90%;
            
        }
        
      }
`;