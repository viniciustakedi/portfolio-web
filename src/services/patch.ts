const BASE_URL = 'http://localhost:8000';

export const updateVisitsOnWebsite = async () => {
  let response: { message: string, statusCode: number } = { message: 'Erro ao atualizar visitas', statusCode: 404 };

  await fetch(BASE_URL + '/visits-on-website', {
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