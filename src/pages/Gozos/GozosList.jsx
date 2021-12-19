import styled from "styled-components";
import ButtonBack from "../../components/ButtonBack";
import MainTitle from "../../components/MainTitle";

import gozos from "../../api/services/gozos";
import Paragraph from "../../components/Paragraph";

const GozosListStyled = styled.section`
  padding: 1.5rem;
`;
const GozoStyled = styled.div`
  margin-bottom: 0.5rem;
  text-align: center;
  border-bottom: 1px solid #00000040;
  &:last-of-type {
    margin-bottom: 0;
    border-bottom: none;
  }
`;
const FraseStyled = styled.span`
  display: block;
`;

export const GozosList = () => {
  return (
    <GozosListStyled>
      <ButtonBack />
      <MainTitle title={"Gozos"} />
      {gozos.map((gozo, i) => (
        <GozoStyled key={i}>
          <h3>{gozo.title}</h3>
          <Paragraph>
            {gozo.contenido[0].map((frase) => (
              <FraseStyled key={frase}>{frase}</FraseStyled>
            ))}
          </Paragraph>
          <Paragraph style={{ fontWeight: "bold" }}>
            {gozo.contenido[1]}
          </Paragraph>
        </GozoStyled>
      ))}
    </GozosListStyled>
  );
};

export default GozosList;
