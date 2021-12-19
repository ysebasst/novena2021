import { useParams } from "react-router-dom";

import MainTitle from "../../components/MainTitle";

import oraciones from "../../api/services/oraciones";
import { OracionStyled } from "./Oracion.styles";
import ButtonBack from "../../components/ButtonBack";
import Paragraph from "../../components/Paragraph";

export default function Oracion() {
  const params = useParams();
  const oracion = oraciones.filter(
    (oracion) => oracion.path === params.name
  )[0];
  return (
    <OracionStyled>
      <ButtonBack />
      <MainTitle title={oracion.name} />
      {oracion.contenido.map((paragraph, i) => (
        <Paragraph key={i}>{paragraph}</Paragraph>
      ))}
    </OracionStyled>
  );
}
