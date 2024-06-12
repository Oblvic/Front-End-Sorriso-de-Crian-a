import { Contact, FooterArea, Footerinformations } from "./FooterStyle";
import wave from "../../assets/wave.jpg";

const Footer = () => {
  return (
    <FooterArea id="contato" style={{ backgroundImage: `url(${wave})` }}>
      <Footerinformations>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3898.7105000235456!2d-38.970985124181354!3d-12.267859946058271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71437c715fc7209%3A0xd16e774bd24b737c!2sR.%20J%C3%BApiter%2C%20450%20-%20Jardim%20Ac%C3%A1cia%2C%20Feira%20de%20Santana%20-%20BA%2C%2044004-336!5e0!3m2!1spt-BR!2sbr!4v1718164875163!5m2!1spt-BR!2sbr"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </Footerinformations>
      <Footerinformations>
        <Contact>
          <h1>FALE CONOSCO!</h1>
          <p>E-mail: contato@ifsorrisodecrianca.com.br</p>
          <p>Tel: +55 (75) 3221 5021</p>
          <p>Cel: +55 (75) 99299-9231</p>
          <p>Rua Júpiter, 450 - Jardim Acácia, Feira de Santana - BA, Brasil</p>
          <p>CEP 44004-336</p>
        </Contact>
      </Footerinformations>
    </FooterArea>
  );
};

export default Footer;
