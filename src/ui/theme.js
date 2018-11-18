import { createGlobalStyle, css } from 'styled-components';
import normalize from 'normalize.css/normalize.css';

import { rgba } from 'utils';


export const color = {
  primary: '#4b32c3',
  secondary: '#393e41',
  tertiary: '#eaeaea',
  success: '#44c139',
  error: '#e41717',
};

const globalStyles = css`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  html {
    -ms-overflow-style: scrollbar;
  }

  body {
    position: relative;
    min-width: 32rem;
    font-family: 'Rubik', sans-serif;
    font-weight: 400;
    line-height: 1.3;
    color: ${color.secondary};
  }
  
  .react-select {
  
    &__control {
      border-color: ${color.tertiary} !important;
      transition: 0.1s !important;
      cursor: pointer !important;
      
      &--is-focused {
        border-color: ${color.primary} !important;
        box-shadow: none !important;
        
        .react-select {
        
          &__dropdown-indicator {
            color: ${color.primary} !important;
          }
        }
      }
    }
    
    &__menu {
      border: 1px solid ${color.tertiary};
      box-shadow: none !important;
    }
    
    &__option {
      color: ${color.secondary} !important;
      transition: 0.1s !important;
      cursor: pointer !important;
      
      &--is-focused {
        background-color: ${rgba(color.primary, 0.2)} !important;
      }
      
      &--is-selected {
        color: #ffffff !important;
        background-color: ${color.primary} !important;
      }
    }
    
    &__single-value {
      color: ${color.secondary} !important;
    }
    
    &__indicator-separator {
      display: none;
    }
    
    &__dropdown-indicator {
      color: ${color.tertiary} !important;
      transition: 0.1s !important;
    }
  }
  
  .react-tooltip {
    font-size: 12px;
    background-color: ${color.secondary} !important;
    padding-top: 5px;
    padding-right: 10px;
    padding-bottom: 5px;
    padding-left: 10px;
    
    &.show {
      opacity: 1 !important;
    }
  }
`;


export const GlobalStyles = createGlobalStyle`${normalize} ${globalStyles}`;
