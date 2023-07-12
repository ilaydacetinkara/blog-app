import React from "react";
import styled from "styled-components";
import Hero from "./Hero";
import Welcome from "./Welcome";
import Subscribe from "./Subscribe";
import Recommend from "./Recommend";

export default function Home() {

  return (
   <>
    <Welcome/>
        <Hero/>
      {/* <Subscribe/> */}
      <Recommend/></>
  );
}