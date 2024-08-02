import { FormData } from '@/app/ui/contact';

export function sendEmail(data: FormData) {
  const apiEndpoint = '/api/email';
  
  return fetch(apiEndpoint, {
    method: 'POST',
    body: JSON.stringify(data),
  })
  .then((res) => res.json())
  .catch((err) => {
    console.error(err);
  });
}