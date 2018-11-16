import * as React from 'react';
import styled, { css } from 'styled-components';
import Select from 'react-select';

import { Heading, Button, Switcher } from 'ui/atoms';
import { RuleExample } from 'ui/molecules';
import { color } from 'ui/theme';


const Name = styled(Heading)`
  display: inline;
  font-size: 25px;
  color: ${color.primary};
  margin-bottom: 0;
`;

const ShortDescription = styled.p`
  display: inline;
  font-size: 25px;
  margin-top: 0;
  margin-bottom: 0;
  margin-left: 5px;
`;

const Title = styled.div`
  padding-right: 20px;
`;

const StyledSwitcher = styled(Switcher)`
  flex-shrink: 0;
  margin-top: 2px;
`;

const Paragraph = styled.p`
  margin-top: 0;
  margin-bottom: 0;
`;

const StyledButton = styled(Button)`
  margin-right: 15px;
  
  &:last-child {
    margin-right: 0;
  }
`;

const StyledSelect = styled.select`
  margin-top: 20px;
  outline: none;
`;

const StyledRuleExample = styled(RuleExample)`
  flex-grow: 1;
  max-width: 50%;
`;

const RuleExamples = styled.div`
  flex-grow: 1;
  display: flex;
`;

const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const Section = styled.div`
  margin-bottom: 30px;
  
  &:last-child {
    margin-bottom: 0;
  }
  
  ${props => css`

    ${props.isAllowedToGrow && css`
      flex-grow: 1;
      display: flex;
      flex-direction: column;
    `}
  `}
`;

const Footer = styled.div`
  flex-shrink: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
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
`;


export const RuleInfo = (props) => {

  return (
    <Wrapper className={ props.rule.className }>
      <Section>
        <HeaderSection>
          <Title>
            <Name>{ props.rule.name }</Name>
            <ShortDescription>- { props.rule.shortDescription }</ShortDescription>
          </Title>

          <StyledSwitcher
            size={ 'large' }
            isActive={ props.rule.isTurnedOn }
            onClick={ () => props.onSwitcherClick(props.rule.name, !props.rule.isTurnedOn) }
          />
        </HeaderSection>

        <Paragraph>{ props.rule.longDescription }</Paragraph>
      </Section>

      <Section>
        <Heading>What ESLint should do when it catches the rule break</Heading>
        <Select
          classNamePrefix={ 'react-select' }
          value={
            props.rule.value === 'warn' ?
              { label: 'Show a warning', value: 'warn' }
              :
              { label: 'Throw an error', value: 'error' }
          }
          options={ [
            { label: 'Show a warning', value: 'warn' },
            { label: 'Throw an error', value: 'error' },
          ] }
          onChange={ ({ value }) => props.onSelectChange(props.rule.name, value) }
        />
      </Section>

      <Section isAllowedToGrow={ true }>
        <Heading>Rule examples</Heading>
        <RuleExamples>
          <StyledRuleExample code={ props.rule.examples && props.rule.examples.correct } theme={ 'correct' }/>
          <StyledRuleExample code={ props.rule.examples && props.rule.examples.incorrect } theme={ 'incorrect' }/>
        </RuleExamples>
      </Section>

      <Footer>
        <div>
          <StyledButton>Reset rule settings</StyledButton>
        </div>

        <div>
          <StyledButton onClick={ () => props.onPreviousOrNextButtonClick('previous') }>Previous rule</StyledButton>
          <StyledButton onClick={ () => props.onPreviousOrNextButtonClick('next') }>Next rule</StyledButton>
        </div>
      </Footer>
    </Wrapper>
  );
};
