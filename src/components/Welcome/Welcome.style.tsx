import styled from "styled-components";

import { Paper, Typography } from "@material-ui/core";

export const Page = styled(Paper)`
  background-color: #eeeeee;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
`;

export const TypographyStyled = styled(Typography)`
  color: #1a4c65;
  font-weight: bold;
  font-size: 30px;
`;
