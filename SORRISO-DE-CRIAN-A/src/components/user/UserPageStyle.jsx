import styled from "styled-components";

export const UserPainel = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 3%;

  h1 {
    text-align: center;
    color: white;
    background-color: #4080ed;
    width: 70%;
    border-radius: 25px 25px 0 0;
    padding: 1% 0;
  }
`;

export const UserInformations = styled.div`
  width: 70%;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const Account = styled.div`
  margin: 5%;
  background-color: #dbd4d4;
  border-radius: 15px 15px 15px 15px;

  h2 {
    text-align: center;
    color: white;
    background-color: #bdb9b9;
    padding: 3% 5%;
    border-radius: 15px 15px 15px 15px;
  }

  h3 {
    margin: 3%;
  }

  p {
    background-color: #bdb9b9;
    width: 70%;
    height: 25px;
    border-radius: 25px;
    margin: 0 2%;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;

  button {
    margin: 5% 10%;
    width: 80%;
  }
`;

export const InfoSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;

  button {
    color: white;
    background-color: #4080ed;
    border: none;
    border-radius: 50%;
    font-size: 20px;
    padding: 1%;
    cursor: pointer;
    margin: 0 5%;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 10px 38px,
      rgba(0, 0, 0, 0.22) 0px 8px 12px;
  }
`;

export const ButtonArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  margin-top: 5%;
`;
