import { FormData } from '../components/contact-form';

export async function sendEmail(data: FormData) {
  const apiEndpoint = '/api/email';

  try {
    const response = await fetch(apiEndpoint, {
      method: 'POST',
      body: JSON.stringify(data),
    });

    const result = await response.json();
    if (result.message) {
      return 'Email sent';
    } else {
      throw new Error('Email not sent');
    }
  } catch (error) {
    console.error('Error sending email:', error);
    return 'Email not sent';
  }
}
