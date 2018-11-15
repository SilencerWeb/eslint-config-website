import * as React from 'react';
import styled, { css } from 'styled-components';

import { Check } from 'ui/outlines';
import { color } from 'ui/theme';
import { rgba } from 'ui/utils';


const Name = styled.h3`
  font-size: 16px;
  font-weight: 500;
  color: ${rgba(color.secondary, 0.7)};
  margin-top: 0;
  margin-bottom: 0;
  transition: 0.1s;
`;

const StyledCheck = styled(Check)`
  margin-left: 5px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;

const Description = styled.p`
  font-size: 14px;
  color: ${rgba(color.secondary, 0.7)};
  margin-top: 0;
  margin-bottom: 0;
  transition: 0.1s;
`;

const Wrapper = styled.div`
  cursor: pointer;
  
  &:hover {
  
    ${Name} {
      color: ${color.secondary};
    }
    
    ${Description} {
      color: ${color.secondary};
    }
  }

  ${props => css`
    
    ${props.isActive && css`
  
      &:hover {
      
        ${Name} {
          color: ${color.primary};
        }
        
        ${Description} {
          color: ${color.secondary};
        }
      }

      ${Name} {
        color: ${color.primary};
      }
      
      ${Description} {
        color: ${color.secondary};
      }
    `}
  `}
`;


export const Rule = (props) => {
  return (
    <Wrapper className={ props.className } isActive={ props.isActive }>
      <Header>
        <Name>{ props.name }</Name>
        { props.isChecked && <StyledCheck width={ 15 } height={ 15 } fill={ color.primary }/> }
      </Header>
      <Description>{ props.description }</Description>
    </Wrapper>
  );
};
