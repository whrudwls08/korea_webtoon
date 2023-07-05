import React from "react";
import { BrowserRouter, Link, Routes } from "react-router-dom";
import styled from "styled-components";

function WebtoonContent() {
  return (
    <Container>
      <BrowserRouter>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/naverWebtoon">네이버</Link>
          </li>
          <li>
            <Link to="/kakaoWebtoon">카카오웹툰</Link>
          </li>
        </ul>
        <Routes></Routes>
      </BrowserRouter>
    </Container>
  );
}

const Container = styled.div`
  background-color: red;
  min-width: 100vw;
  display: flex;
  font-size: 20px;
`;

export default WebtoonContent;
