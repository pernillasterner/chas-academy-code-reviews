import React from "react";
import styled, { keyframes } from "styled-components";
import heroImage from "../assets/heroImage.png";
import Button from "../components/Button";

const slideInFromLeft = keyframes`
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const StyledHeroMain = styled.section`
  max-width: 100%;
  min-width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const StyledImg = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  align-self: flex-start;
  object-fit: cover;
`;

const StyledHeroContents = styled.div`
  width: 40%;
  height: 100%;
  padding-top: 50px;
  padding-left: 80px;
  padding-bottom: 50px;
  display: flex;
  flex-direction: column;
  z-index: 99;

  @media screen and (max-width: 960px) {
    width: 60%;
  }

  @media screen and (max-width: 767px) {
    width: 80%;
  }

  @media screen and (max-width: 478px) {
    padding-left: 40px;
    padding-top: 30px;
  }

  @media screen and (max-width: 360px) {
    width: 90%;
    padding-top: 15px;
    padding-left: 20px;
  }
`;

const StyledAnimatedHeading = styled.div`
  opacity: 0;
  animation: ${slideInFromLeft} 1s ease-out 0.5s forwards;
`;

const Hero = ({ scrollToEvent }) => {
  return (
    <StyledHeroMain>
      <StyledImg
        src={heroImage}
        alt="A hammarby handball player in green and white stripes holds a ball."
      />

      <StyledHeroContents>
        <h5>LipusPLUS® IN PROFESSIONAL SPORTS</h5>

        <StyledAnimatedHeading>
          <h1>
            “The LipusPlus® enables us to treat players in greater extent and
            while on the move between games.”
          </h1>
        </StyledAnimatedHeading>

        <p>- Anne Hopfgarten</p>

        <p>
          Learn more by joining our LipusPlus seminar, hosted by chiropractor
          Sebastian Carnefeldt.
        </p>

        <Button onClick={scrollToEvent} />
      </StyledHeroContents>
    </StyledHeroMain>
  );
};
export default Hero;
