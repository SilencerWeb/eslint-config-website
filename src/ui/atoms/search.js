import styled from "styled-components";

import { color } from "ui/theme";
import { rgba } from "utils";

export const Search = styled.input`
  width: 100%;
  font-size: 14px;
  line-height: 1;
  color: ${color.secondary};
  background-color: #f2f2f2;
  border: 1px solid transparent;
  border-radius: 40px;
  padding-top: 10px;
  padding-right: 15px;
  padding-bottom: 10px;
  padding-left: 15px;
  transition: 0.1s;
  outline: none;

  &::placeholder {
    color: ${rgba(color.secondary, 0.7)};
  }

  &:focus {
    border-color: ${color.primary};
  }
`;
