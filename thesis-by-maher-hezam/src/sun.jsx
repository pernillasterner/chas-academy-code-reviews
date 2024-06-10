import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

const waveAnimation = keyframes`
  0% { border-radius: 50%; transform: scale(1); }
  20% { border-radius: 48%; transform: scale(0.98); }
  30% { border-radius: 45%; transform: scale(0.95); }
  40% { border-radius: 44%; transform: scale(0.93); }
  50% { border-radius: 43%; transform: scale(0.92); }
  60% { border-radius: 42%; transform: scale(0.94); }
  70% { border-radius: 45%; transform: scale(0.95); }
  80% { border-radius: 48%; transform: scale(0.98); }
  100% { border-radius: 50%; transform: scale(1); }
`;

const StyledSun = styled.nav`
  height: 15rem;
  width: 15rem;
  border-radius: 50%;
  background-color: #FFB347;
  border: 2px solid orange;
  animation: ${waveAnimation} 15s ease-in-out infinite;
`;

function Sun() {
  return (
    <StyledSun as={motion.div}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 5.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01]
      }}
      aria-label="Animerad sol"
    ></StyledSun>
  );
}

export default Sun;
