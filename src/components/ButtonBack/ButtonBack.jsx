import { useNavigate } from "react-router-dom";

import { ButtonBackStyled } from "./ButtonBack.styles";

export const ButtonBack = () => {
  const navigate = useNavigate();
  return (
    <ButtonBackStyled onClick={() => navigate(-1)}>
      &#129044; Volver
    </ButtonBackStyled>
  );
};
