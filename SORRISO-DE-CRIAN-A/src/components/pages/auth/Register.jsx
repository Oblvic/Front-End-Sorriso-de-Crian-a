import { zodResolver } from "@hookform/resolvers/zod";
import { LoginArea } from "./AuthStyle";
import { useForm } from "react-hook-form";
import { Button } from "../../navbar/NavBarStyle";
import { signupSchema } from "../../schemas/signupSchema";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signupSchema),
  });

  const onRegister = async (data) => {
    try {
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <LoginArea>
      <h1>LOGIN</h1>
      <form onSubmit={handleSubmit(onRegister)}>
        <h3>NOME</h3>
        <input
          {...register("name")}
          type="text"
          placeholder="Nome"
          name="name"
        />
        <h3>TELEFONE</h3>
        <input
          type="tel"
          placeholder="75 123456789"
          required
        />
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
        {errors.name && <span>{errors.name.message}</span>}
        {errors.email && <span>{errors.email.message}</span>}
        {errors.password && <span>{errors.password.message}</span>}
        <Button type="submit">FINALIZAR</Button>
      </form>
    </LoginArea>
  );
};

export default Register;
