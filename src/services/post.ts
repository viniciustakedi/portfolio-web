export type SendMailValues = {
  name: string,
  email: string,
  message: string,
};

export type LoginValues = {
  code: string,
  password: string,
};

// const BASE_URL = 'https://api.takedi.dev';
const BASE_URL = 'http://localhost:8000';

export const sendMail = async (data: SendMailValues) => {
  let response: { message: string, status: number } = { message: 'Erro ao enviar mensagem', status: 404 };

  await fetch('/api/send-mail', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => {
      response = data;
    })
    .catch((error) => {
      response = error;
    });

  return response;
}

export const login = async (data: LoginValues) => {
  let response: { data: any, message: string, status: number } = { data: null, message: 'Erro ao fazer login', status: 404 };


  await fetch(BASE_URL + '/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => {
      response = data;
    })
    .catch((error) => {
      response = error;
    });

  return response;
}
