import { MainTitleStyled } from "./MainTitle.styles";

export default function MainTitle({ title, ...props }) {
  return <MainTitleStyled {...props}>{title}</MainTitleStyled>;
}
