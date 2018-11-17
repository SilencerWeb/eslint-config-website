import * as React from 'react';
import styled from 'styled-components';
import ReactList from 'react-list';

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
  const handleSearchKeyPress = (e) => {
    if (e.key === 'Enter') {
      props.onSearchEnterPress(e.currentTarget.value);
    }
  };

  const handleSearchChange = (e) => {
    if (e.currentTarget.value.length === 0) {
      props.onSearchEnterPress(e.currentTarget.value);
    }
  };

  return (
    <Wrapper className={ props.className }>
      <StyledSearch placeholder={ 'Type a rule here...' } onKeyPress={ handleSearchKeyPress } onChange={ handleSearchChange }/>

      <Heading as={ 'h2' }>Rules</Heading>
      <RulesWrapper>
        {
          props.rules ?
            <ReactList
              itemRenderer={ (i, key) => (
                <StyledRule
                  name={ props.rules[i].name }
                  description={ props.rules[i].shortDescription }
                  isActive={ props.rules[i].isActive }
                  isRecommended={ props.rules[i].isRecommended }
                  isFixable={ props.rules[i].isFixable }
                  isTurnedOn={ props.rules[i].isTurnedOn }
                  onClick={ props.onRuleClick }
                  onSwitcherClick={ props.onSwitcherClick }
                  key={ key }
                />
              ) }
              length={ props.rules.length }
            />
            : 'No rules found'
        }
      </RulesWrapper>

      <Footer>
        <Button onClick={ props.onDownloadConfigButtonClick }>Download config</Button>
      </Footer>
    </Wrapper>
  );
};
