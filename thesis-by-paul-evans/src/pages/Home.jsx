import { useRef } from "react";
import styled from "styled-components";
import Hero from "../components/Hero";
import Partnership from "../components/Partnership";
import Testimonial from "../components/Testimonial";
import Event from "../components/Event";

const StyledHomeContainer = styled.section`
  max-width: 100vw;
  min-width: 100vw;
  display: flex;
  flex-direction: column;
  align-content: center;
`;

const Home = () => {
  const eventRef = useRef(null);

  const scrollToEvent = () => {
    if (eventRef.current) {
      eventRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <StyledHomeContainer>
      <Hero scrollToEvent={scrollToEvent} />
      <Partnership />
      <Testimonial />
      <div ref={eventRef}></div>
      <Event />
    </StyledHomeContainer>
  );
};

export default Home;
