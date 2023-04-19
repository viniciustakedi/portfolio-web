import type { NextApiRequest, NextApiResponse } from 'next'
import sgMail from '@sendgrid/mail'

export default function sendMail(req: NextApiRequest, res: NextApiResponse) {
  const { text } = req.body;

  // sgMail.setApiKey(process.env.SENDGRID_API_KEY)

  // const msg = {
  //   to: 'test@example.com', // Change to your recipient
  //   from: 'test@example.com', // Change to your verified sender
  //   subject: 'Sending with SendGrid is Fun',
  //   text: 'and easy to do anywhere, even with Node.js',
  //   html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  // }

  // sgMail
  //   .send(msg)
  //   .then(() => {
  //     console.log('')
  //     res.status(200).json({ message: 'Email sent' });
  //   })
  //   .catch((error) => {
  //     console.error(error)
  //     res.status(400).json({ message: error });
  //   });
  res.status(200).json({ message: "Olá!" });
}