import styled from "styled-components";

import MainTitle from "../../components/MainTitle";
import ButtonBack from "../../components/ButtonBack";

import villancicos from "../../api/services/villancicos";
import { Option } from "../../components/Option";

const VillancicosListStyled = styled.section`
  padding: 1.5rem;
`;

export const VillancicosList = () => {
  return (
    <VillancicosListStyled>
      <ButtonBack />
      <MainTitle title="Villancicos" />
      {villancicos.map((villancico) => (
        <Option to={villancico.path} key={villancico.title}>
          {villancico.title}
        </Option>
      ))}
    </VillancicosListStyled>
  );
};

export default VillancicosList;
