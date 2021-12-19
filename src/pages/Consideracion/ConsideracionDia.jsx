import { useParams } from "react-router-dom";

import { ConsideracionDiaStyled } from "./ConsideracionDia.styles";

import MainTitle from "../../components/MainTitle";
import ButtonBack from "../../components/ButtonBack";

import consideraciones from "../../api/services/consideraciones";
import Paragraph from "../../components/Paragraph";

export const ConsideracionDia = () => {
  const params = useParams();
  const consideracion = consideraciones.filter(
    (consideracion) => consideracion.path === params.dia
  )[0];
  return (
    <ConsideracionDiaStyled>
      <ButtonBack />
      <MainTitle title={consideracion.title} />
      {consideracion.contenido.map((paragraph, i) => (
        <Paragraph key={i}>{paragraph}</Paragraph>
      ))}
    </ConsideracionDiaStyled>
  );
};
