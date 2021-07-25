import React from "react";
import { PaperStyled } from "./Window.style";

const Window: React.FC = ({ children }) => {
  return <PaperStyled elevation={24}>{children}</PaperStyled>;
};

export default Window;
