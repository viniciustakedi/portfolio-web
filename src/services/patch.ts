import { enviroment } from './../configs/constants';

export const updateVisitsOnWebsite = async () => {
  let response: { message: string, status: number } = { message: 'Erro ao atualizar visitas', status: 404 };

  await fetch(`${enviroment.API_URL}/global/visits-on-website`, {
    method: 'PATCH',
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

export const replyQuizQuestion = async (quizId: string, questionId: string, questionAnswer: string) => {
  let response: { data: any, message: string, statusCode: number } = { data: null, message: 'Erro ao responder questão', statusCode: 404 };

  const body = {
    questionId,
    questionAnswer
  }

  await fetch((enviroment.API_URL + '/quizzes/' + quizId + '/reply-question'), {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body)
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