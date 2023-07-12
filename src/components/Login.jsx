import React from "react";
import styled from 'styled-components'

export default function Login () {
  return (
   <Section id="register">
     <div className="Layout">
    <div className="divbox">
      <h2>Login Form</h2>
      <div className="form-label-group">
          <input
            type="email"
            id="inputEmail"
            className="form-control"
            placeholder="Email address"
            required
            autoFocus
          />
          <label htmlFor="inputEmail">Email address</label>
      </div>

      <div className="form-label-group">
        <input
          type="password"
          id="inputPassword"
          className="form-control"
          placeholder="Password"
          required
        />
        <label htmlFor="inputPassword">Password</label>
      </div>
      <div>
        <input type="submit" value="Submit" />
      </div>
    </div>
  </div>
   </Section>
  );
}

const Section = styled.section`
  .divbox {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  background: #fff;
  padding: 40px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }
  .form-label-group {
    color: #821111;
  }
 
  Input {
    type: 'submit';
    background: #EED2CD;
    color: #821111;
    cursor: pointer;
    margin-bottom: 0;
    text-transform: uppercase;
    width: 100%;
    border-radius: 5px;
    height: 35px;
    border-color: transparent;
    box-shadow: 0px;
    outline: none;
    transition: 0.15s;
    text-align: center;
    font-size: 1rem;
    &:active {
      background-color: #821111;
    }
  }
`;