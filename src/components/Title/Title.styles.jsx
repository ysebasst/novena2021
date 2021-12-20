import styled from "styled-components";

export const TitleStyled = styled.h3`
  margin: ${({ margin }) => (margin ? margin : ".5rem")} 0;
  font-size: 1.25rem;
  font-weight: bold;
  user-select: none;
`;
