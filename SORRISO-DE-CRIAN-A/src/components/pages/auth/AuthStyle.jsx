import styled from "styled-components";

export const LoginArea = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px;

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 500px;
  }

  h1 {
    font-size: 40px;
    margin: 6% 0 2% 0;
    text-align: center;
  }

  input {
    padding: 0 3%;
    font-size: 20px;
    border-radius: 25px;
    width: 100%;
    max-width: 500px;
    height: 50px;
    margin: 2% 0;
    background-color: #e0d8d8;
    border: none;
    outline: none;
    box-sizing: border-box;
  }

  input::after {
    background-color: #e0d8d8;
  }

  input:focus {
    border: 3px solid #4080ed;
  }

  span {
    margin: 1%;
    color: red;
    font-size: 15px;
    text-align: center;
  }

  @media (max-width: 768px) {
    margin-bottom: 20%;
    margin-top: 10%;

    h1 {
      font-size: 32px;
    }

    input {
      font-size: 18px;
      height: 45px;
    }

    span {
      font-size: 14px;
    }

    form {
      margin-top: 10%;
      width: 60%;
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 28px;
    }

    input {
      font-size: 16px;
      height: 40px;
    }

    span {
      font-size: 12px;
    }
  }
`;
