import {
  DonationsArea,
  DonationsInformation,
  DonationsInformationGrid,
  Background,
} from "./DonationsStyled";
import logopng from "../../../assets/logo.png";
import wave2 from "../../../assets/wave2.jpg";
import { Button } from "../../navbar/NavBarStyle";
import pix from "../../../assets/pix.svg";

const Donations = () => {
  return (
    <>
      <Background style={{ backgroundImage: `url(${wave2})` }}>
        <img src={logopng} alt="logo" />
        <h1>
          Transforme sua generosidade em espreança. Doe hoje, mude vidas amanhã.
        </h1>
      </Background>
      <DonationsArea>
        <DonationsInformation>
          <h1>Doe usadondo cartão de crédito ou boleto</h1>
          <p>
            Selecione essa opção para doação recorrentes ou avulsas utilizando
            cartão de crédito ou boleto bancário.
          </p>
          <p>Você será refirecionado para uma nova página.</p>
          <Button>Clique para doar</Button>
        </DonationsInformation>
        <DonationsInformation>
          <DonationsInformationGrid>
            <img src={pix} alt="piximg" />
            <div>
              <h1>Doe usando PIX</h1>
              <p>pix@filano/ 11.111.111/0001-11</p>
            </div>
          </DonationsInformationGrid>
        </DonationsInformation>
        <DonationsInformation>
          <DonationsInformationGrid>
            <div>
              <h1>Doações via conta corrente:</h1>
              <p>Associação Educacional Sorriso de Criança</p>
              <p>CNPJ 11.111.111/0001-11</p>
              <p>Banco Jesus(111)</p>
              <p>AG. 11111</p>
              <p>C/C 11111-1</p>
              <p>Banco Jesus2</p>
              <p>AG. 11111</p>
              <p>C/C 11111-1</p>
            </div>
            <div>
              <h1>Doações Internacionais:</h1>
              <p>Associação Educacional Sorriso de Criança</p>
              <p>CNPJ 11.111.111/0001-11</p>
              <p>Banco Jesus S/A - 111</p>
              <p>Agência Jesus n 11111-1</p>
              <p>Conta Corrente n 111111-1</p>
              <p>Av Jesus, 1111 - Cep 11111-011 FSA-BA-Bahia - Brasil</p>
              <p>Swift Code Jesus</p>
              <p>IBAN BR11 1111 1111 1111 1111 111C1</p>
            </div>
          </DonationsInformationGrid>
        </DonationsInformation>
      </DonationsArea>
    </>
  );
};

export default Donations;
