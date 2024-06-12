import styled from "styled-components";

export const HomeArea = styled.section`
  img {
    width: 100%;
  }
`;

export const About = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 2%;
  align-items: center;
  justify-content: center;

  img {
    border-radius: 25px;
    height: 450px;
    width: 450px;
    margin: 0 25%;
  }

  section {
    padding: 0 10%;
    margin: 0 5%;
  }

  h1 {
    color: #4080ed;
    font-size: 35px;
    margin-bottom: 5%;
  }

  p {
    width: 100%;
    font-size: 18px;
    margin-bottom: 5%;
  }

  @media (max-width: 868px) {
    grid-template-columns: 1fr;

    img {
      height: 500px;
      width: 350px;
      margin: 0;
    }

    section {
      padding: 0 5%;
      margin: 0;
    }

    h1 {
      font-size: 28px;
    }

    p {
      font-size: 16px;
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;

    img {
      height: 300px;
      width: 100%;
      margin: 0;
    }

    section {
      padding: 0 5%;
      margin: 0;
    }

    h1 {
      font-size: 28px;
    }

    p {
      font-size: 16px;
    }
  }

  @media (max-width: 568px) {
    display: flex;
    flex-direction: column;
    text-align: center;

    img {
      height: 350px;
      width: 300px;
      margin: 5% 0;
    }

    section {
      padding: 0 5%;
      margin: 0;
    }

    h1 {
      font-size: 28px;
    }

    p {
      font-size: 16px;
    }
  }
`;

export const Culture = styled.section`
  h1 {
    margin: 5%;
    text-align: center;
    font-size: 40px;
    color: #4080ed;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 30px;
    }
  }
`;

export const CultureInformation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #4080ed;
  padding: 1% 0;

  @media (max-width: 768px) {
    padding: 2% 0;
    margin-bottom: 10%;
  }
`;

export const Informations = styled.section`
  width: 70%;
  display: grid;
  grid-template-columns: 15% 1fr;
  background-color: white;
  margin: 3%;
  border-radius: 25px;

  h1 {
    font-size: 30px;
    margin: 0;
    text-align: left;
    margin: 1% 0;
  }

  img {
    margin: 0;
    padding: 5%;
    border-radius: 25px;
    height: 150px;
    width: 150px;
  }

  div {
    display: flex;
    flex-direction: column;
    text-align: left;
  }

  @media (max-width: 768px) {
    display: flex;
    width: 90%;
    grid-template-columns: 1fr;

    img {
      height: 100px;
      width: 100px;
      padding: 2%;
    }

    h1 {
      font-size: 25px;
    }

    div {
      text-align: left;
      padding: 1%;
    }
  }
`;

export const Voluntary = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    width: 40%;
  }

  img {
    margin: 0;
    height: 550px;
    width: 100%;
  }

  h2 {
    margin: 5% 0;
    font-size: 20px;
  }

  a {
    text-decoration: none;
    color: white;
  }

  @media (max-width: 868px) {
    display: flex;
    justify-content: center;

    img {
      height: 300px;
      width: 400px;
    }

    button {
      width: 80%;
    }

    h2 {
      font-size: 18px;
    }
  }

  @media (max-width: 768px) {
    img {
      height: 300px;
    }

    button {
      width: 80%;
    }

    h2 {
      font-size: 18px;
    }
  }
`;
