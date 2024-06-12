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
    resolver: zodResolver(signinSchema),
  });

  const onLogin = async (data) => {
    try {
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <LoginArea>
      <h1>LOGIN</h1>
      <form onSubmit={handleSubmit(onLogin)}>
        <h3>EMAIL</h3>
        <input
          {...register("email")}
          type="email"
          placeholder="E-mail"
          name="email"
        />
        <h3>SENHA</h3>
        <input
          {...register("password")}
          type="password"
          placeholder="Senha"
          name="password"
        />
        {errors.email && <span>{errors.email.message}</span>}
        {errors.password && <span>{errors.password.message}</span>}
        <Button type="submit">Entrar</Button>
      </form>
    </LoginArea>
  );
};

export default Login;
