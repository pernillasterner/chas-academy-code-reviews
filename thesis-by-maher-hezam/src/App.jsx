import React, { useState } from 'react';
import styled from 'styled-components';
import logo from './assets/logo.svg';
import Sun from './sun';

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  margin: 0;
  width: 100vw;
  background-color: #F1F1F1;
  min-height: 100vh;
  position: relative;
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 1rem;
`;

const NavWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;

  @media (max-width: 480px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const LogoContainer = styled.div`
  position: absolute;
  left: 1rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: 480px) {
    position: static;
    margin-bottom: 0.5rem;
  }
`;

const StyledImg = styled.img`
  width: 10rem;

  @media (max-width: 480px) {
    width: 8rem;
  }
`;

const Title = styled.h1`
  font-size: 2.5em;
  text-align: center;
  color: black;
  margin: 0;
  font-family: 'brown', sans-serif;

  @media (max-width: 768px) {
    font-size: 2em;
  }

  @media (max-width: 480px) {
    font-size: 1.75em; 
    margin-top: 0.5rem;
  }
`;

const StyledPara = styled.p`
  font-size: 1.25em; 
  color: black;
  text-align: center;
  font-family: 'brown', sans-serif;

  @media (max-width: 768px) {
    font-size: 1.2em;
  }

  @media (max-width: 480px) {
    font-size: 1.1em; 
  }
`;

const GiftcardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #E3E3E3;
  width: 100vw;
  padding: 2rem 0;
  margin: 0;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 1.5rem 0;
  }

  @media (max-width: 480px) {
    padding: 1rem 0;
  }
`;

const SunContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BasicStyledButton = styled.button`
  height: 2.5rem;
  width: 8rem;
  background-color: #001A33;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  position: relative;
  font-family: 'brown', sans-serif;
  font-weight: 400;
  margin: 1rem;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    height: 2rem;
    width: 6.5rem;
    font-size: 1em; 
  }

  @media (max-width: 480px) {
    height: 1.8rem;
    width: 6rem;
    font-size: 0.9em; 
  }

  :hover { 
    transform: translateX(0px);
    box-shadow: none;
    background-color: #ECE0E0;
    border: none;

    &::after {
      background-color: #EFD075;
    }
    animation: buttonHover 0.5s ease-in-out;
  }

  :focus {
    outline: 5px dotted #0A715A; 
  }
`;

const GiftCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #E6F2EF;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  max-width: 600px; 
  width: 100%;
  margin: 2rem 0;
  font-family: 'brown', sans-serif;

  @media (max-width: 768px) {
    padding: 1.5rem;
    margin: 1.5rem 0;
    max-width: 500px; 
  }

  @media (max-width: 480px) {
    padding: 1rem;
    margin: 1rem 0;
    max-width: 90%;
  }
`;

const GiftCardTitle = styled.h2`
  font-size: 1.5em; 
  margin-bottom: 1rem;
  color: #001A33;
  text-align: left;
  margin-top: 0;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1.3em; 
    margin-bottom: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.1em; 
    margin-bottom: 1rem;
  }
`;

const GiftCardTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-bottom: 0.5rem;
`;

const GiftCardText = styled.p`
  font-size: 1.25em; 
  font-weight: bold;
  margin: 0.1rem;
  color: #3e4e55;

  @media (max-width: 768px) {
    font-size: 1.1em; 
  }

  @media (max-width: 480px) {
    font-size: 1em; 
  }
`;

const GiftCardTextBold = styled(GiftCardText)`
  font-size: 1em; 
  color: #506172;

  @media (max-width: 768px) {
    font-size: 0.9em; 
  }

  @media (max-width: 480px) {
    font-size: 0.8em; 
  }
`;

const GiftCardCode = styled.p`
  font-size: 1.25em; 
  color: #001A33;
  text-align: start;
  font-family: 'brown', sans-serif;
  font-weight: 400;
  margin-top: 2rem;

  @media (max-width: 768px) {
    font-size: 1.1em;
  }

  @media (max-width: 480px) {
    font-size: 1em;
  }
`;

const GiftCardCodeBold = styled.span`
  font-weight: bold;
`;

const GiftCardInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const GiftCardButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-top: 1rem;
`;

const GiftCardLinkButton = styled.button`
  background: none;
  border: none;
  color: #001a33;
  text-decoration: underline;
  font-family: 'brown', sans-serif;
  font-weight: 400;
  font-size: 1.1rem; 
  cursor: pointer;
  padding: 0;
  margin: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1rem; 
  }

  @media (max-width: 480px) {
    font-size: 0.9rem; 
  }

  :hover {
    text-decoration: none;
  }
`;

const GiftCardButton = styled(BasicStyledButton)`
  width: auto;
  margin: 0.5rem;
  background-color: #001a33;
  text-align: center;
  padding: 0 1rem;
`;

const handleUseButtonClick = () => {
  alert('Här kan du välja hur du vill använda ditt presentkort...');
};

function App() {
  const [showGiftCard, setShowGiftCard] = useState(false);

  const handleButtonClick = () => {
    setShowGiftCard(true);
  };

  return (
    <>
      <FlexContainer>
        <NavContainer>
          <NavWrapper>
            <LogoContainer>
              <StyledImg src={logo} alt="logo" />
            </LogoContainer>
            <Title>Presentkort</Title>
          </NavWrapper>
        </NavContainer>
        <GiftcardContainer>
          {showGiftCard ? (
            <GiftCard>
              <GiftCardTitle>Presentkort</GiftCardTitle>
              <GiftCardInfoContainer>
                <GiftCardTextContainer>
                  <GiftCardTextBold>Belopp kvar:</GiftCardTextBold>
                  <GiftCardText>350 kr</GiftCardText>
                </GiftCardTextContainer>
                <GiftCardTextContainer>
                  <GiftCardTextBold>Giltig t.o.m:</GiftCardTextBold>
                  <GiftCardText>2024-03-13</GiftCardText>
                </GiftCardTextContainer>
              </GiftCardInfoContainer>
              <GiftCardCode><GiftCardCodeBold>Kortkod:</GiftCardCodeBold> ABC123DEF</GiftCardCode>
              <GiftCardButtonContainer>
                <GiftCardLinkButton onClick={() => setShowGiftCard(false)}>Tillbaka</GiftCardLinkButton>
                <GiftCardButton onClick={handleUseButtonClick}>Använd</GiftCardButton>
              </GiftCardButtonContainer>
            </GiftCard>
          ) : (
            <SunContainer>
              <Sun />
              <StyledPara>Grattis, du har fått skön stund av din vän!</StyledPara>
              <BasicStyledButton onClick={handleButtonClick}>Tryck här</BasicStyledButton>
            </SunContainer>
          )}
        </GiftcardContainer>
      </FlexContainer>
    </>
  );
}

export default App;
