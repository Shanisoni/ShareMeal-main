import React from 'react';
import { motion } from 'framer-motion';
import styled, { keyframes } from 'styled-components';

const slideInPop = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px) scale(0.8);
  }
  50% {
    opacity: 0.5;
    transform: translateY(0px) scale(1.1);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

const TitleWrapper = styled(motion.h1)`
  display: inline-block;
  font-size: 32px;
  font-family: 'Arial', sans-serif;
  font-weight: bold;
  color: rgba(11, 65, 172, 0.94);
  text-align: center;
  padding: 10px 20px;
  border-radius: 18px;
  // background:rgb(83, 85, 83);  /* Soft peachy background */
  // box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  letter-spacing: 1px;
  position: relative;
  // text-transform: uppercase;
  width: 100%;
  // max-width: 100%;
  margin-top: 14px;
  margin-bottom: 10px;
  animation: ${slideInPop} 0.4s ease-in-out;

  &:hover {
    color:rgb(146, 12, 12);
    // scale: 1.05;
  }

  /* Media query for mobile */
  @media (max-width: 768px) {
    font-size: 22px;  /* Smaller font size for mobile */
    padding: 8px 16px; /* Adjust padding */
    background:rgb(184, 184, 185); /* A slightly different background color for mobile */
  }
`;

export default function Title({ title }) {
  return (
    <TitleWrapper
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      {title}
    </TitleWrapper>
  );
}
