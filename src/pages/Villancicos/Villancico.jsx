import { useParams } from "react-router-dom";
import styled from "styled-components";

import ButtonBack from "../../components/ButtonBack";
import MainTitle from "../../components/MainTitle";
import Paragraph from "../../components/Paragraph";

import villancicos from "../../api/services/villancicos";

const VillancicoStyled = styled.section`
  padding: 1.5rem;
`;

const FraseStyled = styled.span`
  display: block;
  text-align: center;
`;

export const Villancico = () => {
  const params = useParams();
  const villancico = villancicos.find(
    (villancico) => params.name === villancico.path
  );

  return (
    <VillancicoStyled>
      <ButtonBack />
      <MainTitle title={villancico.title} />
      {villancico.contenido.map((paragraph, i) => (
        <Paragraph key={i}>
          {paragraph.map((frase) => (
            <FraseStyled>{frase}</FraseStyled>
          ))}
        </Paragraph>
      ))}
    </VillancicoStyled>
  );
};

export default Villancico;
