import styled from "styled-components";

export const FooterArea = styled.section`
  margin-top: 5%;
  background-size: cover;
  background-position: 0% 52%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 750px;

  iframe {
    border-radius: 25px;
  }

  @media (max-width: 1300px) {
    height: 600px;

    ifram {
      width: 600px;
      height: 600px;
    }
  }

  @media (max-width: 1230px) {
    grid-template-columns: 1fr;
    height: auto;
  }

  @media (max-width: 568px) {
    iframe {
      width: 300px;
      height: 300px;
      margin: 5% 0;
    }
  }
`;

export const Footerinformations = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    margin: 20px 0;
  }
`;

export const Contact = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: top;
  align-items: center;
  width: 600px;
  height: 450px;
  border-radius: 25px;
  background-color: white;
  padding: 20px;
  box-sizing: border-box;

  h1 {
    color: #4080ed;
    font-size: 30px;
    margin: 10% 0;
  }

  p {
    margin: 1% 0;
  }

  @media (max-width: 1200px) {
    width: 500px;
    height: 400px;

    h1 {
      font-size: 26px;
    }
  }

  @media (max-width: 768px) {
    width: 90%;
    height: auto;
    padding: 10px;

    h1 {
      font-size: 24px;
      margin: 5% 0;
    }

    p {
      font-size: 14px;
    }

    @media (max-width: 568px) {
      width: 300px;
    }
  }
`;
