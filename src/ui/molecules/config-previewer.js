import * as React from 'react';
import styled from 'styled-components';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/styles/hljs';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import { Button } from 'ui/atoms';

import { generateConfig } from 'utils';


const Footer = styled.div`
  flex-shrink: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  
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
  padding-bottom: 20px;
  padding-left: 20px;
  overflow-x: hidden;
  overflow-y: auto;
  
  pre {
    flex-grow: 1;
    margin-top: 0;
    margin-bottom: 20px;
    padding-top: 0;
    padding-right: 0;
    padding-bottom: 0;
    padding-left: 0;
  }
`;


export const ConfigPreviewer = (props) => {
  const config = props.rules && generateConfig(props.rules);

  return (
    <Wrapper className={ props.className }>
      <SyntaxHighlighter language='json' style={ tomorrow }>
        { config }
      </SyntaxHighlighter>

      <Footer>
        <Button onClick={ props.onCloseButtonClick }>Close</Button>
        <CopyToClipboard text={ config }>
          <Button>Copy</Button>
        </CopyToClipboard>
      </Footer>
    </Wrapper>
  );
};
