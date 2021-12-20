import styled from "styled-components";

import {Option} from '../../components/Option'

export const ConsideracionListStyled = styled.section`
  padding: 1.5rem;
`;

export const ConsideracionItemStyled = styled(Option)`
  position: relative;
`;

export const ConsideracionIsActualDateStyled = styled.span`
  position: absolute;
  right: 0.5rem;
  padding: 0.0625rem 0.25rem;
  color: #ffffff;
  background-color: green;
  border-radius: 0.125rem;
`;
