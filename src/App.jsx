import React from "react";
import styled from "styled-components";
// import WebtoonContent from "./views/components/webtoonContent";
import Nav from "./views/components/nav";
import { Route, Routes } from "react-router-dom";

export default function App() {
  let webtoonKey = ["all", "naver", "kakao"];
  return (
    <Container>
      <h1>웹툰 모음집</h1>
      {webtoonKey.map((val, index) => {
        return (
          <Nav webtoonKey={val} index={index} key={index}>
            dd
          </Nav>
        );
      })}
      <Routes>
        <Route path={"/"}></Route>
      </Routes>
      {/* <WebtoonContent></WebtoonContent> */}
    </Container>
  );
}

const Container = styled.div`
  background-color: lightgray;
  width: 100vw;
  display: flex;
`;
