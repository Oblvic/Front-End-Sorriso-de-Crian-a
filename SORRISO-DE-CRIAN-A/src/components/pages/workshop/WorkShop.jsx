import wave2 from "../../../assets/wave2.jpg";
import { GridArea, Workshop, WorkShopArea } from "./WorkShopStyled.jsx";
import logopng from "../../../assets/logo.png";
import yoga from "../../../assets/yoga.png";
import dance from "../../../assets/dance.png";
import craftsmanship from "../../../assets/craftsmanship.png";

const WorkShop = () => {
  return (
    <>
      <WorkShopArea style={{ backgroundImage: `url(${wave2})` }}>
        <img src={logopng} alt="logopng" />
        <h1>
          Juntos, construímos pontes para um futuro melhor: descubra como nossos
          projetos transformam vidas.
        </h1>
      </WorkShopArea>
      <Workshop>
        <h1>Pojetos que transformam vidas</h1>
        <p>Podem mudar o mundo através da educação</p>
        <GridArea>
          <img src={yoga} alt="yoga" />
          <img src={dance} alt="dance" />
          <img src={craftsmanship} alt="craftsmanship" />
        </GridArea>
      </Workshop>
    </>
  );
};

export default WorkShop;
