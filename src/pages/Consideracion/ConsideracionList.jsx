import {
  ConsideracionListStyled,
  ConsideracionItemStyled,
  ConsideracionIsActualDateStyled,
} from "./ConsideracionList.styles";

import MainTitle from "../../components/MainTitle";

import consideraciones from "../../api/services/consideraciones";
import ButtonBack from "../../components/ButtonBack";

export const ConsideracionList = () => {
  const isActualDate = (date) => date === new Date().toLocaleDateString();

  return (
    <ConsideracionListStyled>
      <ButtonBack />
      <MainTitle title="Consideración del dia" />
      {consideraciones.map((consideracion) => (
        <ConsideracionItemStyled
          to={consideracion.path}
          key={consideracion.title}
        >
          {consideracion.title} - {consideracion.fecha}
          {isActualDate(consideracion.fecha) && (
            <ConsideracionIsActualDateStyled>
              Hoy
            </ConsideracionIsActualDateStyled>
          )}
        </ConsideracionItemStyled>
      ))}
    </ConsideracionListStyled>
  );
};
