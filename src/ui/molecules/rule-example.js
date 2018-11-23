import * as React from 'react';
import styled, { css } from 'styled-components';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/styles/hljs';

import { Input } from 'ui/atoms';
import { color } from 'ui/theme';


const Header = styled.div`
  position: relative;
  text-align: center;
  border-right: 1px solid ${color.tertiary};
  border-left: 1px solid ${color.tertiary};
  padding-top: 15px;
  padding-bottom: 10px;
  
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    width: calc(100% + 2px);
    height: 5px;
    transform: translateX(-50%);
  }
  
  ${props => css`
    
    ${props.theme === 'correct' && css`

      &:after {
        background-color: ${color.success};
      }
    `}
    
    ${props.theme === 'incorrect' && css`

      &:after {
        background-color: ${color.error};
      }
    `}
  `}
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 300px;
  
  ${Input} {
    flex-grow: 1;
    border-radius: 0;
  }

  pre {
    flex-grow: 1;
    border: 1px solid ${color.tertiary};
    margin-top: 0;
    margin-bottom: 0;
  }
`;


export const RuleExample = (props) => {
  return (
    <Wrapper className={ props.className }>
      <Header theme={ props.theme }>{ props.theme === 'correct' ? 'Correct code' : 'Incorrect code' }</Header>
      {
        !props.isEditingModeEnabled ?
          <SyntaxHighlighter language='javascript' style={ tomorrow }>{ props.code }</SyntaxHighlighter>
          :
          <Input { ...props.inputAttributes }/>
      }
    </Wrapper>
  );
};
