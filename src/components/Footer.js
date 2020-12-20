import React from "react";
import styled from "@emotion/styled";

const StyledFooter = styled.div`
  margin-top: 1rem;
  padding: 1rem;
  background-color: rgb(235, 195, 64);
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  font-size: 0.6em;
  text-align: center;
`;

const Footer = () => (
  <StyledFooter>
    <div className="footer">
      <p>Sup De Vinci -- Have a :) day 2021</p>
    </div>
  </StyledFooter>
);

export default Footer;
