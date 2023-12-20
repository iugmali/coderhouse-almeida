export type TLoginFormState = {
  message: string | null;
};

export type TLoginAction = (prevState: TLoginFormState,formData: FormData) => Promise<TLoginFormState>

export type TSignUpFormState = {
  errors?: {
    name?: string[];
    email?: string[];
    phone?: string[];
    cep?: string[];
    number?: string[];
    password?: string[];
  };
  message?: string | null;
};
