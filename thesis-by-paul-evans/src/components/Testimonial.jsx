import { useEffect, useRef, useState } from "react";
import styled, { keyframes, css } from "styled-components";
import testimonialImage from "../assets/martinDolk.avif";
import partnershipLogo from "../assets/hammarbyLogo.avif";

const fadeUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const StyledTestimonialMain = styled.section`
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
  object-fit: cover;
`;

const StyledTestimonialGrid = styled.div`
  display: grid;
  grid-template-rows: 70% 30%;
  grid-template-columns: 50% 50%;
  grid-template-areas:
    "testimonial logo"
    "event event";
  width: 100%;
  z-index: 99;

  @media screen and (max-width: 960px) {
    grid-template-columns: 100%;
    grid-template-rows: auto auto auto;
    grid-template-areas:
      "testimonial"
      "logo"
      "event";
  }
`;

const StyledTestimonialContents = styled.div`
  grid-area: testimonial;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 200px;
  padding-top: 200px;
  padding-left: 80px;
  padding-bottom: 50px;
  padding-bottom: 200px;
  z-index: 99;

  opacity: 0;
  ${({ isInView }) =>
    isInView &&
    css`
      animation: ${fadeUp} 2s ease-out forwards;
    `}

  @media screen and (max-width: 960px) {
    width: 80%;
    padding-bottom: 100px;
  }

  @media screen and (max-width: 767px) {
    padding-bottom: 50px;
  }

  @media screen and (max-width: 478px) {
    padding-left: 40px;
  }

  @media screen and (max-width: 360px) {
    width: 90%;
    padding-top: 15px;
    padding-left: 20px;
  }
`;

const StyledLogoContainer = styled.div`
  grid-area: logo;
  width: 100%;
  padding-top: 50px;
  padding-left: 120px;
  padding-bottom: 120px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  z-index: 99;

  @media screen and (max-width: 960px) {
    padding-left: 80px;
  }

  @media screen and (max-width: 767px) {
    padding-top: 80px;
  }

  @media screen and (max-width: 478px) {
    padding-top: 40px;
    padding-left: 40px;
  }

  @media screen and (max-width: 360px) {
    padding-left: 20px;
    padding-bottom: 60px;
  }
`;

const StyledLogoImg = styled.img`
  display: flex;
  position: absolute;
  width: 25%;
  align-self: flex-start;

  @media screen and (max-width: 767px) {
    width: 40%;
  }
`;

const StyledEventHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-area: event;
  width: 100%;
  padding-top: 50px;
  padding-left: 80px;
  padding-bottom: 50px;
  padding-right: 50px;
  z-index: 98;
  background-color: #00000076;

  @media screen and (max-width: 478px) {
    padding-left: 40px;
  }

  @media screen and (max-width: 360px) {
    padding-left: 20px;
  }
`;

const StyledEventHeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  z-index: 98;
`;

const Testimonial = () => {
  const contentRef = useRef(null);
  const [contentInView, setContentInView] = useState(false);

  useEffect(() => {
    const observerContent = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setContentInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (contentRef.current) {
      observerContent.observe(contentRef.current);
    }

    return () => {
      if (contentRef.current) {
        observerContent.unobserve(contentRef.current);
      }
    };
  }, []);

  return (
    <StyledTestimonialMain>
      <StyledImg
        src={testimonialImage}
        alt="Martin Dolk in a hammarby handball kit sits on the floor with a ball between his feet."
      />

      <StyledTestimonialGrid>
        <StyledTestimonialContents ref={contentRef} isInView={contentInView}>
          <h2>
            “With the LipusPlus®, I can take charge of my own rehabilitation and
            recovery, enhancing my life as an athlete. It's the game-changer
            that keeps me in top shape. Without it I’d probably not play in the
            same extent that I do”.
          </h2>

          <p>- Martin Dolk, Hammarby Handball</p>
        </StyledTestimonialContents>

        <StyledLogoContainer>
          <StyledLogoImg
            src={partnershipLogo}
            alt="The hammarby handball logo. A yellow wreath with a green and white stripped flag in the middle with the letters H I F. "
          />
        </StyledLogoContainer>

        <StyledEventHeaderContainer>
          <StyledEventHeaderContent>
            <p className="subheading">FREE WEBINAR</p>

            <p>Fri 30th August, 2024 between 18.00 - 19.00 CET.</p>

            <h2>
              How LipusPlus® speeds up rehabilitation and recovery among
              athletes.
            </h2>
          </StyledEventHeaderContent>
        </StyledEventHeaderContainer>
      </StyledTestimonialGrid>
    </StyledTestimonialMain>
  );
};
export default Testimonial;
