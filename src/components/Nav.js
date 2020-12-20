import React from "react";
import { NavLink, Link } from "react-router-dom";
import styled from "@emotion/styled";

const Navigation = styled.header`
  width: 100%;
  border-bottom: 1px solid #222;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 100px 0;
  height: 140px;
  margin-bottom: 60px;
  background: #f8f8f8;

  a {
    color: #222;
    opacity: 0.55;
    transition: all 0.6s;
    color: #222;
    font-size: 1em;
  }

  a:hover {
    opacity: 1;
  }

  @media only screen and (max-width: 800px) {
    padding: 0px;
  }

  @media only screen and (max-width: 600px) {
    height: auto;
    min-height: 50px;
    display: block;
    position: relative;
  }
`;

const Logo = styled.div`
  .logo a {
    padding-top: 33px;
    display: flex;
    flex-direction: column;
    clear: both;
    padding-bottom: 30px;
    text-decoration: none;

    h3 {
      width: 500px;
      display: block;
    }
  }

  @media only screen and (max-width: 800px) {
    .logo {
      padding-left: 15px;
      padding-top: 0px !important;
    }
  }
  @media only screen and (max-width: 600px) {
    .logo {
      width: 100%;
      display: block;
      padding-top: 20px;
      margin: 0px;
      margin-left: -5px;
    }
  }
`;

const NavMenu = styled.nav`
  nav {
    ul {
      display: flex;
      justify-content: space-between;
    }
    li {
      margin: 0 15px;
      justify-content: space-between;
      font-size: 1em;
    }
  }

  @media only screen and (max-width: 600px) {
    li {
      padding: 15px 10px;
      margin: 0px 0px;
      width: 100%;
    }
  }
`;

const NavMenuLink = styled(NavLink)`
  font-size: 1em;
  text-decoration: none;

  .active {
    color: tomato;
  }

  &.active {
    color: #222;
  }
`;

const Nav = () => {
  return (
    <Navigation>
      <Logo>
        <Link to="/">
          <h3>Sup De Vinci</h3>
        </Link>
      </Logo>
      <NavMenu>
        <ul>
          <NavMenuLink activeClassName="active" to="/">
            <li>Blog</li>
          </NavMenuLink>
          <NavMenuLink activeClassName="active" to="/authors">
            <li>Our Authors</li>
          </NavMenuLink>
          <NavMenuLink activeClassName="active" to="/contact">
            <li>Post Here</li>
          </NavMenuLink>
        </ul>
      </NavMenu>
    </Navigation>
  );
};

export default Nav;
