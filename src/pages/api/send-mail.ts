import type { NextApiRequest, NextApiResponse } from 'next'
import sgMail from '@sendgrid/mail'
import { contactHtml } from '@/utils/template-mails';

export default function sendMail(req: NextApiRequest, res: NextApiResponse) {
  const { name, email, message } = req.body;

  sgMail.setApiKey('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');

  const msg = {
    to: 'viniciustakedi7@gmail.com', // Change to your recipient
    from: {
      email: 'contato@takedi.dev',
      name: 'Contato do Portfólio',
    },
    subject: `Contato do ${name} - Portfólio`,
    text: `Abra o e-mail para verificar todo conteúdo.`,
    html: contactHtml(name, email, message),
  }

  sgMail
    .send(msg)
    .then(() => {
      res.status(200).json({ message: 'Email sent', statusCode: 200 });
    })
    .catch((error) => {
      res.status(400).json({ message: error, statusCode: 400 });
    });
}