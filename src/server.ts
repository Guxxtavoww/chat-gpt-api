import express from 'express';

import { getChatCompletion } from './utils/chat-gpt';

const app = express();

app.get('/', async (req, res) => {
  const response = await getChatCompletion(
    'Me dá uma maneira de cumprimento social.'
  );

  return res.status(200).json({ response });
});

app.get('/:text', async (req, res) => {
  const { text } = req.params;

  const response = await getChatCompletion(text);

  res.status(200).json({ apiResponse: response });
});

app.listen(3000, () => console.log('Rodando'));
