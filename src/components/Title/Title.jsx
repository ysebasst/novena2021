import { TitleStyled } from "./Title.styles";

export default function Title({ title, ...props }) {
  return <TitleStyled {...props}>{title}</TitleStyled>;
}
