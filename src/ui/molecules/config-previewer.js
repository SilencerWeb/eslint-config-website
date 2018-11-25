import * as React from 'react';
import styled from 'styled-components';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import AceEditor from 'react-ace';
import 'brace/mode/json';
import 'brace/theme/tomorrow';

import { Button } from 'ui/atoms';
import { color } from 'ui/theme';

import { generateConfig } from 'utils';


const Footer = styled.div`
  flex-shrink: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border-top: 1px solid ${color.tertiary};
  padding-top: 10px;
  padding-right: 20px;
  padding-bottom: 10px;
  padding-left: 20px;
  margin-top: 20px;
  margin-right: -20px;
  margin-left: -20px;
  
  ${Button} {
    margin-right: 15px;
    
    &:last-child {
      margin-right: 0;
    }
  }
`;

const Wrapper = styled.div`
  flex: 0 1 80%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  padding-right: 20px;
  padding-left: 20px;
  overflow-x: hidden;
  overflow-y: auto;
`;


export const ConfigPreviewer = (props) => {
  const config = props.rules && generateConfig(props.rules);

  return (
    <Wrapper className={ props.className }>
      <AceEditor
        value={ config }
        mode={ 'json' }
        theme={ 'tomorrow' }
        width={ '100%' }
        height={ '100%' }
        fontSize={ 14 }
        readOnly={ true }
        wrapEnabled={ true }
        showPrintMargin={ false }
        showGutter={ false }
        highlightActiveLine={ false }
      />

      <Footer>
        <Button onClick={ props.onCloseButtonClick }>Close</Button>
        <CopyToClipboard text={ config }>
          <Button>Copy</Button>
        </CopyToClipboard>
      </Footer>
    </Wrapper>
  );
};
