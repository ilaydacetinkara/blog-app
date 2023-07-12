import React, { useState } from "react";
import styled from "styled-components";
import forest from "../assets/forest.jpg";

export default function Recommend() {
    const data = [
        {
          image: forest,
          title: "Blog",
          subTitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere natus, enim ipsam magnam odit deserunt itaque? Minima earum velit tenetur!",
          date: "​Agust 10, 2022"  
        },
        {
          image: forest,
          title: "Blog",
          subTitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere natus, enim ipsam magnam odit deserunt itaque? Minima earum velit tenetur!",
          date: "​Agust 10, 2022"  
        },
        {
          image: forest,
          title: "Blog",
          subTitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere natus, enim ipsam magnam odit deserunt itaque? Minima earum velit tenetur!",
          date: "​Agust 10, 2022"  
        },
        {
          image: forest,
          title: "Blog",
          subTitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere natus, enim ipsam magnam odit deserunt itaque? Minima earum velit tenetur!",
          date: "​Agust 10, 2022"  
        },
        {
          image: forest,
          title: "Blog",
          subTitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere natus, enim ipsam magnam odit deserunt itaque? Minima earum velit tenetur!",
          date: "​Agust 10, 2022"  
        },
        {
          image: forest,
          title: "Blog",
          subTitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere natus, enim ipsam magnam odit deserunt itaque? Minima earum velit tenetur!",
          date: "​Agust 10, 2022"  
        },
      ];
      const packages = [
        "The Weekend Break",
        "The Package Holiday",
        "The Group Tour",
        "Long Term Slow Travel",
      ];
      const [active, setActive] = useState(1);
  return (
    <Section id="recommend">
        <div className="title">
        <h2>Blog</h2>
      </div>
        <div className="packages">
        <ul> 
          {packages.map((pkg, index) => {
            return (
              <li
                className={active === index + 1 ? "active" : ""}
                onClick={() => setActive(index + 1)}
              >
                {pkg}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="destinations">
        {data.map((destination) => {
          return (
            <div className="destination">
              <img src={destination.image} alt="" />
              <h2>{destination.title}</h2>
              <h6>{destination.date}</h6>
              <p>{destination.subTitle}</p>
              <div className="container">
          <button>Read The Post</button>
        </div>
            </div>
          );
        })}
      </div>
         
    </Section>
    );
}

const Section = styled.section`
  padding: 2rem 0;
  justify-content: center;
  .title {
    text-align: center;
    font-size: 2rem;
  }
  .packages {
    display: flex;
    justify-content: center;
    margin: 2rem 0;
    ul {
        font-size: 1rem;
      display: flex;
      list-style-type: none;
      width: max-content;
      li {
        padding: 1rem 2rem;
        border-bottom: 0.1rem solid black;
      }
    
      .active {
        border-bottom: 0.5rem solid  #821111;
        color: #821111;
      }
    }
  }
  .destinations {
   
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    padding: 0 3rem;
    .destination {
        h2 {
            font-size: 3rem;
            letter-spacing: 0.1rem;
          }
          h6 {
            font-size: 1rem;
          }
        justify-content: center;
        align-items: center;
      padding: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      background-color: #8338ec14;
      border-radius: 1rem;
      transition: 0.3s ease-in-out;
      button {
        padding: 1rem;
        cursor: pointer;
        border-radius: 1.5rem;
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
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      img {
        width: 100%;
      }
      .info {
        display: flex;
        align-items: center;
        .services {
          display: flex;
          gap: 0.3rem;
          img {
            border-radius: 1rem;
            background-color: #4d2ddb84;
            width: 2rem;
            /* padding: 1rem; */
            padding: 0.3rem 0.4rem;
          }
        }
        display: flex;
        justify-content: space-between;
      }
      .distance {
        display: flex;
        justify-content: space-between;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    .packages {
      ul {
        li {
          padding: 0 0.5rem;
          font-size: 2vh;
          padding-bottom: 1rem;
        }
        .active {
          border-bottom-width: 0.3rem;
        }
      }
    }
    .destinations {
      grid-template-columns: 1fr;
      padding: 0;
    }
  }
`;