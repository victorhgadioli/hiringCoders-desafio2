export interface IClient {
  name?: string;
  email?: string;
  phoneNumber?: string;
  address?: string;
  complement?: string;
  cep?: string;
}

export interface IProduct {
  name: string;
  barCode: string;
  description: string;
  category: string;
  price: number;
  quantity: number;
}
