import { useEffect, useState } from "react";
import styled from "styled-components";

const ParagraphStyled = styled.p`
  font-size: ${(props) => props.fontSize};
  user-select: none;
`;

export const Paragraph = ({ children, ...props }) => {
  const [fontSize, setFontSize] = useState("20px");
  useEffect(() => {
    if (localStorage.getItem("fontSize")) {
      setFontSize(localStorage.getItem("fontSize"));
    }
  }, []);
  return (
    <ParagraphStyled fontSize={fontSize} {...props}>
      {children}
    </ParagraphStyled>
  );
};

export default Paragraph;
