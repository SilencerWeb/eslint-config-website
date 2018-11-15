import * as React from 'react';
import styled, { css } from 'styled-components';

import { Heading, Button } from 'ui/atoms';
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
  margin-bottom: 10px;
`;

const LongDescription = styled.p`
  margin-top: 0;
  margin-bottom: 0;
`;

const Checkbox = styled.label`
  
  span {
    display: inline-block;
    vertical-align: top;
    margin-left: 5px;
  }
`;

const StyledButton = styled(Button)`
  margin-right: 15px;
  
  &:last-child {
    margin-right: 0;
  }
`;

const StyledRuleExample = styled(RuleExample)`
  flex-grow: 1;
`;

const RuleExamples = styled.div`
  display: flex;
`;

const Section = styled.div`
  margin-bottom: 30px;
  
  &:last-child {
    margin-bottom: 0;
  }
  
  ${props => css`

    ${props.isAllowedToGrow && css`
      flex-grow: 1;
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
  const correctCode = `p = {
    get name() {
        return "nicholas";
    }
};

Object.defineProperty(p, "age",  {
    get: function () {
        return 18;
    }
});

class P {
    get name() {
        return "nicholas";
    }
}`;

  const incorrectCode = `p = {
    get name() {
        // no returns.
    }
};

Object.defineProperty(p, "age", {
    get: function () {
        // no returns.
    }
});

class P {
    get name() {
        // no returns.
    }
}`;

  return (
    <Wrapper className={ props.className }>
      <Section>
        <Title>
          <Name>{ props.name }</Name>
          <ShortDescription>- { props.shortDescription }</ShortDescription>
        </Title>
        <LongDescription>{ props.longDescription }</LongDescription>
      </Section>

      {
        props.options &&
        <Section>
          <Heading>Rule options</Heading>
          {
            props.options.map((option) => {
              if (option.type === 'checkbox') {
                return (
                  <Checkbox>
                    <input type="checkbox"/>
                    <span>{ option.description }</span>
                  </Checkbox>
                );
              }
            })
          }
        </Section>
      }

      <Section isAllowedToGrow={ true }>
        <Heading>Rule examples</Heading>
        <RuleExamples>
          <StyledRuleExample code={ correctCode } theme={ 'correct' }/>
          <StyledRuleExample code={ incorrectCode } theme={ 'incorrect' }/>
        </RuleExamples>
      </Section>

      <Footer>
        <div>
          <StyledButton>Reset rule settings</StyledButton>
        </div>

        <div>
          <StyledButton onClick={ () => props.setActiveRule('previous') }>Previous rule</StyledButton>
          <StyledButton onClick={ () => props.setActiveRule('next') }>Next rule</StyledButton>
        </div>
      </Footer>
    </Wrapper>
  );
};
