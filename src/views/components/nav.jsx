import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import styled from "styled-components";

function Nav(props) {
  return (
    <NavContent>
      <Link to={"/" + props.webtoonKey} style={{ textDecoration: "none" }}>
        {props.webtoonKey}
      </Link>
    </NavContent>
  );
}

export default Nav;

const NavContent = styled.h1`
  display: flex;
  width: 200px;
  text-decoration: none;
`;
