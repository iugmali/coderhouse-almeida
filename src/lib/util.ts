import {TCepData} from "@/types/user";

export const formatCurrency = (amount: number) => {
  return `R$ ${(amount/100).toLocaleString('pt-BR', {minimumFractionDigits: 2})}`;
}

export const inputMaskCep = (cep: string): string => {
  return cep
    .replace(/\D/, '')
    .replace(/(\d{5})(\d)/, '$1-$2')
    .replace(/(-\d{3})\d+?$/, '$1')
}

export const inputMaskPhone = (phone: string): string => {
  if (/(\+\d{2})(\d{2})(\d{5})(\d{4})/.test(phone)) {
    return phone.replace(/(\+\d{2})(\d{2})(\d{5})(\d{4})/, '$1 ($2) $3-$4')
  }
  if (/(\+\d{2})(\d{2})(\d{4})(\d{4})/.test(phone)) {
    return phone.replace(/(\+\d{2})(\d{2})(\d{4})(\d{4})/, '$1 ($2) $3-$4')
  }
  return phone
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '($1) $2')
    .replace(/(\d{5})(\d)/, '$1-$2')
    .replace(/(\d{4})(\d)-(\d{3})/, '$1-$2$3')
    .replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3')
    .replace(/(\d{5}-\d{4})\d+?$/, '$1')
}

export const maskAddressNumber = (number: string): string => {
  if (/\D+\d$/.test(number)) {
    return number.replace(/^(\D+)(\d+)$/g, '$2')
  }
  return number
    .replace(/\D/g, '')
}

export const firestoreAutoId = (): string => {
  const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let autoId = ''
  for (let i = 0; i < 20; i++) {
    autoId += CHARS.charAt(
      Math.floor(Math.random() * CHARS.length)
    )
  }
  return autoId
}

export const fetchCep = async (cep: string): Promise<TCepData> => {
  try {
    const cepLookup = cep.replace(/-/, '');
    const response =  await fetch(`https://viacep.com.br/ws/${cepLookup}/json/`);
    const cepData = await response.json();
    return {
      logradouro: cepData.logradouro,
      complemento: cepData.complemento,
      bairro: cepData.bairro,
      localidade: cepData.localidade,
      uf: cepData.uf
    }
  } catch (e) {
    return {
      logradouro: '',
      complemento: '',
      bairro: '',
      localidade: '',
      uf: ''
    }
  }
}

export const delay = async (ms: number)=> {
  await new Promise((res, rej) => setTimeout(() => res(true), 3000));
}
