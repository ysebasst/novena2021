import { MainStyled, WrapperStyled } from "./Main.styles";

export default function Main({ children, ...props }) {
  return (
    <MainStyled {...props}>
      <WrapperStyled>{children}</WrapperStyled>
    </MainStyled>
  );
}
