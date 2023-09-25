// pages/api/whatsapp/sendMessage.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const response = await axios.post(
        'https://graph.facebook.com/v17.0/102992352518213/messages',
        {
          messaging_product: 'whatsapp',
          to: '252634008081',
          type: 'template',
          template: {
            name: 'hello_world',
            language: {
              code: 'en_US',
            },
          },
        },
        {
          headers: {
            Authorization: process.env.fb_accesstoken,
            'Content-Type': 'application/json',
          },
        }
      );

      res.status(200).json(response.data);
    } catch (error) {
      res.status( 500).json( {});
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
