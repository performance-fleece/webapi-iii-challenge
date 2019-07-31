import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavBar = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0px 40px;
  a {
    font-weight: bold;
    text-decoration: none;
    color: black;
    padding: 10px 0;
  }
  border-top: 1px solid black
  border-bottom: 1px solid black
`;

const Header = props => {
  return (
    <div>
      <h1>WebApi-III-Challenge</h1>
      <NavBar>
        <Link to="/">Users</Link>
      </NavBar>
    </div>
  );
};

export default Header;
