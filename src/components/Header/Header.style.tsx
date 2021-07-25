import styled from "styled-components";
import { AppBar } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import PeopleIcon from '@material-ui/icons/People';
import StoreIcon from '@material-ui/icons/Store';

export const HeaderAppBar = styled(AppBar)`
  background-color: #3c6c83;
  box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.05);
  position: sticky;
  border-radius: 4px;
  height: 7%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const IconButtonStyled = styled(IconButton)``;

export const StoreIconStyled = styled(StoreIcon)`
  color: #eeeeee;
`;

export const TypographyStyled = styled(Typography)`
  color: #eeeeee;
  font-weight: bold;
  position: relative;
  right: 10px;
`;

export const PeopleIconStyled = styled(PeopleIcon)`
  color: #eeeeee;
`;
