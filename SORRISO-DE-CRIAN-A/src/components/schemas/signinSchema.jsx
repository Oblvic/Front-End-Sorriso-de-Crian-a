import { z } from "zod"; // Importando Zod para validação de esquema

// Definindo esquema de validação para o formulário de login
export const signinSchema = z.object({
  email: z.string().email({ message: "E-mail inválido" }).toLowerCase(), // Campo de e-mail com validação de e-mail
  password: z // Campo de senha
    .string()
    .min(6, { message: "Senha deve ter no mínimo 6 caracteres" }), // Verificando o comprimento mínimo da senha
});
