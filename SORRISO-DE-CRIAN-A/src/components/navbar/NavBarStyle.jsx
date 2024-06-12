import { Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  background-color: white;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.116) 0px 3px 8px,
    rgba(0, 0, 0, 0.075) 0px 2px 12px;
  padding: 0 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding: 10px;
  }
`;

export const Categories = styled.section`
  margin: 2%;
  display: flex;

  a {
    color: black;
    text-decoration: none;
    font-size: 16px;
    margin: 0 2%;

    @media (max-width: 768px) {
      font-size: 14px;
      margin: 5px 0;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const AuthenticationButtonArea = styled.div`
  width: 15%;
  display: flex;
  justify-content: space-around;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 10px;
  }
`;

export const Button = styled.button`
  font-size: 20px;
  background: #4080ed;
  border: none;
  padding: 10px;
  border-radius: 15px;
  color: white;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 8px;
  }
`;

export const LoginButton = styled(Button)`
  background-color: white;
  color: black;
`;

export const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  img {
    width: 41%;

    @media (max-width: 768px) {
      width: 60%;
    }
  }
`;
