export type TUserAddress = {
  cep: string;
  number: number;
  complement?: string;
}

export type TCepData = {
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
}

export type TUser = {
  id: string;
  email: string;
  password: string;
  name: string;
  phone: string;
  image?: string;
  role: 'user' | 'admin';
  address: TUserAddress;
  createdAt: Date
}
