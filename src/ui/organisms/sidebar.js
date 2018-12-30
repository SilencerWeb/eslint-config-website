import * as React from 'react';
import styled, { css } from 'styled-components';
import fast from 'fast.js';

import { Search, Heading, Button, Switcher } from '../atoms';
import { Rule } from '../molecules';
import { Arrow } from '../outlines';
import { color } from '../theme';


const StyledSearch = styled(Search)`
  margin-bottom: 30px;
`;

const StyledRule = styled(Rule)`
  margin-bottom: 10px;
`;

const Subtitle = styled(Heading)`
  font-size: 18px;
  color: ${color.primary};
  margin-bottom: 0;
  margin-left: 5px;
`;

const RulesGroupHeaderSide = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const RulesGroupHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 24px;
  padding-bottom: 15px;
  
  svg {
    transform: rotate(90deg);
  }
`;

const RulesGroup = styled.div`
  
  ${props => css`

    ${props.isOpen && css`
      margin-bottom: 30px;
      
      &:last-child {
        margin-bottom: 0;
      }
      
      ${RulesGroupHeader} {
      
        svg {
          transform: rotate(-90deg);
        }
      }
    `}
  `}
`;

const RulesWrapper = styled.div`
  flex-grow: 0;
  flex-shrink: 1;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: -15px;
  margin-left: -15px;
  overflow-x: hidden;
  overflow-y: auto;
`;

const Footer = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  background-color: #ffffff;
  border-top: 1px solid ${color.tertiary};
  padding-top: 10px;
  padding-right: 15px;
  padding-bottom: 10px;
  padding-left: 15px;
`;

const Wrapper = styled.div`
  position: relative;
  flex: 0 1 20%;
  display: flex;
  flex-direction: column;
  min-width: 300px;
  height: 100vh;
  border-right: 1px solid ${color.tertiary};
  padding-top: 15px;
  padding-right: 15px;
  padding-bottom: 53px;
  padding-left: 15px;
`;


export class Sidebar extends React.Component {
  state = {
    isPossibleErrorsRulesDropDownOpen: false,
    isBestPracticesRulesDropDownOpen: false,
    isStrictModeRulesDropDownOpen: false,
    isVariablesRulesDropDownOpen: false,
    isNodeJSAndCommonJSRulesDropDownOpen: false,
    isStylisticIssuesRulesDropDownOpen: false,
    isECMAScript6RulesDropDownOpen: false,
  };

  handleSearchKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.props.onSearchEnterPress(e.currentTarget.value);
    }
  };

  handleSearchChange = (e) => {
    if (e.currentTarget.value.length === 0) {
      this.props.onSearchEnterPress(e.currentTarget.value);
    }
  };

  toggleDropDown = (name) => {
    this.setState((prevState) => ({
      ...prevState,
      [name]: !prevState[name],
    }));
  };

  componentDidMount = () => {
    const activeRule = this.props.rules.find((rule) => rule.isActive);

    if (activeRule.category === 'Possible Errors') {
      this.setState({ isPossibleErrorsRulesDropDownOpen: true });
    } else if (activeRule.category === 'Best Practices') {
      this.setState({ isBestPracticesRulesDropDownOpen: true });
    } else if (activeRule.category === 'Strict Mode') {
      this.setState({ isStrictModeRulesDropDownOpen: true });
    } else if (activeRule.category === 'Variables') {
      this.setState({ isVariablesRulesDropDownOpen: true });
    } else if (activeRule.category === 'Node.js and CommonJS') {
      this.setState({ isNodeJSAndCommonJSRulesDropDownOpen: true });
    } else if (activeRule.category === 'Stylistic Issues') {
      this.setState({ isStylisticIssuesRulesDropDownOpen: true });
    } else if (activeRule.category === 'ECMAScript 6') {
      this.setState({ isECMAScript6RulesDropDownOpen: true });
    }
  };

  render = () => {
    const possibleErrorsRules = this.props.rules && fast.filter(this.props.rules, (rule) => rule.category === 'Possible Errors');
    const bestPracticesRules = this.props.rules && fast.filter(this.props.rules, (rule) => rule.category === 'Best Practices');
    const strictModeRules = this.props.rules && fast.filter(this.props.rules, (rule) => rule.category === 'Strict Mode');
    const variablesRules = this.props.rules && fast.filter(this.props.rules, (rule) => rule.category === 'Variables');
    const nodeJSAndCommonJSRules = this.props.rules && fast.filter(this.props.rules, (rule) => rule.category === 'Node.js and CommonJS');
    const stylisticIssuesRules = this.props.rules && fast.filter(this.props.rules, (rule) => rule.category === 'Stylistic Issues');
    const ECMAScript6Rules = this.props.rules && fast.filter(this.props.rules, (rule) => rule.category === 'ECMAScript 6');

    const areAllPossibleErrorsRulesTurnedOn = possibleErrorsRules && fast.every(possibleErrorsRules, (rule) => rule.isTurnedOn);
    const areAllBestPracticesRulesTurnedOn = bestPracticesRules && fast.every(bestPracticesRules, (rule) => rule.isTurnedOn);
    const areAllStrictModeRulesTurnedOn = strictModeRules && fast.every(strictModeRules, (rule) => rule.isTurnedOn);
    const areAllVariablesRulesTurnedOn = variablesRules && fast.every(variablesRules, (rule) => rule.isTurnedOn);
    const areAllNodeJSAndCommonJSRulesTurnedOn = nodeJSAndCommonJSRules && fast.every(nodeJSAndCommonJSRules, (rule) => rule.isTurnedOn);
    const areAllStylisticIssuesRulesTurnedOn = stylisticIssuesRules && fast.every(stylisticIssuesRules, (rule) => rule.isTurnedOn);
    const areAllECMAScript6RulesTurnedOn = ECMAScript6Rules && fast.every(ECMAScript6Rules, (rule) => rule.isTurnedOn);

    return (
      <Wrapper className={ this.props.className }>
        <StyledSearch placeholder={ 'Type a rule here...' } onKeyPress={ this.handleSearchKeyPress } onChange={ this.handleSearchChange }/>

        <RulesWrapper>
          {
            this.props.rules ?
              <React.Fragment>
                {
                  possibleErrorsRules && possibleErrorsRules.length > 0 &&
                  <RulesGroup isOpen={ this.state.isPossibleErrorsRulesDropDownOpen }>
                    <RulesGroupHeader>
                      <RulesGroupHeaderSide onClick={ () => this.toggleDropDown('isPossibleErrorsRulesDropDownOpen') }>
                        <Arrow width={ 14 } height={ 14 } fill={ color.secondary }/>
                        <Subtitle as={ 'h3' }>Possible Errors</Subtitle>
                      </RulesGroupHeaderSide>

                      <Switcher
                        size={ 'medium' }
                        isActive={ areAllPossibleErrorsRulesTurnedOn }
                        onClick={ () => this.props.onCategorySwitcherClick('Possible Errors', !areAllPossibleErrorsRulesTurnedOn) }
                      />
                    </RulesGroupHeader>

                    {
                      this.state.isPossibleErrorsRulesDropDownOpen && possibleErrorsRules.map((rule) => (
                        <StyledRule
                          name={ rule.name }
                          description={ rule.shortDescription }
                          isActive={ rule.isActive }
                          isRecommended={ rule.isRecommended }
                          isFixable={ rule.isFixable }
                          isTurnedOn={ rule.isTurnedOn }
                          onSwitcherClick={ this.props.onRuleSwitcherClick }
                          key={ rule.name }
                        />
                      ))
                    }
                  </RulesGroup>
                }

                {
                  bestPracticesRules && bestPracticesRules.length > 0 &&
                  <RulesGroup isOpen={ this.state.isBestPracticesRulesDropDownOpen }>
                    <RulesGroupHeader>
                      <RulesGroupHeaderSide onClick={ () => this.toggleDropDown('isBestPracticesRulesDropDownOpen') }>
                        <Arrow width={ 14 } height={ 14 } fill={ color.secondary }/>
                        <Subtitle as={ 'h3' }>Best Practices</Subtitle>
                      </RulesGroupHeaderSide>

                      <Switcher
                        size={ 'medium' }
                        isActive={ areAllBestPracticesRulesTurnedOn }
                        onClick={ () => this.props.onCategorySwitcherClick('Best Practices', !areAllBestPracticesRulesTurnedOn) }
                      />
                    </RulesGroupHeader>

                    {
                      this.state.isBestPracticesRulesDropDownOpen && bestPracticesRules.map((rule) => (
                        <StyledRule
                          name={ rule.name }
                          description={ rule.shortDescription }
                          isActive={ rule.isActive }
                          isRecommended={ rule.isRecommended }
                          isFixable={ rule.isFixable }
                          isTurnedOn={ rule.isTurnedOn }
                          onSwitcherClick={ this.props.onRuleSwitcherClick }
                          key={ rule.name }
                        />
                      ))
                    }
                  </RulesGroup>
                }

                {
                  strictModeRules && strictModeRules.length > 0 &&
                  <RulesGroup isOpen={ this.state.isStrictModeRulesDropDownOpen }>
                    <RulesGroupHeader>
                      <RulesGroupHeaderSide onClick={ () => this.toggleDropDown('isStrictModeRulesDropDownOpen') }>
                        <Arrow width={ 14 } height={ 14 } fill={ color.secondary }/>
                        <Subtitle as={ 'h3' }>Strict Mode</Subtitle>
                      </RulesGroupHeaderSide>

                      <Switcher
                        size={ 'medium' }
                        isActive={ areAllStrictModeRulesTurnedOn }
                        onClick={ () => this.props.onCategorySwitcherClick('Strict Mode', !areAllStrictModeRulesTurnedOn) }
                      />
                    </RulesGroupHeader>

                    {
                      this.state.isStrictModeRulesDropDownOpen && strictModeRules.map((rule) => (
                        <StyledRule
                          name={ rule.name }
                          description={ rule.shortDescription }
                          isActive={ rule.isActive }
                          isRecommended={ rule.isRecommended }
                          isFixable={ rule.isFixable }
                          isTurnedOn={ rule.isTurnedOn }
                          onSwitcherClick={ this.props.onRuleSwitcherClick }
                          key={ rule.name }
                        />
                      ))
                    }
                  </RulesGroup>
                }

                {
                  variablesRules && variablesRules.length > 0 &&
                  <RulesGroup isOpen={ this.state.isVariablesRulesDropDownOpen }>
                    <RulesGroupHeader>
                      <RulesGroupHeaderSide onClick={ () => this.toggleDropDown('isVariablesRulesDropDownOpen') }>
                        <Arrow width={ 14 } height={ 14 } fill={ color.secondary }/>
                        <Subtitle as={ 'h3' }>Variables</Subtitle>
                      </RulesGroupHeaderSide>

                      <Switcher
                        size={ 'medium' }
                        isActive={ areAllVariablesRulesTurnedOn }
                        onClick={ () => this.props.onCategorySwitcherClick('Variables', !areAllVariablesRulesTurnedOn) }
                      />
                    </RulesGroupHeader>

                    {
                      this.state.isVariablesRulesDropDownOpen && variablesRules.map((rule) => (
                        <StyledRule
                          name={ rule.name }
                          description={ rule.shortDescription }
                          isActive={ rule.isActive }
                          isRecommended={ rule.isRecommended }
                          isFixable={ rule.isFixable }
                          isTurnedOn={ rule.isTurnedOn }
                          onSwitcherClick={ this.props.onRuleSwitcherClick }
                          key={ rule.name }
                        />
                      ))
                    }
                  </RulesGroup>
                }

                {
                  nodeJSAndCommonJSRules && nodeJSAndCommonJSRules.length > 0 &&
                  <RulesGroup isOpen={ this.state.isNodeJSAndCommonJSRulesDropDownOpen }>
                    <RulesGroupHeader>
                      <RulesGroupHeaderSide onClick={ () => this.toggleDropDown('isNodeJSAndCommonJSRulesDropDownOpen') }>
                        <Arrow width={ 14 } height={ 14 } fill={ color.secondary }/>
                        <Subtitle as={ 'h3' }>Node.js and CommonJS</Subtitle>
                      </RulesGroupHeaderSide>

                      <Switcher
                        size={ 'medium' }
                        isActive={ areAllNodeJSAndCommonJSRulesTurnedOn }
                        onClick={ () => this.props.onCategorySwitcherClick('Node.js and CommonJS', !areAllNodeJSAndCommonJSRulesTurnedOn) }
                      />
                    </RulesGroupHeader>

                    {
                      this.state.isNodeJSAndCommonJSRulesDropDownOpen && nodeJSAndCommonJSRules.map((rule) => (
                        <StyledRule
                          name={ rule.name }
                          description={ rule.shortDescription }
                          isActive={ rule.isActive }
                          isRecommended={ rule.isRecommended }
                          isFixable={ rule.isFixable }
                          isTurnedOn={ rule.isTurnedOn }
                          onSwitcherClick={ this.props.onRuleSwitcherClick }
                          key={ rule.name }
                        />
                      ))
                    }
                  </RulesGroup>
                }

                {
                  stylisticIssuesRules && stylisticIssuesRules.length > 0 &&
                  <RulesGroup isOpen={ this.state.isStylisticIssuesRulesDropDownOpen }>
                    <RulesGroupHeader>
                      <RulesGroupHeaderSide onClick={ () => this.toggleDropDown('isStylisticIssuesRulesDropDownOpen') }>
                        <Arrow width={ 14 } height={ 14 } fill={ color.secondary }/>
                        <Subtitle as={ 'h3' }>Stylistic Issues</Subtitle>
                      </RulesGroupHeaderSide>

                      <Switcher
                        size={ 'medium' }
                        isActive={ areAllStylisticIssuesRulesTurnedOn }
                        onClick={ () => this.props.onCategorySwitcherClick('Stylistic Issues', !areAllStylisticIssuesRulesTurnedOn) }
                      />
                    </RulesGroupHeader>

                    {
                      this.state.isStylisticIssuesRulesDropDownOpen && stylisticIssuesRules.map((rule) => (
                        <StyledRule
                          name={ rule.name }
                          description={ rule.shortDescription }
                          isActive={ rule.isActive }
                          isRecommended={ rule.isRecommended }
                          isFixable={ rule.isFixable }
                          isTurnedOn={ rule.isTurnedOn }
                          onSwitcherClick={ this.props.onRuleSwitcherClick }
                          key={ rule.name }
                        />
                      ))
                    }
                  </RulesGroup>
                }

                {
                  ECMAScript6Rules && ECMAScript6Rules.length > 0 &&
                  <RulesGroup isOpen={ this.state.isECMAScript6RulesDropDownOpen }>
                    <RulesGroupHeader>
                      <RulesGroupHeaderSide onClick={ () => this.toggleDropDown('isECMAScript6RulesDropDownOpen') }>
                        <Arrow width={ 14 } height={ 14 } fill={ color.secondary }/>
                        <Subtitle as={ 'h3' }>ECMAScript 6</Subtitle>
                      </RulesGroupHeaderSide>

                      <Switcher
                        size={ 'medium' }
                        isActive={ areAllECMAScript6RulesTurnedOn }
                        onClick={ () => this.props.onCategorySwitcherClick('ECMAScript 6', !areAllECMAScript6RulesTurnedOn) }
                      />
                    </RulesGroupHeader>

                    {
                      this.state.isECMAScript6RulesDropDownOpen && ECMAScript6Rules.map((rule) => (
                        <StyledRule
                          name={ rule.name }
                          description={ rule.shortDescription }
                          isActive={ rule.isActive }
                          isRecommended={ rule.isRecommended }
                          isFixable={ rule.isFixable }
                          isTurnedOn={ rule.isTurnedOn }
                          onSwitcherClick={ this.props.onRuleSwitcherClick }
                          key={ rule.name }
                        />
                      ))
                    }
                  </RulesGroup>
                }
              </React.Fragment>
              : 'No rules found'
          }
        </RulesWrapper>

        <Footer>
          <Button onClick={ this.props.onDownloadConfigButtonClick }>Download</Button>
          <Button onClick={ this.props.onPreviewConfigButtonClick }>Preview</Button>
        </Footer>
      </Wrapper>
    );
  };
};
