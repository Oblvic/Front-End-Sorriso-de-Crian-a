import thumbnail from "../../assets/thumbnailhome.jpg";
import { Button } from "../navbar/NavBarStyle";
import {
  About,
  HomeArea,
  Culture,
  CultureInformation,
  Informations,
  Voluntary,
} from "./HomePageStyle";
import imgabout from "../../assets/imgabout.jpg";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
import { Link } from "react-router-dom";

const renderInformations = [
  {
    id: 1,
    title: "VALORES",
    text: "Amor, Disponibilidade para servir e acolher, compromisso social e ambiental, potencilizar e catalisar talentos Profissionalismo.",
    img: img1,
  },
  {
    id: 2,
    title: "MISSÃO",
    text: "Proporcionar meio de subsistência, educação moral e espiritual para aqueles que mais precisam. Conectar projetos e pessoas gerando uma grande transformação positiva no mundo. Acolher com humanidade todos que precisam de amparo, seja espiritual, emocional ou social.",
    img: img2,
  },

  {
    id: 3,
    title: "VISÃO",
    text: "Seremos, referência em impacto social na Bahia em 10 anos, transformando vidas através de projetos em educação, saúde e cultura. Inspiraremos nosso público-alvo, voluntários e doadores a realizar seus sonhos e construir um futuro melhor para todos.",
    img: img3,
  },
];

const Home = () => {
  return (
    <>
      <HomeArea>
        <img src={thumbnail} alt="thumbnail" />
        <About>
          <section>
            <h1>SORRISO DE CRIANÇA</h1>
            <p>
              Zélia e Carmerival são um casal que há 50 anos se dedicam à
              criação de crianças e ao trabalho social. Eles começaram com um
              terreno custeado por seus próprios recursos em um dos novos
              bairros de Feira de Santana na década de 70. O casal acolheu as
              crianças que lhes chegavam e lhes proporcionou p acesso a moradia,
              educação intelectual, moral e esperitual, esportes, atividades
              recreativas, estudo de línguas estrangeiras e ainda meditação e
              yoga.
            </p>
            <Link to="doacoes">
              <Button style={{ width: "100%" }}>FAÇA SUA DOAÇÃO</Button>
            </Link>
          </section>
          <img src={imgabout} alt="imgabout" />
        </About>
        <Culture>
          <h1>CULTURA ORGANIZACIONAL</h1>
          <CultureInformation>
            {renderInformations.map((info, id) => {
              return (
                <Informations key={id}>
                  <img src={info.img} alt="infoimg" />
                  <div>
                    <h1>{info.title}</h1>
                    <p>{info.text}</p>
                  </div>
                </Informations>
              );
            })}
          </CultureInformation>
        </Culture>
        <Voluntary>
          <About>
            <section>
              <h1>SEJA UM VOLUTÁRIO</h1>
              <h2>
                Você já pensou em fazer a diferença na vida de outras pessoas?
              </h2>
              <p>
                Queremos convidá-lo a se tornar parte de uma jornada inspiradora
                e gratificante como voluntário em nossa ONG. Acreditamos que
                cada pequena ação pode gerar um impacto positivo duradouro. Seja
                você um estudante, um profissional, um aposentado ou alguém que
                simplismente deseja contribuir para um mundo melhor. há um lugar
                para você em nossa equipe de voluntários.
              </p>
            </section>
            <img src={img4} alt="voluntaryimg" />
          </About>
          <Button>
            <Link to="login">SEJA UM VOLUTÁRIO</Link>
          </Button>
        </Voluntary>
      </HomeArea>
    </>
  );
};

export default Home;
