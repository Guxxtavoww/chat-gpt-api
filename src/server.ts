import express, { Request } from 'express';

import { getChatCompletion } from './utils/chat-gpt';

const app = express();

app.get(
  '/',
  async (
    req: Request<{}, any, any, { content: string }, Record<string, any>>,
    res
  ) => {
    const { content } = req.query;

    const response = await getChatCompletion(content);

    return res.status(200).json({ response });
  }
);

app.get('/:text', async (req, res) => {
  const { text } = req.params;

  const response = await getChatCompletion(text);

  res.status(200).json({ apiResponse: response });
});

app.listen(3000, () => console.log('Rodando'));
