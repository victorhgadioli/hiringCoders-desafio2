import React from "react";
import { PageStyled } from "./ActionSpace.style";

const ActionPage: React.FC = ({ children }) => {
  return <PageStyled>{children}</PageStyled>;
};

export default ActionPage;
