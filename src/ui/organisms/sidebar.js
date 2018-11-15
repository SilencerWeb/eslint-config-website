import * as React from 'react';
import styled from 'styled-components';

import { Search, Heading } from 'ui/atoms';
import { Rule } from 'ui/molecules';
import { color } from 'ui/theme';


const StyledSearch = styled(Search)`
  margin-bottom: 30px;
`;

const StyledRule = styled(Rule)`
  margin-bottom: 10px;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const Wrapper = styled.div`
  width: 20%;
  min-width: 300px;
  height: 100vh;
  border-right: 1px solid ${color.tertiary};
  padding-top: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
  padding-left: 20px;
  overflow-x: hidden;
  overflow-y: auto;
`;


export const Sidebar = (props) => {
  return (
    <Wrapper className={ props.className }>
      <StyledSearch placeholder={ 'Type a rule here...' }/>

      <Heading as={ 'h2' }>Rules</Heading>
      { props.rules && props.rules.map((rule) => (
        <StyledRule
          name={ rule.name }
          description={ rule.description }
          isActive={ rule.isActive }
          isChecked={ rule.isChecked }
          key={ rule.name }
        />
      )) }
    </Wrapper>
  );
};
