interface LoginInterface {
  status: boolean;
  message: string;
  token: string;
  result: {
    id: number;
    email: string;
    type: string;
    nome: string;
  };
}

