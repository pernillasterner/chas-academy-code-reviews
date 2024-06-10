import styled from "styled-components";

export const Content = styled.div`
  overflowy: scroll;
  height: 2500px;
`;

export const Button = styled.div`
  position: fixed;
  width: 100%;
  left: 48.5%;
  bottom: 40px;
  height: 20px;
  font-size: 3rem;
  z-index: 99;
  cursor: pointer;
  color: #1366f7;

  @media screen and (max-width: 767px) {
    left: 80%;
  }
`;
