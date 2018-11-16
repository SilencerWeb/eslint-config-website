import styled, { css } from 'styled-components';

import { color } from 'ui/theme';


export const Switcher = styled.div`
  position: relative;
  width: 34px;
  height: 20px;
  border-radius: 15px;
  box-shadow: inset 0 0 0 1px #d5d5d5;
  cursor: pointer;
  
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 20px;
    height: 20px;
    border-radius: 15px;
    background: rgba(19, 191, 17, 0);
    transition: 0.2s ease-in-out;
  }
  
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 20px;
    height: 20px;
    background: #ffffff;
    border-radius: 15px;
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2), 0 2px 4px rgba(0, 0, 0, 0.2);
    transition: 0.2s ease-in-out;
  }
  
  ${props => css`
    
    ${props.size === 'large' && css`
      transform: scale(1.4);
    `}
    
    ${props.isActive && css`
      
      &:before {
        width: 36px;
        background: ${color.primary};
      }
      
      &:after {
        left: 16px;
        box-shadow: inset 0 0 0 1px ${color.primary}, 0 2px 4px rgba(0, 0, 0, 0.2);
      }  
    `}
  `}
`;
