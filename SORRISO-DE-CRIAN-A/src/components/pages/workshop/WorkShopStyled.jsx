import styled from "styled-components";

export const WorkShopArea = styled.div`
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
    font-size: 2em;

    @media (max-width: 768px) {
      font-size: 1.5em;
      max-width: 70%;
    }

    @media (max-width: 480px) {
      font-size: 1.2em;
      max-width: 90%;
    }
  }

  @media (max-width: 768px) {
    height: 410px;
  }
`;

export const Workshop = styled.div`
  margin: 5% 0;
  text-align: center;

  h1 {
    font-size: 3em;
    width: 100%;
    color: black;

    @media (max-width: 768px) {
      font-size: 2.5em;
    }

    @media (max-width: 480px) {
      font-size: 2em;
    }
  }

  p {
    font-size: 1.5em;

    @media (max-width: 768px) {
      font-size: 1.2em;
    }

    @media (max-width: 480px) {
      font-size: 1em;
    }
  }
`;

export const GridArea = styled.div`
  margin-top: 5%;

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr;
    margin-bottom: 30%;

    img {
      margin: 0 8%;
    }
  }
`;
