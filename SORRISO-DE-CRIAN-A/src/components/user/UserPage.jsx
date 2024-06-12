import { Button } from "../navbar/NavBarStyle";
import {
  Account,
  ButtonArea,
  Info,
  InfoSection,
  UserInformations,
  UserPainel,
} from "./UserPageStyle";

const UserPage = () => {
  return (
    <UserPainel>
      <h1>PAINEL DO USUÁRIO</h1>
      <UserInformations>
        <Account>
          <h2>MINHAS INFORMAÇÕES</h2>
          <Info>
            <h3>EMAIL</h3>
            <p></p>
            <h3>Nome</h3>
            <p></p>
            <h3>MEU PLANO ATUAL</h3>
            <p></p>
            <br></br>
          </Info>
        </Account>
        <InfoSection>
          <ButtonArea>
            <h3>MINHAS DOAÇÕES</h3>
            <button>
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </ButtonArea>
          <ButtonArea>
            <h3>MEU PLANO</h3>
            <button>
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </ButtonArea>
          <ButtonArea>
            <h3>MEUS WORKSHOPS</h3>
            <button>
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </ButtonArea>
        </InfoSection>
      </UserInformations>
    </UserPainel>
  );
};

export default UserPage;
