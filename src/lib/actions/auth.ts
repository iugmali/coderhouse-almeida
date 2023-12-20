"use server"

import {signIn, signOut} from "@/lib/auth";
import {AuthError} from "next-auth";
import {revalidatePath} from "next/cache";
import {redirect} from "next/navigation";
import {TLoginFormState, TSignUpFormState} from "@/types/auth";
import bcrypt from "bcrypt";
import {createUser, fetchUser} from "@/lib/firebase/data/users";
import {SignUpFormSchema} from "@/lib/zod/schemas";

export const logout = async () => {
  await signOut();
  revalidatePath('/')
  redirect('/')
}

export const login = async (
  prevState: TLoginFormState,
  formData: FormData,
) => {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return {
            message: 'Usuário ou senha incorretos.'
          };
        default:
          return {
            message: 'Ops... Deu ruim...'
          };
      }
    }
  }
  redirect('/profile');
}

export const signUp = async (prevState: TSignUpFormState, formData: FormData) => {
  if (formData.get('password') !== formData.get('confirmPassword')) return {message: 'Senhas não coincidem.'}
  const validatedFields = SignUpFormSchema.safeParse(Object.fromEntries(formData.entries()));
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Se certifique de que preencheu todos os campos corretamente.',
    };
  }
  const existingUser = await fetchUser(formData.get('email') as string);
  if (existingUser) return {message: 'Já existe um usuário com este e-mail.'}
  const {name, email, phone,cep,number, password} = validatedFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);
  const complement: string = (formData.get('complement') as string) || '';
  const user = {
    name,
    email,
    phone,
    password: hashedPassword,
    address: {
      cep,
      number,
      complement
    }
  }
  try {
    await createUser(user);
    await new Promise((resolve, reject) => setTimeout(() => resolve(true), 2000))
    const newFormData = new FormData();
    newFormData.append("email", email);
    newFormData.append("password", password);
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return {
            message: 'Usuário ou senha incorretos.'
          };
        default:
          return {
            message: 'Ops... Deu ruim...'
          };
      }
    }
  }
  redirect('/cart/checkout');

}
