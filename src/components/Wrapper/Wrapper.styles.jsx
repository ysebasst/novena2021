import styled from "styled-components";

export const WrapperStyled = styled.div`
  padding: ${({ padding }) => (padding ? padding : "0")};
  margin: ${({ margin }) => (margin ? margin : "0")} auto;
  max-width: 720px;
  @media screen and (min-width: 1110px) {
    max-width: 1110px;
  }
`;
