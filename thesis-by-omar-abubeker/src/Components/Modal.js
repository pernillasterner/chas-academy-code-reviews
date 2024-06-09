import React from "react";
import styled from "styled-components";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Plick from "../Assets/plick_rf_black.png";

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  animation-name: change;
  animation-duration: .5s;

  @keyframes change {
    from {opacity: 0%;}
    to {opacity: 100%;}
  }
`;

const ModalContent = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 10px 10px 30px;
  width: 300px;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const StyledLogo = styled.img`
  height: 2em;
  cursor: pointer;
`;

const Inputfield = styled.input`
  width: 230px;
  padding: 10px 18px;
  border-radius: 6px;
  border: 1px solid #0d0d0d;
  box-sizing: border-box;
  margin-bottom: 10px;
`;

const Submitbtn = styled.button`
  width: 230px;
  padding: 10px 18px;
  border-radius: 6px;
  border: 1px solid #0d0d0d;
  background-color: #0d0d0d;
  color: #fff;
  box-sizing: border-box;
  margin-bottom: 10px;
  cursor: pointer;
  font-family: inter;
`;

const GButton = styled(Submitbtn)`
  background-color: #f1f1f1;
  color: #0d0d0d;
  display: flex;
  align-items: center;
`;

const FButton = styled(Submitbtn)`
  background-color: #395185;
  display: flex;
  align-items: center;
`;

const StyledLink = styled.a`
  text-decoration: underline;
  cursor: pointer;
`;

const Rblock = styled.div`
  display: flex;
  justify-content: space-between;
  width: 230px;
  font-size: 12px;
  margin-bottom: 10px;
`;

const CbxBlock = styled.div`
  display: flex;
  align-items: center;
`;

const Line = styled.div`
  border-top: 1px solid #0d0d0d;
  height: 50%;
  width: 35%;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SttBlock = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const LogText = styled.h2`
justify-self: baseline;
align-self: baseline;
margin-left: 35px;
`

const StyledFaFacebookF = styled(FaFacebookF)`
  margin-right: 8px;
  font-size: 20px;
`;

const StyledGoogleWrapper = styled.span`
  display: flex;
  align-items: center;
  margin-right: 8px;
  font-size: 20px;
`;

const Par = styled.p`
  padding: 0px 10px;
  font-family: inter;
  font-size: 13px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

const Checkbox = (props) => <input type="checkbox" {...props} />;

const Modal = ({ show, handleClose }) => {
  if (!show) {
    return null;
  }

  const handleClickOutside = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  return (
    <ModalBackground onClick={handleClickOutside}>
      <ModalContent>
        <StyledLogo src={Plick} alt="Logo" />
        <CloseButton onClick={handleClose}>&times;</CloseButton>
        <LogText>Logga in</LogText>
        <StyledForm>
          <Inputfield
            placeholder="Email address"
            type="text"
            id="username"
            name="username"
          />
          <Inputfield
            placeholder="Lösenord"
            type="password"
            id="password"
            name="password"
          />
          <Submitbtn type="submit">Logga in</Submitbtn>
          <Rblock>
            <CbxBlock>
              <Checkbox id="Cbx" />
              <label htmlFor="Cbx">Kom ihåg mig</label>
            </CbxBlock>
            <StyledLink>Glömt lösenord?</StyledLink>
          </Rblock>
          <SttBlock>
            <Line />
            <Par>ELLER</Par>
            <Line />
          </SttBlock>
          <GButton>
            <StyledGoogleWrapper>
              <FcGoogle />
            </StyledGoogleWrapper>
            Fortsätt med Google
          </GButton>
          <FButton>
            <StyledFaFacebookF />
            Fortsätt med Facebook
          </FButton>
        </StyledForm>
      </ModalContent>
    </ModalBackground>
  );
};

export default Modal;
