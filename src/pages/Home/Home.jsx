import { HomeStyled, ImgStyled, InfoStyled } from "./Home.styles";

import MainTitle from "../../components/MainTitle";
import { Option } from "../../components/Option";

export default function Home() {
  const orden = [
    { path: "/oracion/todos-los-dias", title: "Oración para todos los días" },
    { path: "/consideracion", title: "Consideraciones" },
    {
      path: "/oracion/santisima-virgen",
      title: "Oración a la santísima vírgen",
    },
    { path: "/oracion/san-jose", title: "Oración a san José" },
    { path: "/gozos", title: "Gozos navideños" },
    { path: "/oracion/nino-jesus", title: "Oración niño Jesus" },
    { path: "/villancicos", title: "Villancicos" },
  ];

  return (
    <HomeStyled>
      <ImgStyled src="/static/novena.jpg" alt="pesebre" />
      <InfoStyled>
        <MainTitle title="Orden Novena de Navidad" />
        {orden.map((option, i) => (
          <Option to={option.path} key={option.title}>
            {i + 1}. {option.title}
          </Option>
        ))}
      </InfoStyled>
    </HomeStyled>
  );
}
