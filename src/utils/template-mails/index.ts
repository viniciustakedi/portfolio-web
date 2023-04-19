export const contactHtml = (name: string, email: string, message: string) => {
  return (`
    <!DOCTYPE html>
    <html>
    
    <head>
      <title>Contato Portfólio</title>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    
    <body
      style="font-family: Arial, sans-serif; font-size: 16px; padding: 22px; color: #FFF; background-color: transparent;">
      <div
        style="max-width: 600px; border-radius: 15px; margin: auto; padding: 30px; background-color: #1D2D44 !important; border: 1px solid #3E5C76;">
        <div style="margin-bottom: 20px; width: 100%;">
          <p style="color: #FFF; margin: 0;">Olá, <strong>Takedi apelão!</strong></p>
          <p style="color: #FFF; margin: 0;">Você recebeu uma mensagem do(a) <strong>${name}</strong> pelo portfólio.</p>
        </div>
        <div style="width: 100%;">
          <p style="color: #FFF; margin: 0;">O email da pessoa interessada é <strong style="text-decoration: none; color: #FFF;">${email}</strong></p>
          <p style="color: #FFF; margin: 0; margin-top: 5px;">Segue a mensagem enviada pelo portfólio:</p>
          <p style="font-style: italic;">"${message}"</p>
        </div>
        <div style="width: 100%; margin-top: 30px;">
          <p style="font-size: 12px; color: #adadad; margin: 0;">
            Caso queria responder com o e-mail profissional, lembrar de responder
            pelo Zoho Mail para que o recrutador, colega ou outros recebam a partir de <strong style="text-decoration: none; color: #FFF;">contato@takedi.dev.</strong>
          </p>
        </div>
      </div>
    </body>
    
    </html>
  `);
}