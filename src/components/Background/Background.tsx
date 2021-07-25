import React from "react";
import { BackgroundStyled } from "./Background.style";

const Background: React.FC = (props) => {
  return <BackgroundStyled>{props.children}</BackgroundStyled>;
};

export default Background;
