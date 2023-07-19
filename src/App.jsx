import React, { useState } from "react";
import styled from "styled-components";
// import WebtoonContent from "./views/components/webtoonContent";
import Nav from "./views/components/nav";
import { Route, Routes } from "react-router-dom";
import WebtoonPage from "./page/webtoonPage";

export default function App() {
  let pageKey = ["", "all", "naver", "kakao", "kakaopage"];
  return (
    <Container>
      <Nav pageKey={pageKey}></Nav>
      <Routes>
        <Route path="/" element={<WebtoonPage />} />
        <Route path="/all" element={<WebtoonPage />} />
        <Route path="/naver" element={<WebtoonPage />} />
        <Route path="/kakao" element={<WebtoonPage />} />
        <Route path="/kakaoPage" element={<WebtoonPage />} />
      </Routes>
    </Container>
  );
}

const Container = styled.div`
  background-color: lightgray;
  width: 100vw;
  display: flex;
`;
