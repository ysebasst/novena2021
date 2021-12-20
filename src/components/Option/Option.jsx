import styled from "styled-components";
import { Link } from "react-router-dom";

const OptionStyled = styled(Link)`
  display: block;
  padding: 0.5rem;
  text-decoration: none;
  color: inherit;
  user-select: none;
  box-shadow: 0 -0.5rem 0.5rem #00000020 inset;
  border: 1px solid #00000040;
  &:active {
    box-shadow: 0 0.5rem 0.5rem #00000020 inset;
  }
`;

export const Option = (props) => {
  return <OptionStyled {...props} />;
};

export default Option;
