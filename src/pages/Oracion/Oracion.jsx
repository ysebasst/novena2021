import { useParams } from "react-router-dom";

import MainTitle from "../../components/MainTitle";

import oraciones from "../../api/services/oraciones";
import { OracionStyled } from "./Oracion.styles";

export default function Oracion() {
  const params = useParams();
  const oracion = oraciones.filter(
    (oracion) => oracion.path === params.name
  )[0];
  return (
    <OracionStyled>
      <MainTitle title={oracion.name} />
      {oracion.contenido.map((paragraph) => (
        <p>{paragraph}</p>
      ))}
    </OracionStyled>
  );
}
