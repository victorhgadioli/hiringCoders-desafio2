import React from "react";
import {
  HeaderAppBar,
  IconButtonStyled,
  PeopleIconStyled,
  StoreIconStyled,
} from "./Header.style";
import { Toolbar } from "@material-ui/core";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <HeaderAppBar position={"sticky"}>
      <Toolbar>
        <Link replace to={"/clients"}>
          <IconButtonStyled>
            <PeopleIconStyled fontSize="large" />
          </IconButtonStyled>
        </Link>
        <IconButtonStyled>
          <Link replace to={"/products"}>
            <StoreIconStyled fontSize="large" />
          </Link>
        </IconButtonStyled>
      </Toolbar>
    </HeaderAppBar>
  );
};

export default Header;
