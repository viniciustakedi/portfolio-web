
export type SendMailValues = {
  name: string,
  email: string,
  message: string,
};

export const sendMail = async (data: SendMailValues) => {
  let response: { message: string, statusCode: number } = { message: 'Erro ao enviar mensagem', statusCode: 404 };

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
