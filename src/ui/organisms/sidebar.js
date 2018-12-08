import * as React from 'react';
import styled from 'styled-components';
import ReactList from 'react-list';
import ReactTooltip from 'react-tooltip';
import fast from 'fast.js';

import { Search, Heading, Button, Switcher } from 'ui/atoms';
import { Rule } from 'ui/molecules';
import { color } from 'ui/theme';


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
`;

const RulesGroupHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 15px;
`;

const RulesGroup = styled.div`
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
  display: flex;
  align-items: center;
  justify-content: space-around;
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
  const possibleErrorsRules = props.rules && fast.filter(props.rules, (rule) => rule.category === 'Possible Errors');
  const bestPracticesRules = props.rules && fast.filter(props.rules, (rule) => rule.category === 'Best Practices');
  const strictModeRules = props.rules && fast.filter(props.rules, (rule) => rule.category === 'Strict Mode');
  const variablesRules = props.rules && fast.filter(props.rules, (rule) => rule.category === 'Variables');
  const nodeJSAndCommonJSRules = props.rules && fast.filter(props.rules, (rule) => rule.category === 'Node.js and CommonJS');
  const stylisticIssuesRules = props.rules && fast.filter(props.rules, (rule) => rule.category === 'Stylistic Issues');
  const ECMAScript6Rules = props.rules && fast.filter(props.rules, (rule) => rule.category === 'ECMAScript 6');

  const areAllPossibleErrorsRulesTurnedOn = possibleErrorsRules && fast.every(possibleErrorsRules, (rule) => rule.isTurnedOn);
  const areAllBestPracticesRules = bestPracticesRules && fast.every(bestPracticesRules, (rule) => rule.isTurnedOn);
  const areAllStrictModeRules = strictModeRules && fast.every(strictModeRules, (rule) => rule.isTurnedOn);
  const areAllVariablesRules = variablesRules && fast.every(variablesRules, (rule) => rule.isTurnedOn);
  const areAllNodeJSAndCommonJSRules = nodeJSAndCommonJSRules && fast.every(nodeJSAndCommonJSRules, (rule) => rule.isTurnedOn);
  const areAllStylisticIssuesRules = stylisticIssuesRules && fast.every(stylisticIssuesRules, (rule) => rule.isTurnedOn);
  const areAllECMAScript6Rules = ECMAScript6Rules && fast.every(ECMAScript6Rules, (rule) => rule.isTurnedOn);

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
                <RulesGroup>
                  <RulesGroupHeader>
                    <Subtitle as={ 'h3' }>Possible Errors</Subtitle>
                    <Switcher
                      data-tip
                      data-for={ `sidebar-switcher-possible-errors` }
                      size={ 'medium' }
                      isActive={ areAllPossibleErrorsRulesTurnedOn }
                      onClick={ () => props.onCategorySwitcherClick('Possible Errors', !areAllPossibleErrorsRulesTurnedOn) }
                    />
                    <ReactTooltip id={ `sidebar-switcher-possible-errors` } className={ 'react-tooltip' } effect={ 'solid' } delayShow={ 750 }>
                      <span>{ areAllPossibleErrorsRulesTurnedOn ? 'Turn off' : 'Turn on' }</span>
                    </ReactTooltip>
                  </RulesGroupHeader>
                  <ReactList
                    itemRenderer={ (i) => (
                      <StyledRule
                        name={ possibleErrorsRules[i].name }
                        description={ possibleErrorsRules[i].shortDescription }
                        examples={ possibleErrorsRules[i].examples }
                        isActive={ possibleErrorsRules[i].isActive }
                        isRecommended={ possibleErrorsRules[i].isRecommended }
                        isFixable={ possibleErrorsRules[i].isFixable }
                        isTurnedOn={ possibleErrorsRules[i].isTurnedOn }
                        onSwitcherClick={ props.onRuleSwitcherClick }
                        key={ possibleErrorsRules[i].name }
                      />
                    ) }
                    length={ possibleErrorsRules.length }
                    threshold={ 750 }
                  />
                </RulesGroup>
              }

              {
                bestPracticesRules && bestPracticesRules.length > 0 &&
                <RulesGroup>
                  <RulesGroupHeader>
                    <Subtitle as={ 'h3' }>Best Practices</Subtitle>
                    <Switcher
                      data-tip
                      data-for={ `sidebar-switcher-best-practices` }
                      size={ 'medium' }
                      isActive={ areAllBestPracticesRules }
                      onClick={ () => props.onCategorySwitcherClick('Best Practices', !areAllBestPracticesRules) }
                    />
                    <ReactTooltip id={ `sidebar-switcher-best-practices` } className={ 'react-tooltip' } effect={ 'solid' } delayShow={ 750 }>
                      <span>{ areAllBestPracticesRules ? 'Turn off' : 'Turn on' }</span>
                    </ReactTooltip>
                  </RulesGroupHeader>
                  <ReactList
                    itemRenderer={ (i) => (
                      <StyledRule
                        name={ bestPracticesRules[i].name }
                        description={ bestPracticesRules[i].shortDescription }
                        examples={ bestPracticesRules[i].examples }
                        isActive={ bestPracticesRules[i].isActive }
                        isRecommended={ bestPracticesRules[i].isRecommended }
                        isFixable={ bestPracticesRules[i].isFixable }
                        isTurnedOn={ bestPracticesRules[i].isTurnedOn }
                        onSwitcherClick={ props.onRuleSwitcherClick }
                        key={ bestPracticesRules[i].name }
                      />
                    ) }
                    length={ bestPracticesRules.length }
                    threshold={ 750 }
                  />
                </RulesGroup>
              }

              {
                strictModeRules && strictModeRules.length > 0 &&
                <RulesGroup>
                  <RulesGroupHeader>
                    <Subtitle as={ 'h3' }>Strict Mode</Subtitle>
                    <Switcher
                      data-tip
                      data-for={ `sidebar-switcher-strict-mode` }
                      size={ 'medium' }
                      isActive={ areAllStrictModeRules }
                      onClick={ () => props.onCategorySwitcherClick('Strict Mode', !areAllStrictModeRules) }
                    />
                    <ReactTooltip id={ `sidebar-switcher-strict-mode` } className={ 'react-tooltip' } effect={ 'solid' } delayShow={ 750 }>
                      <span>{ areAllStrictModeRules ? 'Turn off' : 'Turn on' }</span>
                    </ReactTooltip>
                  </RulesGroupHeader>
                  <ReactList
                    itemRenderer={ (i) => (
                      <StyledRule
                        name={ strictModeRules[i].name }
                        description={ strictModeRules[i].shortDescription }
                        examples={ strictModeRules[i].examples }
                        isActive={ strictModeRules[i].isActive }
                        isRecommended={ strictModeRules[i].isRecommended }
                        isFixable={ strictModeRules[i].isFixable }
                        isTurnedOn={ strictModeRules[i].isTurnedOn }
                        onSwitcherClick={ props.onRuleSwitcherClick }
                        key={ strictModeRules[i].name }
                      />
                    ) }
                    length={ strictModeRules.length }
                    threshold={ 750 }
                  />
                </RulesGroup>
              }

              {
                variablesRules && variablesRules.length > 0 &&
                <RulesGroup>
                  <RulesGroupHeader>
                    <Subtitle as={ 'h3' }>Variables</Subtitle>
                    <Switcher
                      data-tip
                      data-for={ `sidebar-switcher-variables` }
                      size={ 'medium' }
                      isActive={ areAllVariablesRules }
                      onClick={ () => props.onCategorySwitcherClick('Variables', !areAllVariablesRules) }
                    />
                    <ReactTooltip id={ `sidebar-switcher-variables` } className={ 'react-tooltip' } effect={ 'solid' } delayShow={ 750 }>
                      <span>{ areAllVariablesRules ? 'Turn off' : 'Turn on' }</span>
                    </ReactTooltip>
                  </RulesGroupHeader>
                  <ReactList
                    itemRenderer={ (i) => (
                      <StyledRule
                        name={ variablesRules[i].name }
                        description={ variablesRules[i].shortDescription }
                        examples={ variablesRules[i].examples }
                        isActive={ variablesRules[i].isActive }
                        isRecommended={ variablesRules[i].isRecommended }
                        isFixable={ variablesRules[i].isFixable }
                        isTurnedOn={ variablesRules[i].isTurnedOn }
                        onSwitcherClick={ props.onRuleSwitcherClick }
                        key={ variablesRules[i].name }
                      />
                    ) }
                    length={ variablesRules.length }
                    threshold={ 750 }
                  />
                </RulesGroup>
              }

              {
                nodeJSAndCommonJSRules && nodeJSAndCommonJSRules.length > 0 &&
                <RulesGroup>
                  <RulesGroupHeader>
                    <Subtitle as={ 'h3' }>Node.js and CommonJS</Subtitle>
                    <Switcher
                      data-tip
                      data-for={ `sidebar-switcher-nodejs-and-commonjs` }
                      size={ 'medium' }
                      isActive={ areAllNodeJSAndCommonJSRules }
                      onClick={ () => props.onCategorySwitcherClick('Node.js and CommonJS', !areAllNodeJSAndCommonJSRules) }
                    />
                    <ReactTooltip id={ `sidebar-switcher-nodejs-and-commonjs` } className={ 'react-tooltip' } effect={ 'solid' } delayShow={ 750 }>
                      <span>{ areAllNodeJSAndCommonJSRules ? 'Turn off' : 'Turn on' }</span>
                    </ReactTooltip>
                  </RulesGroupHeader>
                  <ReactList
                    itemRenderer={ (i) => (
                      <StyledRule
                        name={ nodeJSAndCommonJSRules[i].name }
                        description={ nodeJSAndCommonJSRules[i].shortDescription }
                        examples={ nodeJSAndCommonJSRules[i].examples }
                        isActive={ nodeJSAndCommonJSRules[i].isActive }
                        isRecommended={ nodeJSAndCommonJSRules[i].isRecommended }
                        isFixable={ nodeJSAndCommonJSRules[i].isFixable }
                        isTurnedOn={ nodeJSAndCommonJSRules[i].isTurnedOn }
                        onSwitcherClick={ props.onRuleSwitcherClick }
                        key={ nodeJSAndCommonJSRules[i].name }
                      />
                    ) }
                    length={ nodeJSAndCommonJSRules.length }
                    threshold={ 750 }
                  />
                </RulesGroup>
              }

              {
                stylisticIssuesRules && stylisticIssuesRules.length > 0 &&
                <RulesGroup>
                  <RulesGroupHeader>
                    <Subtitle as={ 'h3' }>Stylistic Issues</Subtitle>
                    <Switcher
                      data-tip
                      data-for={ `sidebar-switcher-stylistic-issues` }
                      size={ 'medium' }
                      isActive={ areAllStylisticIssuesRules }
                      onClick={ () => props.onCategorySwitcherClick('Stylistic Issues', !areAllStylisticIssuesRules) }
                    />
                    <ReactTooltip id={ `sidebar-switcher-stylistic-issues` } className={ 'react-tooltip' } effect={ 'solid' } delayShow={ 750 }>
                      <span>{ areAllStylisticIssuesRules ? 'Turn off' : 'Turn on' }</span>
                    </ReactTooltip>
                  </RulesGroupHeader>
                  <ReactList
                    itemRenderer={ (i) => (
                      <StyledRule
                        name={ stylisticIssuesRules[i].name }
                        description={ stylisticIssuesRules[i].shortDescription }
                        examples={ stylisticIssuesRules[i].examples }
                        isActive={ stylisticIssuesRules[i].isActive }
                        isRecommended={ stylisticIssuesRules[i].isRecommended }
                        isFixable={ stylisticIssuesRules[i].isFixable }
                        isTurnedOn={ stylisticIssuesRules[i].isTurnedOn }
                        onSwitcherClick={ props.onRuleSwitcherClick }
                        key={ stylisticIssuesRules[i].name }
                      />
                    ) }
                    length={ stylisticIssuesRules.length }
                    threshold={ 750 }
                  />
                </RulesGroup>
              }

              {
                ECMAScript6Rules && ECMAScript6Rules.length > 0 &&
                <RulesGroup>
                  <RulesGroupHeader>
                    <Subtitle as={ 'h3' }>ECMAScript 6</Subtitle>
                    <Switcher
                      data-tip
                      data-for={ `sidebar-switcher-ECMAScript-6` }
                      size={ 'medium' }
                      isActive={ areAllECMAScript6Rules }
                      onClick={ () => props.onCategorySwitcherClick('ECMAScript 6', !areAllECMAScript6Rules) }
                    />
                    <ReactTooltip id={ `sidebar-switcher-ECMAScript-6` } className={ 'react-tooltip' } effect={ 'solid' } delayShow={ 750 }>
                      <span>{ areAllECMAScript6Rules ? 'Turn off' : 'Turn on' }</span>
                    </ReactTooltip>
                  </RulesGroupHeader>
                  <ReactList
                    itemRenderer={ (i) => (
                      <StyledRule
                        name={ ECMAScript6Rules[i].name }
                        description={ ECMAScript6Rules[i].shortDescription }
                        examples={ ECMAScript6Rules[i].examples }
                        isActive={ ECMAScript6Rules[i].isActive }
                        isRecommended={ ECMAScript6Rules[i].isRecommended }
                        isFixable={ ECMAScript6Rules[i].isFixable }
                        isTurnedOn={ ECMAScript6Rules[i].isTurnedOn }
                        onSwitcherClick={ props.onRuleSwitcherClick }
                        key={ ECMAScript6Rules[i].name }
                      />
                    ) }
                    length={ ECMAScript6Rules.length }
                    threshold={ 750 }
                  />
                </RulesGroup>
              }
            </React.Fragment>
            : 'No rules found'
        }
      </RulesWrapper>

      <Footer>
        <Button onClick={ props.onDownloadConfigButtonClick }>Download</Button>
        <Button onClick={ props.onPreviewConfigButtonClick }>Preview</Button>
      </Footer>
    </Wrapper>
  );
};
