import * as React from 'react';
import styled, { css } from 'styled-components';


const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  visibility: hidden;
  transition: 0.3s;
  
  ${p => css`
  
    ${p.isVisible && css`
      opacity: 1;
      visibility: visible;
    `}
  `}
`;


export const Overlay = (props) => {
  return (
    <Wrapper className={ props.className } isVisible={ props.isVisible }/>
  );
};
