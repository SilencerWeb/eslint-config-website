import * as React from 'react';
import styled, { keyframes } from 'styled-components';

import { color } from '../theme';


const spinAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  
  100% {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  position: relative;
  width: 76.5px;
  height: 76.5px;
  
  span {
    position: absolute;
    width: 76.5px;
    height: 76.5px;
    border: 6px solid ${color.primary};
    border-color: ${color.primary} transparent transparent transparent;
    border-radius: 50%;
    animation: ${spinAnimation} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    
    &:nth-child(1) {
      animation-delay: -0.45s;
    }
    
    &:nth-child(2) {
      animation-delay: -0.3s;
    }
    
    &:nth-child(3) {
      animation-delay: -0.15s;
    }
  }
`;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
`;


export const Loader = (props) => {
  return (
    <Wrapper className={ props.className }>
      <Spinner>
        <span/>
        <span/>
        <span/>
      </Spinner>
    </Wrapper>
  );
};
