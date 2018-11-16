import * as React from 'react';
import styled from 'styled-components';

import { Search, Heading, Button } from 'ui/atoms';
import { Rule } from 'ui/molecules';
import { color } from 'ui/theme';


const StyledSearch = styled(Search)`
  margin-bottom: 30px;
`;

const StyledRule = styled(Rule)`
  margin-bottom: 10px;
`;

const RulesWrapper = styled.div`
  flex-grow: 0;
  flex-shrink: 1;
  padding-right: 20px;
  padding-left: 20px;
  margin-right: -20px;
  margin-left: -20px;
  overflow-x: hidden;
  overflow-y: auto;
`;

const Footer = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  text-align: center;
  background-color: #ffffff;
  border-top: 1px solid ${color.tertiary};
  padding-top: 10px;
  padding-right: 20px;
  padding-bottom: 10px;
  padding-left: 20px;
`;

const Wrapper = styled.div`
  position: relative;
  flex: 0 1 20%;
  display: flex;
  flex-direction: column;
  min-width: 300px;
  height: 100vh;
  border-right: 1px solid ${color.tertiary};
  padding-top: 20px;
  padding-right: 20px;
  padding-bottom: 58px;
  padding-left: 20px;
`;


export const Sidebar = (props) => {
  return (
    <Wrapper className={ props.className }>
      <StyledSearch placeholder={ 'Type a rule here...' }/>

      <Heading as={ 'h2' }>Rules</Heading>
      <RulesWrapper>
        { props.rules && props.rules.map((rule) => (
          <StyledRule
            name={ rule.name }
            description={ rule.shortDescription }
            isActive={ rule.isActive }
            isRecommended={ rule.isRecommended }
            isFixable={ rule.isFixable }
            isTurnedOn={ rule.isTurnedOn }
            onClick={ props.onRuleClick }
            onSwitcherClick={ props.onSwitcherClick }
            key={ rule.name }
          />
        )) }
      </RulesWrapper>

      <Footer>
        <Button onClick={ props.onDownloadConfigButtonClick }>Download config</Button>
      </Footer>
    </Wrapper>
  );
};
