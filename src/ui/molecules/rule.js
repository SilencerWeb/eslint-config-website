import * as React from 'react';
import styled, { css } from 'styled-components';
import ReactTooltip from 'react-tooltip';

import { Switcher } from 'ui/atoms';
import { Check, Wrench } from 'ui/outlines';
import { color } from 'ui/theme';
import { rgba } from 'utils';


const Name = styled.h3`
  display: inline;
  font-size: 16px;
  font-weight: 500;
  color: ${rgba(color.secondary, 0.7)};
  margin-top: 0;
  margin-bottom: 0;
  transition: 0.1s;
`;

const Description = styled.p`
  font-size: 14px;
  color: ${rgba(color.secondary, 0.7)};
  margin-top: 0;
  margin-bottom: 0;
  transition: 0.1s;
`;

const HeaderSide = styled.div`
  flex-grow: 1;
  padding-right: 10px;
  padding-bottom: 5px;
    
  svg {
    display: inline;
    fill: ${rgba(color.secondary, 0.7)};
    margin-top: 2.5px;
    margin-left: 5px;
    transition: 0.1s;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  
  ${Switcher} {
    flex-shrink: 0;
  }
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
    
    ${HeaderSide} {
      
      svg {
        fill: ${color.secondary};
      }
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
        
        ${HeaderSide} {
      
          svg {
            fill: ${color.secondary};
          }
        }
      }

      ${Name} {
        color: ${color.primary};
      }
      
      ${Description} {
        color: ${color.secondary};
      }
      
      ${HeaderSide} {
    
        svg {
          fill: ${color.secondary};
        }
      }
    `}
  `}
`;


export const Rule = (props) => {
  return (
    <Wrapper className={ props.className } isActive={ props.isActive }>
      <Header>
        <HeaderSide onClick={ () => props.onClick(props.name) }>
          <Name>{ props.name }</Name>
          { props.isRecommended && <Check data-tip data-for={ `rule-check-icon-${ props.name }` } width={ 14 } height={ 14 }/> }
          { props.isFixable && <Wrench data-tip data-for={ `rule-wrench-icon-${ props.name }` } width={ 14 } height={ 14 }/> }
        </HeaderSide>

        <Switcher
          data-tip
          data-for={ `rule-switcher-${props.name}` }
          isActive={ props.isTurnedOn }
          onClick={ () => props.onSwitcherClick(props.name, !props.isTurnedOn) }
        />
      </Header>
      <Description onClick={ () => props.onClick(props.name) }>{ props.description }</Description>

      <ReactTooltip id={ `rule-check-icon-${props.name}` } className={ 'react-tooltip' } effect={ 'solid' } delayShow={ 500 }>
        <span>Recommended</span>
      </ReactTooltip>
      <ReactTooltip id={ `rule-wrench-icon-${props.name}` } className={ 'react-tooltip' } effect={ 'solid' } delayShow={ 500 }>
        <span>Fixable</span>
      </ReactTooltip>
      <ReactTooltip id={ `rule-switcher-${props.name}` } className={ 'react-tooltip' } effect={ 'solid' } delayShow={ 750 }>
        <span>{ props.isTurnedOn ? 'Turned on' : 'Turned off' }</span>
      </ReactTooltip>
    </Wrapper>
  );
};
