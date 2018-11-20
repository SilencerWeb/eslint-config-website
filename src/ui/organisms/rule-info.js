import * as React from 'react';
import styled, { css } from 'styled-components';
import Select from 'react-select';
import ReactTooltip from 'react-tooltip';

import { Heading, Button, Switcher, Input } from 'ui/atoms';
import { RuleExample } from 'ui/molecules';
import { Check, Wrench } from 'ui/outlines';
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

  svg {
    position: relative;
    z-index: 9;
    display: inline;
    margin-top: 2.5px;
    margin-left: 10px;
  }
`;

const StyledSwitcher = styled(Switcher)`
  flex-shrink: 0;
  margin-top: 5px;
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

const OptionName = styled(Heading)`
  font-size: 16px;
  margin-right: 10px;
  margin-bottom: 0;
  
  &:last-child {
    margin-right: 0;
  }
`;

const OptionHeader = styled.div`
  flex-grow: 0;
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const Option = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  
  &:last-child {
    margin-bottom: 0;
  }
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
  flex-shrink: 0;
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

const SectionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 58px);
  padding-top: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
  padding-left: 20px;
  overflow-x: hidden;
  overflow-y: auto;
`;

const Footer = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  border-top: 1px solid ${color.tertiary};
  padding-top: 10px;
  padding-right: 20px;
  padding-bottom: 10px;
  padding-left: 20px;
`;

const Wrapper = styled.div`
  flex: 0 1 80%;
  position: relative;
  padding-bottom: 58px;
  overflow: hidden;
`;


export class RuleInfo extends React.Component {

  render = () => {

    return (
      <Wrapper className={ this.props.rule.className }>
        <SectionsWrapper>
          <Section>
            <HeaderSection>
              <Title>
                <Name>{ this.props.rule.name }</Name>
                <ShortDescription>- { this.props.rule.shortDescription }</ShortDescription>
                {
                  this.props.rule.isRecommended &&
                  <React.Fragment>
                    <Check data-tip data-for={ `rule-info-check-icon-${ this.props.rule.name }` } width={ 20 } height={ 20 } fill={ color.secondary }/>
                    <ReactTooltip id={ `rule-info-check-icon-${this.props.rule.name}` } className={ 'react-tooltip' } effect={ 'solid' } delayShow={ 500 }>
                      <span>Recommended</span>
                    </ReactTooltip>
                  </React.Fragment>
                }
                {
                  this.props.rule.isFixable &&
                  <React.Fragment>
                    <Wrench data-tip data-for={ `rule-info-wrench-icon-${ this.props.rule.name }` } width={ 20 } height={ 20 } fill={ color.secondary }/>
                    <ReactTooltip id={ `rule-info-wrench-icon-${this.props.rule.name}` } className={ 'react-tooltip' } effect={ 'solid' } delayShow={ 500 }>
                      <span>Fixable</span>
                    </ReactTooltip>
                  </React.Fragment>
                }
              </Title>

              <StyledSwitcher
                data-tip
                data-for={ `rule-info-switcher-${this.props.rule.name}` }
                size={ 'large' }
                isActive={ this.props.rule.isTurnedOn }
                onClick={ () => this.props.onSwitcherClick(this.props.rule.name, !this.props.rule.isTurnedOn) }
              />
              <ReactTooltip id={ `rule-info-switcher-${this.props.rule.name}` } className={ 'react-tooltip' } effect={ 'solid' } delayShow={ 750 }>
                <span>{ this.props.rule.isTurnedOn ? 'Turn off' : 'Turn on' }</span>
              </ReactTooltip>
            </HeaderSection>

            <Paragraph>{ this.props.rule.longDescription }</Paragraph>
          </Section>

          <Section>
            <Heading as={ 'h2' }>What ESLint should do when it catches the rule break</Heading>
            <Select
              classNamePrefix={ 'react-select' }
              value={
                this.props.rule.value === 'warn' ?
                  { label: 'Show a warning', value: 'warn' }
                  :
                  { label: 'Throw an error', value: 'error' }
              }
              options={ [
                { label: 'Show a warning', value: 'warn' },
                { label: 'Throw an error', value: 'error' },
              ] }
              onChange={ ({ value }) => this.props.onSelectChange(this.props.rule.name, value) }
            />
          </Section>

          {
            this.props.rule.options && this.props.rule.options.length > 0 &&
            <Section>
              <Heading as={ 'h2' }>Options</Heading>
              {
                this.props.rule.options.map((option, i) => {
                  if (option.type === 'boolean') {
                    return (
                      <Option key={ option.name || i }>
                        <OptionHeader>
                          { option.name && <OptionName as={ 'h3' }>{ option.name }</OptionName> }
                          <Switcher
                            isActive={ option.value }
                            onClick={ () => this.props.onOptionChange(this.props.rule.name, option.name, !option.value) }
                          />
                        </OptionHeader>
                      </Option>
                    );
                  } else if (option.type === 'select') {
                    return (
                      <Option key={ option.name || i }>
                        <OptionHeader>
                          { option.name && <OptionName as={ 'h3' }>{ option.name }</OptionName> }
                        </OptionHeader>
                        <Select
                          classNamePrefix={ 'react-select' }
                          value={ { label: option.value, value: option.value } }
                          options={
                            option.options.map((optionOption) => ({
                              label: optionOption,
                              value: optionOption,
                            }))
                          }
                          onChange={ ({ value }) => this.props.onOptionChange(this.props.rule.name, option.name, value) }
                        />
                      </Option>
                    );
                  } else if (option.type === 'string') {
                    return (
                      <Option key={ option.name || i }>
                        <OptionHeader>
                          {
                            option.name &&
                            <OptionName as={ 'h3' }>
                              <label htmlFor={ option.name }>
                                { option.name }
                              </label>
                            </OptionName>
                          }
                        </OptionHeader>

                        <Input
                          id={ option.name }
                          value={ option.value }
                          onChange={ (e) => this.props.onOptionChange(this.props.rule.name, option.name, e.currentTarget.value) }
                        />
                      </Option>
                    );
                  }
                })
              }
            </Section>
          }

          <Section isAllowedToGrow={ true }>
            <Heading as={ 'h2' }>Rule examples</Heading>
            <RuleExamples>
              <StyledRuleExample code={ this.props.rule.examples && this.props.rule.examples.correct } theme={ 'correct' }/>
              <StyledRuleExample code={ this.props.rule.examples && this.props.rule.examples.incorrect } theme={ 'incorrect' }/>
            </RuleExamples>
          </Section>
        </SectionsWrapper>

        <Footer>
          <div>
            <StyledButton>Reset rule settings</StyledButton>
          </div>

          <div>
            <StyledButton onClick={ () => this.props.onPreviousOrNextButtonClick('previous') }>Previous rule</StyledButton>
            <StyledButton onClick={ () => this.props.onPreviousOrNextButtonClick('next') }>Next rule</StyledButton>
          </div>
        </Footer>
      </Wrapper>
    );
  };
};
