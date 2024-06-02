import React, { forwardRef, useEffect, useRef, useState } from "react";
import styled, { keyframes, css } from "styled-components";
import hostImg from "../assets/sebastainCarnefeldt.png";
import CountdownTimer from "../components/CountdownTimer";

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

const StyledEventMain = styled.section`
  max-width: 100vw;
  min-width: 100vw;
  overflow-x: hidden;
  overflow-y: hidden;
  display: Grid;
  grid-template-columns: 50% 50%;
  grid-template-areas: "Context event";

  @media screen and (max-width: 960px) {
    grid-template-columns: 100%;
    grid-template-rows: auto auto;
    grid-template-areas:
      "Context"
      "event";
  }
`;

const StyledEvent = styled.div`
  grid-area: Context;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding-top: 50px;
  padding-right: 50px;
  padding-bottom: 50px;
  padding-left: 80px;
  color: #2c2c2c;

  ${({ isInView }) =>
    isInView &&
    css`
      animation: ${slideInFromLeft} 1s ease-out forwards;
    `}

  @media screen and (max-width: 478px) {
    padding-left: 40px;
  }

  @media screen and (max-width: 360px) {
    width: 90%;
    padding-top: 15px;
    padding-left: 20px;
  }
`;

const StyledAboutEvent = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 5em;
`;

const StyledHostContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 50px;

  @media screen and (max-width: 960px) {
    padding-bottom: 0px;
  }
`;

const StyledImgContainer = styled.div`
  width: 50%;
`;

const StyledHostImg = styled.img`
  width: 80%;
  object-fit: cover;
`;

const StyledIdent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const StyledWebinarContainer = styled.div`
  grid-area: event;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const StyledCountdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  color: black;
`;

const StyledEmbeddedWebinar = styled.div`
  margin-top: 5em;
  margin-bottom: 5em;
  padding: 56.25% 0 0 0;
  position: relative;
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const Event = forwardRef((props, ref) => {
  // Define target date and time here
  const targetDate = "2024-08-30T18:00:00";

  const contentRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => {
      if (contentRef.current) {
        observer.unobserve(contentRef.current);
      }
    };
  }, []);

  return (
    <StyledEventMain>
      <StyledEvent ref={contentRef} isInView={isInView}>
        <StyledAboutEvent>
          <h4>About the Webinar</h4>

          <p>
            Ligament tears, patellar dislocations, and meniscal injuries are
            frequent, requiring proper diagnosis and treatment for players to
            return to the game safely. In the seminar you will gain:{" "}
          </p>

          <li>Understanding how elite physios work with LipusPlus </li>
          <li>Latest research findings on LIPUS </li>
          <li>
            How our Return To Play concept can help your club and athletes
            recover faster{" "}
          </li>
        </StyledAboutEvent>

        <StyledHostContainer>
          <StyledImgContainer>
            <StyledHostImg
              src={hostImg}
              alt="Physiotherapist Sebastian Carnefeldt."
            />
          </StyledImgContainer>

          <StyledIdent>
            <h6>Broadcasted LIVE only</h6>
            <p>
              Hosted by Sebastian Carnefelt, Lic. Chiropractor at LipusPlus
              Institute.
            </p>
          </StyledIdent>
        </StyledHostContainer>
      </StyledEvent>

      <StyledWebinarContainer>
        <StyledCountdownContainer>
          <h4>Event starting in</h4>
          <CountdownTimer targetDate={targetDate} />
        </StyledCountdownContainer>

        <StyledEmbeddedWebinar>
          <iframe
            src="https://vimeo.com/event/4326349/embed/interaction"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          ></iframe>
        </StyledEmbeddedWebinar>
      </StyledWebinarContainer>
    </StyledEventMain>
  );
});
export default Event;
