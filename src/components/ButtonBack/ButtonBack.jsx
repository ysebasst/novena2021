import { useNavigate } from "react-router-dom";

import { ButtonBackStyled } from "./ButtonBack.styles";

export const ButtonBack = () => {
  const navigate = useNavigate();
  return (
    <ButtonBackStyled onClick={() => navigate(-1)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M13.939 4.939 6.879 12l7.06 7.061 2.122-2.122L11.121 12l4.94-4.939z"></path>
      </svg>{" "}
      Volver
    </ButtonBackStyled>
  );
};
