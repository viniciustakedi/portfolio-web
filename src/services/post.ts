import { enviroment } from "@/configs/constants";

export type SendMailValues = {
  name: string,
  email: string,
  message: string,
};

export type LoginValues = {
  code: string,
  password: string,
};

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

  await fetch(enviroment.API_URL + '/auth/login', {
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

export const startQuiz = async () => {
  let response: { data: any, message: string, status: number } = { data: null, message: 'Erro ao iniciar quiz', status: 404 };

  await fetch(enviroment.API_URL + '/quizzes/start', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((data) => {
      response = data;
      localStorage.setItem('quizId', data.data._id);
    })
    .catch((error) => {
      response = error;
    });

  return response;
}

export const likePost = async (postId: string) => {
  let response: { data: any, message: string, statusCode: number } = { data: null, message: 'Erro ao curtir post', statusCode: 404 };

  await fetch(enviroment.API_URL + `/blogs/post/${postId}/like`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
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