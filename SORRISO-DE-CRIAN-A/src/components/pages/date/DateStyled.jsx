import styled from "styled-components";

export const DateArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  h1 {
    margin-top: 2%;
    font-size: 40px;
    background-color: #4080ed;
    width: 59%;
    color: white;
    padding: 1% 0;
    border-radius: 25px 25px 0 0;
    box-sizing: border-box;

    @media screen and (max-width: 768px) {
      font-size: 32px;
      width: 90%;
    }
  }
`;

export const Calendar = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);

  p {
    height: 120px;
    width: 160px;
    font-size: 24px;
    border: black solid 1px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;

    @media screen and (max-width: 768px) {
      height: 100px;
      width: 129px;
      font-size: 20px;
    }
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
