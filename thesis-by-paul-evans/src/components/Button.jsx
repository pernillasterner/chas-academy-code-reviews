import styled from "styled-components";

const StyledButton = styled.button`
  width: 240px;
  margin-top: 40px;
  margin-bottom: 40px;
  border: none;
  border-radius: 8px;
  background-color: #1366f7;
  color: white;
  cursor: pointer;
`;

const StyledButtonText = styled.p`
  font-size: 20px;
  font-weight: 600;
`;

const Button = ({ onClick }) => {
  const handleClick = () => {
    onClick();
  };

  return (
    <StyledButton onClick={onClick}>
      <StyledButtonText>Sign Up</StyledButtonText>
    </StyledButton>
  );
};
export default Button;
