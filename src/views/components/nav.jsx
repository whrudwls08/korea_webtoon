import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function Nav(props) {
  const movePage = useNavigate();

  function gohome(e) {
    movePage("/" + e);
  }
  return (
    <>
      <NavContent>WebToon Collect</NavContent>
      {props.pageKey.map((val, index) => {
        return (
          <NavContent
            key={index}
            onClick={(_) => {
              gohome(val);
            }}
          >
            {val}
          </NavContent>
        );
      })}
    </>
  );
}

export default Nav;

const NavContent = styled.li`
  margin: 20px;
  display: flex;
  text-decoration: none;
  &:hover {
    cursor: pointer;
  }
`;
