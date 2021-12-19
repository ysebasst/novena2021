import styled from "styled-components";

export const MainTitleStyled = styled.h2`
  margin: ${({ margin }) => (margin ? margin : ".5rem")} 0;
  font-size: 1.5rem;
  font-weight: bold;
`;
