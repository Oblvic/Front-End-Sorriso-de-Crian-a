import { z } from "zod"; // Importando Zod para validação de esquema

// Definindo esquema de validação para o formulário de cadastro
export const signupSchema = z.object({
  name: z // Campo de nome
    .string()
    .min(3, { message: "O nome deve ter no mínimo 3 caracteres" }) // Verificando o comprimento mínimo do nome
    .transform(
      (
        name, // Transformando o nome para capitalizar as palavras
      ) =>
        name
          .trim() // Removendo espaços em branco no início e no final
          .split(" ") // Dividindo o nome em palavras
          .map((word) => word[0].toUpperCase() + word.slice(1)) // Capitalizando a primeira letra de cada palavra
          .join(" "), // Juntando as palavras novamente em uma string
    ),
  email: z.string().email({ message: "E-mail inválido" }).toLowerCase(), // Campo de e-mail com validação de e-mail
  password: z // Campo de senha
    .string()
    .min(6, { message: "A senha precisa ter no mínimo 6 caracteres" }), // Verificando o comprimento mínimo da senha
});
