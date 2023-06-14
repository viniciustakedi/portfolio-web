import { enviroment } from './../configs/constants';

export const updateVisitsOnWebsite = async () => {
  let response: { message: string, status: number } = { message: 'Erro ao atualizar visitas', status: 404 };

  await fetch(enviroment.API_URL + '/visits-on-website', {
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