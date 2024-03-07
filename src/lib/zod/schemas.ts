import {z} from "zod";

export const LoginFormSchema = z.object({ email: z.string().email(), password: z.string().min(6) });

export const SignUpFormSchema = z.object({
  name: z.string({
    required_error: 'Insira seu nome',
    invalid_type_error: 'Insira seu nome'
  }),
  email: z.string().email('Insira um e-mail válido.'),
  phone: z.string({
    required_error: 'Insira seu número de telefone',
    invalid_type_error: 'Insira seu número de telefone'
  }),
  cep: z.string({
    required_error: 'Insira seu CEP',
    invalid_type_error: 'Insira seu CEP'
  }),
  number: z.coerce
    .number({
      invalid_type_error: 'Entre um número válido'
    })
    .gt(0, {message: 'Entre um número válido.'}),
  password: z.string().min(6, {message: 'A senha precisa ter no mínimo seis caracteres'}),
});
