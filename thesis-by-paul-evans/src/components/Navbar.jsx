import styled from "styled-components";
import logo from "../assets/lipusPluslogo.avif";

const StyledNav = styled.nav`
  padding-left: 80px;
  padding-top: 30px;
  padding-bottom: 30px;
  overflow-x: hidden;
  overflow-y: hidden;
  z-index: 100;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  @media screen and (max-width: 478px) {
    padding-left: 40px;
  }

  @media screen and (max-width: 360px) {
    padding-left: 20px;
    padding-top: 15px;
    padding-bottom: 15px;
  }
`;

const StyledImg = styled.img`
  text-align: center;
  width: 20%;
  height: auto;
  margin-right: 1em;
  margin-top: 1em;
  padding-bottom: 0.75em;

  @media screen and (max-width: 767px) {
    width: 30%;
  }

  @media screen and (max-width: 478px) {
    width: 40%;
  }
`;

const Navbar = () => {
  return (
    <StyledNav>
      <StyledImg src={logo} alt="The company logo LipusPlus." />
    </StyledNav>
  );
};
export default Navbar;
