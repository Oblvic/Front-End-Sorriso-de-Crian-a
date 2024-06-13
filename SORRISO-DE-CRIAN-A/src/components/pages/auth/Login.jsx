import { signinSchema } from "../../schemas/signinSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginArea } from "./AuthStyle";
import { useForm } from "react-hook-form";
import { Button } from "../../navbar/NavBarStyle";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signinSchema), // Usando o resolvedor Zod para validar o formulário
  });

  const onLogin = async (data) => {
    try {
      // Lógica de login
    } catch (error) {
      console.log(error); // Tratamento de erros
    }
  };

  return (
    <LoginArea>
      <h1>LOGIN</h1>
      <form onSubmit={handleSubmit(onLogin)}>
        <h3>EMAIL</h3>
        <input
          {...register("email")} // Registrando o campo de e-mail com o React Hook Form
          type="email"
          placeholder="E-mail"
          name="email"
        />
        <h3>SENHA</h3>
        <input
          {...register("password")} // Registrando o campo de senha com o React Hook Form
          type="password"
          placeholder="Senha"
          name="password"
        />
        {errors.email && <span>{errors.email.message}</span>}{" "}
        {/* Exibindo mensagem de erro para o campo de e-mail */}
        {errors.password && <span>{errors.password.message}</span>}{" "}
        {/* Exibindo mensagem de erro para o campo de senha */}
        <Button type="submit">Entrar</Button> {/* Botão de login */}
      </form>
    </LoginArea>
  );
};

export default Login;
