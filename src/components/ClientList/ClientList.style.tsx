import styled from "styled-components";

import Table from "@material-ui/core/Table";
import { Button, IconButton, Paper, Typography } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

export const Page = styled(Paper)`
  background-color: #eeeeee;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: center;
  justify-content: flex-start;
`;

export const TableStyled = styled(Table)``;

export const PaperStyled = styled(Paper)`
  max-width: 1600px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ButtonStyled = styled(Button)`
  padding: 10px;
  background-color: #1a4c65;
  color: #eeeeee;
  border-radius: 20px;
`;

export const TypographyStyled = styled(Typography)`
  color: red;
  font-weight: bold;
`;

export const IconButtonStyled = styled(IconButton)``;

export const DeleteIconStyled = styled(DeleteIcon)`
  color: #1a4c65;
`;
