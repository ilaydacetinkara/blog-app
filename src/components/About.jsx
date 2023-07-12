import React from "react";

import styled from "styled-components";
import about from "../assets/about.png";

export default function About() {

  return (
    <Section id='about'>
    <div className="background">
        <img src={about} />
    </div>
    <div className="content">
        <div className="title">
            <h1>About me</h1>
            <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
            accusantium sapiente tempora sed dolore esse deserunt eaque
            excepturi, delectus error accusamus vel eligendi, omnis beatae.
            Quisquam, dicta. Eos quod quisquam esse recusandae vitae neque
            dolore, obcaecati incidunt sequi blanditiis est exercitationem
            molestiae delectus saepe odio eligendi modi porro eaque in libero
            minus unde sapiente consectetur architecto. Ullam rerum, nemo iste
            ex, eaque perspiciatis nisi, eum totam velit saepe sed quos
            similique amet. Ex, voluptate accusamus nesciunt totam vitae esse
            iste.
             </p>
    </div>
    </div>
</Section>
  );
}

const Section = styled.section`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    position: relative;
    width: 95%;
    height: 100%;
    margin: 2rem;
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
            
            .title {
                      color: black;
                      h1 {
                        font-size: 3rem;
                        letter-spacing: 0.2rem;
                        padding: 2rem;
                      }
                      p {
                        text-align: center;
                        padding: 4rem;
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
            
            
        }
        
      }
`;