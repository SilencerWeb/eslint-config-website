import styled from 'styled-components';

import { color } from 'ui/theme';


export const Input = styled.input`
  min-height: 38px;
  border: 1px solid ${color.tertiary};
  border-radius: 4px;
  padding-right: 8px;
  padding-left: 8px;
  outline: none;
  transition: 0.1s;
  
  &:focus {
    border-color: ${color.primary};
  }
`;
