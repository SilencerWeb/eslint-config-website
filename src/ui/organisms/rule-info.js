import * as React from 'react';
import styled, { css } from 'styled-components';
import Select from 'react-select';
import ReactTooltip from 'react-tooltip';
import { Link as RouterLink } from 'react-router-dom';

import { Heading, Button, Switcher, Input, Link } from 'ui/atoms';
import { Check, Wrench, Github, Twitter, Email, Arrow } from 'ui/outlines';
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

const OptionName = styled(Heading)`
  font-size: 16px;
  margin-right: 10px;
  margin-bottom: 0;
  
  &:last-child {
    margin-right: 0;
  }
`;

const OptionHeaderLeftSide = styled.div`
  display: flex;
  align-items: center;
`;

const OptionHeader = styled.div`
  flex-grow: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const OptionDescription = styled.p`
  margin-top: 0;
  margin-bottom: 10px;
  
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

const ExamplesInfo = styled.p`
  margin-top: 0;
  margin-bottom: 0;
`;

const FooterButton = styled(Button)`
  flex-basis: 40%;
  flex-grow: 1;
  display: flex;
  align-items: center;
  margin-right: 10px;
  
  svg {
    fill: ${color.secondary};
    margin-right: 5px;
    margin-left: 5px;
    transition: 0.1s;
    
    &:first-child {
      margin-left: 0;
      transform: rotate(180deg);
    }
    
    &:last-child {
      margin-right: 0;
    }
  }
  
  &:last-child {
    justify-content: flex-end;
    margin-right: 0;
  }
  
  &:hover {
    
    svg {
      fill: ${color.primary};
    }
  }
`;

const SocialLink = styled.a`
  display: inline-block;
  vertical-align: top;
  font-size: 0;
  margin-right: 10px;
  
  svg {
    fill: ${color.secondary};
    opacity: 0.7;
    transition: 0.1s;
  }
  
  &:last-child {
    margin-right: 0;
  }
  
  &:hover {
    
    svg {
      opacity: 1;
    }
  }
`;

const SocialLinksWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  
  ${Heading} {
    margin-bottom: 0;
  }
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
      <Wrapper className={ this.props.className }>
        <SectionsWrapper>
          <Section>
            <SectionHeader>
              <Title>
                <Name>{ this.props.activeRule.name }</Name>
                <ShortDescription>- { this.props.activeRule.shortDescription }</ShortDescription>
                {
                  this.props.activeRule.isRecommended &&
                  <React.Fragment>
                    <Check data-tip data-for={ `rule-info-check-icon-${ this.props.activeRule.name }` } width={ 20 } height={ 20 } fill={ color.secondary }/>
                    <ReactTooltip id={ `rule-info-check-icon-${this.props.activeRule.name}` } className={ 'react-tooltip' } effect={ 'solid' } delayShow={ 500 }>
                      <span>Recommended</span>
                    </ReactTooltip>
                  </React.Fragment>
                }
                {
                  this.props.activeRule.isFixable &&
                  <React.Fragment>
                    <Wrench data-tip data-for={ `rule-info-wrench-icon-${ this.props.activeRule.name }` } width={ 20 } height={ 20 } fill={ color.secondary }/>
                    <ReactTooltip id={ `rule-info-wrench-icon-${this.props.activeRule.name}` } className={ 'react-tooltip' } effect={ 'solid' } delayShow={ 500 }>
                      <span>Fixable</span>
                    </ReactTooltip>
                  </React.Fragment>
                }
              </Title>

              <StyledSwitcher
                data-tip
                data-for={ `rule-info-switcher-${this.props.activeRule.name}` }
                size={ 'large' }
                isActive={ this.props.activeRule.isTurnedOn }
                onClick={ () => this.props.onSwitcherClick(this.props.activeRule.name, !this.props.activeRule.isTurnedOn) }
              />
              <ReactTooltip id={ `rule-info-switcher-${this.props.activeRule.name}` } className={ 'react-tooltip' } effect={ 'solid' } delayShow={ 750 }>
                <span>{ this.props.activeRule.isTurnedOn ? 'Turn off' : 'Turn on' }</span>
              </ReactTooltip>
            </SectionHeader>

            <Paragraph>{ this.props.activeRule.longDescription }</Paragraph>
          </Section>

          <Section>
            <Heading as={ 'h2' }>What ESLint should do when it catches the rule break</Heading>
            <Select
              classNamePrefix={ 'react-select' }
              value={
                this.props.activeRule.value === 'warn' ?
                  { label: 'Show a warning', value: 'warn' }
                  :
                  { label: 'Throw an error', value: 'error' }
              }
              options={ [
                { label: 'Show a warning', value: 'warn' },
                { label: 'Throw an error', value: 'error' },
              ] }
              onChange={ ({ value }) => this.props.onSelectChange(this.props.activeRule.name, value) }
            />
          </Section>

          {
            this.props.activeRule.options && this.props.activeRule.options.length > 0 &&
            <Section>
              <Heading as={ 'h2' }>Options</Heading>
              {
                this.props.activeRule.options.map((option, i) => {
                  if (option.type === 'boolean') {
                    return (
                      <Option key={ option.name || i }>
                        <OptionHeader>
                          <OptionHeaderLeftSide>
                            { option.name && <OptionName as={ 'h3' }>{ option.name }</OptionName> }
                            <Switcher
                              isActive={ option.value === 'true' } // Because all values are strings even if the type is boolean
                              onClick={ () => this.props.onOptionChange(this.props.activeRule.name, option.name, option.value === 'true' ? 'false' : 'true') } // Because all values are strings even if the type is boolean
                            />
                          </OptionHeaderLeftSide>
                        </OptionHeader>

                        { option.description && <OptionDescription>{ option.description }</OptionDescription> }
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
                          onChange={ ({ value }) => this.props.onOptionChange(this.props.activeRule.name, option.name, value) }
                        />
                      </Option>
                    );
                  } else if (option.type === 'string' || option.type === 'number') {
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

                        { option.description && <OptionDescription>{ option.description }</OptionDescription> }

                        <Input
                          type={ option.type === 'number' ? 'number' : 'text' }
                          id={ option.name }
                          value={ option.value }
                          placeholder={ 'Enter value here' }
                          onChange={ (e) => this.props.onOptionChange(this.props.activeRule.name, option.name, e.currentTarget.value) }
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
            <ExamplesInfo>
              You can check them out&nbsp;
              <Link href={ `https://eslint.org/docs/rules/${this.props.activeRule.name}#rule-details` } target={ '_blank' }>here</Link>.
            </ExamplesInfo>
          </Section>
        </SectionsWrapper>

        {
          this.props.previousRule && this.props.nextRule &&
          <Footer>
            <SocialLinksWrapper>
              <SocialLink href={ 'https://github.com/SilencerWeb/eslint-config-website' } target={ '_blank' }>
                <Github height={ 30 } width={ 30 }/>
              </SocialLink>

              <SocialLink href={ 'https://twitter.com/SilencerWeb' } target={ '_blank' }>
                <Twitter height={ 30 } width={ 30 }/>
              </SocialLink>

              <SocialLink href={ 'mailto:silencer.web@gmail.com' } target={ '_blank' }>
                <Email height={ 30 } width={ 30 }/>
              </SocialLink>
            </SocialLinksWrapper>

            <FooterButton to={ `/rules/${this.props.previousRule.name}` } as={ RouterLink }>
              <Arrow width={ 12 } height={ 12 }/>
              <span>{ this.props.previousRule.name }</span>
            </FooterButton>

            <FooterButton to={ `/rules/${this.props.nextRule.name}` } as={ RouterLink }>
              <span>{ this.props.nextRule.name }</span>
              <Arrow width={ 12 } height={ 12 }/>
            </FooterButton>
          </Footer>
        }
      </Wrapper>
    );
  };
}
