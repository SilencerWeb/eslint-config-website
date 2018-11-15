import styled from 'styled-components';

import { color } from 'ui/theme';


export const Button = styled.a`
  display: inline-block;
  vertical-align: top;
  text-decoration: none;
  color: ${color.secondary};
  border: 1px solid ${color.tertiary};
  border-radius: 4px;
  padding-top: 7.5px;
  padding-right: 15px;
  padding-bottom: 7.5px;
  padding-left: 15px;
  transition: 0.1s;
  cursor: pointer;
  
  &:hover {
    border-color: ${color.primary};
  }
`;
