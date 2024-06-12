import { Link } from "react-router-dom";
import {
  AuthenticationButtonArea,
  Button,
  Categories,
  LoginButton,
  LogoLink,
  Nav,
} from "./NavBarStyle";
import logo from "../../assets/logo.jpg";

const NavBar = () => {
  return (
    <Nav>
      <Categories>
        <Link to="/workshop">WORKSHOP</Link>
        <a href="#contato">CONTATO</a>
        <Link to="/datas">DATAS</Link>
        <Link to="/doacoes">DOAÇÕES</Link>
        <Link to="/usuariopage">USUÁRIO</Link>
      </Categories>
      <LogoLink to="/">
        <img src={logo} alt="logo" />
      </LogoLink>
      <AuthenticationButtonArea>
        <Link to="/login">
          <LoginButton>LOGIN</LoginButton>
        </Link>
        <Link to="/cadastro">
          <Button>CADASTRO</Button>
        </Link>
      </AuthenticationButtonArea>
    </Nav>
  );
};

export default NavBar;
