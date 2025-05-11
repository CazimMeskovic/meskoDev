
import { Resend } from 'resend';

export async function POST(req) {
  const body = await req.json();
  const { name, email, message, company, website } = body;


  // Nastavi sa slanjem e-maila
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev', // zamijeni sa vlastitom ako budeš verifikovao domen
      to: ['cazemeskovic@gmail.com'], // Promijeni sa stvarnim emailom
      subject: `New contact form submission from ${name}`,
      reply_to: email,
      text: `
Name: ${name}
Email: ${email}
Company: ${company || 'N/A'}
Message:
${message}
      `,
    });

    return new Response('Message sent successfully', { status: 200 });
  } catch (error) {
    console.error('Resend Error:', error);
    return new Response('Failed to send email', { status: 500 });
  }
}