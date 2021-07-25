import styled from "styled-components";
import { Container } from "@material-ui/core";

export const FooterStyled = styled("footer")`
  background-color: #1a4c65;
  color: #eeeeee;
  padding: 20px 0;
  border-radius: 0 0 4px 4px;
`;

export const FooterContainer = styled(Container)`
  display: flex;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
`;
