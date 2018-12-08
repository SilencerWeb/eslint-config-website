import * as React from 'react';
import styled, { css } from 'styled-components';
import AceEditor from 'react-ace';

import { color } from 'ui/theme';

import 'brace/mode/javascript';
import 'brace/theme/tomorrow';


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
  min-height: 500px;
`;


export const RuleExample = (props) => {
  return (
    <Wrapper className={ props.className }>
      <Header theme={ props.theme }>{ props.theme === 'correct' ? 'Correct code' : 'Incorrect code' }</Header>
      <AceEditor
        name={ props.name }
        value={ props.value }
        mode={ 'javascript' }
        theme={ 'tomorrow' }
        width={ '100%' }
        height={ '100%' }
        fontSize={ 14 }
        readOnly={ !props.isEditingModeEnabled }
        wrapEnabled={ true }
        showPrintMargin={ false }
        showGutter={ false }
        highlightActiveLine={ props.isEditingModeEnabled }
        setOptions={ {
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
          showLineNumbers: false,
          tabSize: 2,
        } }
        style={ { border: `1px solid ${props.error ? color.error : color.tertiary}` } }
        onChange={ props.onChange }
      />
    </Wrapper>
  );
};
