import { WrapperStyled } from "./Wrapper.styles";

export default function Wrapper({ children, ...props }) {
  return <WrapperStyled {...props}>{children}</WrapperStyled>;
}
