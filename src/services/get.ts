import { enviroment } from "@/configs/constants";

export const findQuizById = async (id: string) => {
  let response: { data: any, message: string, status: number } = { data: null, message: 'Erro ao buscar quiz', status: 404 };

  await fetch(enviroment.API_URL + '/quizzes/' + id, {
    method: 'GET',
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

export const getQuestionById = async (id: string) => {
  let response: { data: any, message: string, status: number } = { data: null, message: 'Erro ao buscar questão', status: 404 };

  await fetch(enviroment.API_URL + '/questions/' + id, {
    method: 'GET',
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