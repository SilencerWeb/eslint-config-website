import styled from "styled-components";

import { color } from "ui/theme";

export const Link = styled.a`
  color: ${color.primary};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
