import * as React from 'react';
import styled from 'styled-components';

import { color } from 'ui/theme';


export const Heading = styled.h1`
  font-size: 20px;
  font-weight: 500;
  color: ${color.secondary};
  margin-top: 0;
  margin-bottom: 15px;
  
  &:last-child {
    margin-bottom: 0;
  }
`;
