import styled from "styled-components";
import { Link } from "react-router-dom";

export const ConsideracionListStyled = styled.section`
  padding: 1.5rem;
`;

export const ConsideracionItemStyled = styled(Link)`
  position: relative;
  display: block;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  font-size: 1.25rem;
  font-weight: bold;
  text-decoration: none;
  color: inherit;
  border: 1px solid #00000040;
  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const ConsideracionIsActualDateStyled = styled.span`
  position: absolute;
  right: 1.5rem;
  color: green;
`;
