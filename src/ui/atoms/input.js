import styled, { css } from "styled-components";

import { color } from "ui/theme";

export const Input = styled.input`
  width: 100%;
  min-height: 38px;
  border: 1px solid ${color.tertiary};
  border-radius: 4px;
  padding-top: 8px;
  padding-right: 8px;
  padding-bottom: 8px;
  padding-left: 8px;
  outline: none;
  resize: vertical;
  transition: 0.1s;

  &:focus {
    border-color: ${color.primary};
  }

  ${(props) => css`
    ${props.error &&
    css`
      border-color: ${color.error};

      &:focus {
        border-color: ${color.error};
      }
    `}
  `}
`;
