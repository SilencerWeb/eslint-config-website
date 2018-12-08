import * as React from 'react';
import styled, { css } from 'styled-components';
import Select from 'react-select';
import ReactTooltip from 'react-tooltip';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { graphql } from 'react-apollo';
import isEqual from 'fast-deep-equal';
import { toast } from 'react-toastify';
import { Link as RouterLink } from 'react-router-dom';

import { Heading, Button, Switcher, Input, Link } from 'ui/atoms';
import { RuleExample } from 'ui/molecules';
import { Check, Wrench, Github, Twitter, Email, Arrow } from 'ui/outlines';
import { color } from 'ui/theme';

import { UPDATE_RULE } from 'graphql/mutations/rule';


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

const OptionDescriptionInput = styled(Input)`
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

const StyledRuleExample = styled(RuleExample)`
  flex-grow: 1;
  max-width: ${props => props.type === 'difference' ? '100%' : '50%'};
`;

const RuleExamples = styled.div`
  flex-grow: 1;
  display: flex;
`;

const NoExampleYet = styled.p`
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


export class RuleInfoComponent extends React.Component {

  render = () => {
    const examples = this.props.activeRule.examples && this.props.activeRule.examples.find((example) => {

      return isEqual(
        example.options.map((option) => ({
          name: option.name,
          value: option.type === 'string' || option.type === 'number' ? '' : option.value, // Because options with type string or string should not effect on examples since they have too many results
        })),
        this.props.activeRule.options.map((option) => ({
          name: option.name,
          value: option.type === 'string' || option.type === 'number' ? '' : option.value, // Because options with type string or string should not effect on examples since they have too many results
        })),
      );
    });

    return (
      <Wrapper className={ this.props.className }>
        {
          !this.props.isEditingModeEnabled ?
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
                {
                  examples ?
                    <RuleExamples>
                      <StyledRuleExample
                        value={ examples.correct }
                        theme={ 'correct' }
                        isEditingModeEnabled={ false }
                      />
                      <StyledRuleExample
                        value={ examples.incorrect }
                        theme={ 'incorrect' }
                        isEditingModeEnabled={ false }
                      />
                    </RuleExamples>
                    :
                    <NoExampleYet>
                      No examples yet. If you would love to help with adding it, please,&nbsp;
                      <Link href={ 'https://twitter.com/messages/compose?screen_name=silencerweb' } target="_blank">contact me in the twitter</Link> and I will give you an instruction how to do it.
                    </NoExampleYet>
                }
              </Section>
            </SectionsWrapper>
            :
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
                          <Formik
                            enableReinitialize={ true }
                            initialValues={ {
                              [option.name ? option.name : 'Nameless option']: '',
                            } }
                            onSubmit={ (values) => {
                              this.props.updateRule({
                                variables: {
                                  name: this.props.activeRule.name,
                                  updatedOption: {
                                    id: option.id,
                                    description: values[option.name ? option.name : 'Nameless option'],
                                  },
                                },
                              }).then(() => {
                                toast.success('Option description was successfully saved. Thank you so much for contributing!');
                              }).catch((error) => {
                                toast.error(`Oops, error: ${(error.graphQLErrors && error.graphQLErrors[0] && error.graphQLErrors[0].message) || error.message}`);
                              });
                            } }
                            validationSchema={
                              Yup.object().shape({
                                [option.name ? option.name : 'Nameless option']: Yup.string().required('Required'),
                              })
                            }
                            key={ option.name || i }
                          >
                            {
                              ({
                                 values,
                                 touched,
                                 errors,
                                 handleChange,
                                 handleSubmit,
                               }) => (
                                <Option>
                                  <OptionHeader isSpaceBetween={ true }>
                                    <OptionHeaderLeftSide>
                                      { option.name && <OptionName as={ 'h3' }>{ option.name }</OptionName> }
                                      <Switcher
                                        isActive={ option.value === 'true' } // Because all values are strings even if the type is boolean
                                        onClick={ () => this.props.onOptionChange(this.props.activeRule.name, option.name, option.value === 'true' ? 'false' : 'true') } // Because all values are strings even if the type is boolean
                                      />
                                    </OptionHeaderLeftSide>

                                    {
                                      !option.description &&
                                      <Button onClick={ handleSubmit }>Submit description</Button>
                                    }
                                  </OptionHeader>

                                  {
                                    option.description ?
                                      <OptionDescription>{ option.description }</OptionDescription>
                                      :
                                      <OptionDescriptionInput
                                        name={ option.name ? option.name : 'Nameless option' }
                                        value={ values[option.name ? option.name : 'Nameless option'] }
                                        error={ touched[option.name ? option.name : 'Nameless option'] && errors[option.name ? option.name : 'Nameless option'] }
                                        placeholder={ 'Enter description here' }
                                        onChange={ handleChange }
                                      />
                                  }
                                </Option>
                              )
                            }
                          </Formik>
                        );
                      } else if (option.type === 'select') {
                        return (
                          <Formik
                            enableReinitialize={ true }
                            initialValues={ {
                              [option.name ? option.name : 'Nameless option']: '',
                            } }
                            onSubmit={ (values) => {
                              this.props.updateRule({
                                variables: {
                                  name: this.props.activeRule.name,
                                  updatedOption: {
                                    id: option.id,
                                    description: values[option.name ? option.name : 'Nameless option'],
                                  },
                                },
                              }).then(() => {
                                toast.success('Option description was successfully saved. Thank you so much for contributing!');
                              }).catch((error) => {
                                toast.error(`Oops, error: ${(error.graphQLErrors && error.graphQLErrors[0] && error.graphQLErrors[0].message) || error.message}`);
                              });
                            } }
                            validationSchema={
                              Yup.object().shape({
                                [option.name ? option.name : 'Nameless option']: Yup.string().required('Required'),
                              })
                            }
                            key={ option.name || i }
                          >
                            {
                              ({
                                 values,
                                 touched,
                                 errors,
                                 handleChange,
                                 handleSubmit,
                               }) => (
                                <Option>
                                  <OptionHeader isSpaceBetween={ true }>
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
                              )
                            }
                          </Formik>
                        );
                      } else if (option.type === 'string' || option.type === 'number') {
                        return (
                          <Formik
                            enableReinitialize={ true }
                            initialValues={ {
                              [option.name ? option.name : 'Nameless option']: '',
                            } }
                            onSubmit={ (values) => {
                              this.props.updateRule({
                                variables: {
                                  name: this.props.activeRule.name,
                                  updatedOption: {
                                    id: option.id,
                                    description: values[option.name ? option.name : 'Nameless option'],
                                  },
                                },
                              }).then(() => {
                                toast.success('Option description was successfully saved. Thank you so much for contributing!');
                              }).catch((error) => {
                                toast.error(`Oops, error: ${(error.graphQLErrors && error.graphQLErrors[0] && error.graphQLErrors[0].message) || error.message}`);
                              });
                            } }
                            validationSchema={
                              Yup.object().shape({
                                [option.name ? option.name : 'Nameless option']: Yup.string().required('Required'),
                              })
                            }
                            key={ option.name || i }
                          >
                            {
                              ({
                                 values,
                                 touched,
                                 errors,
                                 handleChange,
                                 handleSubmit,
                               }) => (
                                <Option>
                                  <OptionHeader isSpaceBetween={ true }>
                                    {
                                      option.name &&
                                      <OptionName as={ 'h3' }>
                                        <label htmlFor={ option.name }>
                                          { option.name }
                                        </label>
                                      </OptionName>
                                    }

                                    {
                                      !option.description &&
                                      <Button onClick={ handleSubmit }>Submit description</Button>
                                    }
                                  </OptionHeader>

                                  {
                                    option.description ?
                                      <OptionDescription>{ option.description }</OptionDescription>
                                      :
                                      <OptionDescriptionInput
                                        name={ option.name ? option.name : 'Nameless option' }
                                        value={ values[option.name ? option.name : 'Nameless option'] }
                                        error={ touched[option.name ? option.name : 'Nameless option'] && errors[option.name ? option.name : 'Nameless option'] }
                                        placeholder={ 'Enter description here' }
                                        onChange={ handleChange }
                                      />
                                  }

                                  <Input
                                    type={ option.type === 'number' ? 'number' : 'text' }
                                    id={ option.name }
                                    value={ option.value }
                                    placeholder={ 'Enter value here' }
                                    onChange={ (e) => this.props.onOptionChange(this.props.activeRule.name, option.name, e.currentTarget.value) }
                                  />
                                </Option>
                              )
                            }
                          </Formik>
                        );
                      }
                    })
                  }
                </Section>
              }

              <Section isAllowedToGrow={ true }>
                <Formik
                  enableReinitialize={ true }
                  initialValues={ {
                    correct: examples ? examples.correct : '',
                    incorrect: examples ? examples.incorrect : '',
                  } }
                  onSubmit={ (values) => {
                    this.props.updateRule({
                      variables: {
                        name: this.props.activeRule.name,
                        newExample: {
                          options: this.props.activeRule.options ? this.props.activeRule.options.map((option) => ({
                            name: option.name,
                            value: option.type === 'string' || option.type === 'number' ? '' : option.value, // Because options with type string or string should not effect on examples since they have too many results
                          })) : null,
                          correct: values.correct,
                          incorrect: values.incorrect,
                        },
                      },
                    }).then(() => {
                      toast.success('Examples were successfully saved. Thank you so much for contributing!');
                    }).catch((error) => {
                      toast.error(`Oops, error: ${(error.graphQLErrors && error.graphQLErrors[0] && error.graphQLErrors[0].message) || error.message}`);
                    });
                  } }
                  validationSchema={
                    Yup.object().shape({
                      correct: Yup.string().required('Required'),
                      incorrect: Yup.string().required('Required'),
                    })
                  }
                >
                  {
                    ({
                       values,
                       touched,
                       errors,
                       setFieldValue,
                       handleSubmit,
                     }) => (
                      <React.Fragment>
                        <SectionHeader>
                          <Heading as={ 'h2' }>Rule examples</Heading>
                          {
                            !examples &&
                            <Button onClick={ handleSubmit }>Submit examples</Button>
                          }
                        </SectionHeader>
                        <RuleExamples as={ 'form' } onSubmit={ handleSubmit }>
                          <StyledRuleExample
                            name={ 'correct' }
                            value={ values.correct }
                            onChange={ (value) => setFieldValue('correct', value) }
                            theme={ 'correct' }
                            error={ touched.correct && errors.correct }
                            isEditingModeEnabled={ !examples }
                          />

                          <StyledRuleExample
                            name={ 'incorrect' }
                            value={ values.incorrect }
                            onChange={ (value) => setFieldValue('incorrect', value) }
                            theme={ 'incorrect' }
                            error={ touched.incorrect && errors.incorrect }
                            isEditingModeEnabled={ !examples }
                          />
                        </RuleExamples>
                      </React.Fragment>
                    )
                  }
                </Formik>
              </Section>
            </SectionsWrapper>
        }

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


export const RuleInfo = graphql(UPDATE_RULE, { name: 'updateRule' })(RuleInfoComponent);
