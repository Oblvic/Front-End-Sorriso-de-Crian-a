import styled from "styled-components";

export const Background = styled.section`
  background-size: cover;
  height: 500px;

  img {
    width: 100%;
    max-width: 400px;
  }

  h1 {
    margin: 1% 2%;
    width: 100%;
    max-width: 50%;
    color: white;
    font-size: 35px;
  }

  @media (max-width: 768px) {
    height: 600px;

    h1 {
      font-size: 28px;
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 24px;
    }
  }
`;

export const DonationsArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  p {
    font-size: 18px;
  }

  @media (max-width: 768px) {
    p {
      font-size: 16px;
    }
  }

  @media (max-width: 480px) {
    p {
      font-size: 14px;
    }
  }
`;

export const DonationsInformation = styled.div`
  margin-top: 5%;
  background-color: #407fed4e;
  width: 80%;
  max-width: 60%;
  border-radius: 25px;
  text-align: center;
  padding: 5%;

  h1 {
    font-size: 30px;
    color: black;
  }

  button {
    margin-top: 5%;
    width: 80%;
    max-width: 300px;
  }

  @media (max-width: 768px) {
    width: 90%;

    h1 {
      font-size: 28px;
    }

    button {
      width: 90%;
    }
  }

  @media (max-width: 480px) {
    width: 100%;

    h1 {
      font-size: 24px;
    }

    button {
      width: 100%;
    }
  }
`;

export const DonationsInformationGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  h1 {
    margin: 2% 0;
    color: black;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;

    h1 {
      margin: 4% 0;
    }
  }
`;
