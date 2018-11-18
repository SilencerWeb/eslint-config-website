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

const RulesGroupWrapper = styled.div`
  margin-bottom: 30px;
  
  &:last-child {
    margin-bottom: 0;
  }
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
  const possibleErrorsRules = props.rules && props.rules.filter((rule) => rule.category === 'Possible Errors');
  const bestPracticesRules = props.rules && props.rules.filter((rule) => rule.category === 'Best Practices');
  const strictModeRules = props.rules && props.rules.filter((rule) => rule.category === 'Strict Mode');
  const variablesRules = props.rules && props.rules.filter((rule) => rule.category === 'Variables');
  const nodeJSAndCommonJSRules = props.rules && props.rules.filter((rule) => rule.category === 'Node.js and CommonJS');
  const stylisticIssuesRules = props.rules && props.rules.filter((rule) => rule.category === 'Stylistic Issues');
  const ECMAScript6Rules = props.rules && props.rules.filter((rule) => rule.category === 'ECMAScript 6');

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

      <RulesWrapper>
        {
          props.rules ?
            <React.Fragment>
              {
                possibleErrorsRules && possibleErrorsRules.length > 0 &&
                <RulesGroupWrapper>
                  <Heading as={ 'h3' }>Possible Errors</Heading>
                  <ReactList
                    itemRenderer={ (i) => (
                      <StyledRule
                        name={ possibleErrorsRules[i].name }
                        description={ possibleErrorsRules[i].shortDescription }
                        isActive={ possibleErrorsRules[i].isActive }
                        isRecommended={ possibleErrorsRules[i].isRecommended }
                        isFixable={ possibleErrorsRules[i].isFixable }
                        isTurnedOn={ possibleErrorsRules[i].isTurnedOn }
                        onClick={ props.onRuleClick }
                        onSwitcherClick={ props.onSwitcherClick }
                        key={ possibleErrorsRules[i].name }
                      />
                    ) }
                    length={ possibleErrorsRules.length }
                    threshold={ 750 }
                  />
                </RulesGroupWrapper>
              }

              {
                bestPracticesRules && bestPracticesRules.length > 0 &&
                <RulesGroupWrapper>
                  <Heading as={ 'h3' }>Best Practices</Heading>
                  <ReactList
                    itemRenderer={ (i) => (
                      <StyledRule
                        name={ bestPracticesRules[i].name }
                        description={ bestPracticesRules[i].shortDescription }
                        isActive={ bestPracticesRules[i].isActive }
                        isRecommended={ bestPracticesRules[i].isRecommended }
                        isFixable={ bestPracticesRules[i].isFixable }
                        isTurnedOn={ bestPracticesRules[i].isTurnedOn }
                        onClick={ props.onRuleClick }
                        onSwitcherClick={ props.onSwitcherClick }
                        key={ bestPracticesRules[i].name }
                      />
                    ) }
                    length={ bestPracticesRules.length }
                    threshold={ 750 }
                  />
                </RulesGroupWrapper>
              }

              {
                strictModeRules && strictModeRules.length > 0 &&
                <RulesGroupWrapper>
                  <Heading as={ 'h3' }>Strict Mode</Heading>
                  <ReactList
                    itemRenderer={ (i) => (
                      <StyledRule
                        name={ strictModeRules[i].name }
                        description={ strictModeRules[i].shortDescription }
                        isActive={ strictModeRules[i].isActive }
                        isRecommended={ strictModeRules[i].isRecommended }
                        isFixable={ strictModeRules[i].isFixable }
                        isTurnedOn={ strictModeRules[i].isTurnedOn }
                        onClick={ props.onRuleClick }
                        onSwitcherClick={ props.onSwitcherClick }
                        key={ strictModeRules[i].name }
                      />
                    ) }
                    length={ strictModeRules.length }
                    threshold={ 750 }
                  />
                </RulesGroupWrapper>
              }

              {
                variablesRules && variablesRules.length > 0 &&
                <RulesGroupWrapper>
                  <Heading as={ 'h3' }>Variables</Heading>
                  <ReactList
                    itemRenderer={ (i) => (
                      <StyledRule
                        name={ variablesRules[i].name }
                        description={ variablesRules[i].shortDescription }
                        isActive={ variablesRules[i].isActive }
                        isRecommended={ variablesRules[i].isRecommended }
                        isFixable={ variablesRules[i].isFixable }
                        isTurnedOn={ variablesRules[i].isTurnedOn }
                        onClick={ props.onRuleClick }
                        onSwitcherClick={ props.onSwitcherClick }
                        key={ variablesRules[i].name }
                      />
                    ) }
                    length={ variablesRules.length }
                    threshold={ 750 }
                  />
                </RulesGroupWrapper>
              }

              {
                nodeJSAndCommonJSRules && nodeJSAndCommonJSRules.length > 0 &&
                <RulesGroupWrapper>
                  <Heading as={ 'h3' }>Node.js and CommonJS</Heading>
                  <ReactList
                    itemRenderer={ (i) => (
                      <StyledRule
                        name={ nodeJSAndCommonJSRules[i].name }
                        description={ nodeJSAndCommonJSRules[i].shortDescription }
                        isActive={ nodeJSAndCommonJSRules[i].isActive }
                        isRecommended={ nodeJSAndCommonJSRules[i].isRecommended }
                        isFixable={ nodeJSAndCommonJSRules[i].isFixable }
                        isTurnedOn={ nodeJSAndCommonJSRules[i].isTurnedOn }
                        onClick={ props.onRuleClick }
                        onSwitcherClick={ props.onSwitcherClick }
                        key={ nodeJSAndCommonJSRules[i].name }
                      />
                    ) }
                    length={ nodeJSAndCommonJSRules.length }
                    threshold={ 750 }
                  />
                </RulesGroupWrapper>
              }

              {
                stylisticIssuesRules && stylisticIssuesRules.length > 0 &&
                <RulesGroupWrapper>
                  <Heading as={ 'h3' }>Stylistic Issues</Heading>
                  <ReactList
                    itemRenderer={ (i) => (
                      <StyledRule
                        name={ stylisticIssuesRules[i].name }
                        description={ stylisticIssuesRules[i].shortDescription }
                        isActive={ stylisticIssuesRules[i].isActive }
                        isRecommended={ stylisticIssuesRules[i].isRecommended }
                        isFixable={ stylisticIssuesRules[i].isFixable }
                        isTurnedOn={ stylisticIssuesRules[i].isTurnedOn }
                        onClick={ props.onRuleClick }
                        onSwitcherClick={ props.onSwitcherClick }
                        key={ stylisticIssuesRules[i].name }
                      />
                    ) }
                    length={ stylisticIssuesRules.length }
                    threshold={ 750 }
                  />
                </RulesGroupWrapper>
              }

              {
                ECMAScript6Rules && ECMAScript6Rules.length > 0 &&
                <RulesGroupWrapper>
                  <Heading as={ 'h3' }>ECMAScript 6</Heading>
                  <ReactList
                    itemRenderer={ (i) => (
                      <StyledRule
                        name={ ECMAScript6Rules[i].name }
                        description={ ECMAScript6Rules[i].shortDescription }
                        isActive={ ECMAScript6Rules[i].isActive }
                        isRecommended={ ECMAScript6Rules[i].isRecommended }
                        isFixable={ ECMAScript6Rules[i].isFixable }
                        isTurnedOn={ ECMAScript6Rules[i].isTurnedOn }
                        onClick={ props.onRuleClick }
                        onSwitcherClick={ props.onSwitcherClick }
                        key={ ECMAScript6Rules[i].name }
                      />
                    ) }
                    length={ ECMAScript6Rules.length }
                    threshold={ 750 }
                  />
                </RulesGroupWrapper>
              }
            </React.Fragment>
            : 'No rules found'
        }
      </RulesWrapper>

      <Footer>
        <Button onClick={ props.onDownloadConfigButtonClick }>Download config</Button>
      </Footer>
    </Wrapper>
  );
};
