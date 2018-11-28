import * as React from 'react';
import styled, { css } from 'styled-components';

import { Heading, Button, Overlay, Link } from 'ui/atoms';


const StyledHeading = styled(Heading)`
  font-size: 25px;
  margin-bottom: 15px;
`;

const Text = styled.p`
  margin-top: 0;
  margin-bottom: 10px;
  
  &:last-child {
    margin-bottom: 15px;
  }
`;

const StyledButton = styled(Button)`
  align-self: flex-end;
`;

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 999;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 4px;
  padding-top: 30px;
  padding-right: 20px;
  padding-bottom: 30px;
  padding-left: 20px;
  transform: translate(-50%, -50%);
  opacity: 0;
  visibility: hidden;
  transition: 0.3s;
  
  img {
    vertical-align: top;
    max-width: 100%;
    margin-bottom: 10px;
  }
  
  ${props => css`
  
    ${props.isVisible && css`
      opacity: 1;
      visibility: visible;
    `}
  `}
`;


export const EditingModeModal = (props) => {
  return (
    <React.Fragment>
      <Wrapper className={ props.className } isVisible={ props.isVisible }>
        <StyledHeading as={ 'h2' }>Thank you for deciding to help the project!</StyledHeading>
        <Text>
          Now you can add rule examples and rule option descriptions, all information you can get&nbsp;
          <Link href={ 'https://eslint.org/docs/rules/' } target={ '_blank' }>here</Link>.
        </Text>
        <Text>
          Please note, that every example should be divided by each other using 2 lines like this:
        </Text>
        <img src={ 'https://image.prntscr.com/image/Gq7RxAgWRSa-Qd08zuPz8w.png' } alt={ '' }/>
        <Text>
          For leaving this mode you need to type TURN OFF EDITING MODE in the search input and then press Enter.
        </Text>
        <Text>
          If you have any questions, bug reports or feature requests, don't hesitate to&nbsp;
          <Link href={ 'https://twitter.com/messages/compose?screen_name=silencerweb' } target="_blank">contact me in the twitter</Link>&nbsp;
          or&nbsp;
          <Link href={ 'https://github.com/SilencerWeb/eslint-config-website/issues/new' } target="_blank"> open an issue on github</Link>.
        </Text>
        <StyledButton onClick={ props.onCloseButtonClick }>Close</StyledButton>
      </Wrapper>

      <Overlay isVisible={ props.isVisible }/>
    </React.Fragment>
  );
};
