import { useState, useEffect } from "react";
import styled from "styled-components";

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  return (
    <StyledContainer>
      <StyledTimeContainer>
        <StyledTimeSegment>
          <StyledTimeValue>{timeLeft.days}</StyledTimeValue>
          <StyledTimeLabel>Days</StyledTimeLabel>
        </StyledTimeSegment>

        <StyledTimeSegment>
          <StyledTimeValue>{timeLeft.hours}</StyledTimeValue>
          <StyledTimeLabel>Hours</StyledTimeLabel>
        </StyledTimeSegment>

        <StyledTimeSegment>
          <StyledTimeValue>{timeLeft.minutes}</StyledTimeValue>
          <StyledTimeLabel>Minutes</StyledTimeLabel>
        </StyledTimeSegment>

        <StyledTimeSegment>
          <StyledTimeValue>{timeLeft.seconds}</StyledTimeValue>
          <StyledTimeLabel>Seconds</StyledTimeLabel>
        </StyledTimeSegment>
      </StyledTimeContainer>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledTimeContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

const StyledTimeSegment = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 10px;
`;

const StyledTimeValue = styled.div`
  font-size: 58px;
  font-weight: bold;
  margin-bottom: 10px;
  color: black;
  padding-left: 20px;
  padding-right: 20px;

  @media (max-width: 767px) {
    font-size: 36px;
  }

  @media (max-width: 360px) {
    font-size: 28px;
    padding-left: 10px;
    padding-right: 10px;
  }
`;

const StyledTimeLabel = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: black;

  @media (max-width: 478px) {
    font-size: 18px;
  }

  @media (max-width: 360px) {
    font-size: 12px;
  }
`;

export default CountdownTimer;
