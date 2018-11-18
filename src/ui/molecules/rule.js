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
    position: relative;
    z-index: 9;
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


export class Rule extends React.Component {

  shouldComponentUpdate = (nextProps) => {
    return nextProps.isTurnedOn !== this.props.isTurnedOn || nextProps.isActive !== this.props.isActive;
  };

  render = () => {

    return (
      <Wrapper className={ this.props.className } isActive={ this.props.isActive }>
        <Header>
          <HeaderSide onClick={ () => this.props.onClick(this.props.name) }>
            <Name>{ this.props.name }</Name>
            {
              this.props.isRecommended &&
              <React.Fragment>
                <Check data-tip data-for={ `rule-check-icon-${ this.props.name }` } width={ 14 } height={ 14 }/>
                <ReactTooltip id={ `rule-check-icon-${this.props.name}` } className={ 'react-tooltip' } effect={ 'solid' } delayShow={ 500 }>
                  <span>Recommended</span>
                </ReactTooltip>
              </React.Fragment>
            }
            {
              this.props.isFixable &&
              <React.Fragment>
                <Wrench data-tip data-for={ `rule-wrench-icon-${ this.props.name }` } width={ 14 } height={ 14 }/>
                <ReactTooltip id={ `rule-wrench-icon-${this.props.name}` } className={ 'react-tooltip' } effect={ 'solid' } delayShow={ 500 }>
                  <span>Fixable</span>
                </ReactTooltip>
              </React.Fragment>
            }
          </HeaderSide>

          <Switcher
            data-tip
            data-for={ `rule-switcher-${this.props.name}` }
            isActive={ this.props.isTurnedOn }
            onClick={ () => this.props.onSwitcherClick(this.props.name, !this.props.isTurnedOn) }
          />
          <ReactTooltip id={ `rule-switcher-${this.props.name}` } className={ 'react-tooltip' } effect={ 'solid' } delayShow={ 750 }>
            <span>{ this.props.isTurnedOn ? 'Turn off' : 'Turn on' }</span>
          </ReactTooltip>
        </Header>
        <Description onClick={ () => this.props.onClick(this.props.name) }>{ this.props.description }</Description>
      </Wrapper>
    );
  };
};
