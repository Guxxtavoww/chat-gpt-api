import express, { Request } from 'express';

import { getChatCompletion } from './utils/chat-gpt';

const app = express();

type MainRouteReq = Request<
  {},
  any,
  any,
  { content: string },
  Record<string, any>
>;

app.get('/', async (req: MainRouteReq, res) => {
  const { content } = req.query;

  try {
    const response = await getChatCompletion(content);

    return res.status(200).json({ response });
  } catch (err) {
    return res.status(500).json(err);
  }
});

app.get('/:text', async (req, res) => {
  const { text } = req.params;

  const response = await getChatCompletion(text);

  res.status(200).json({ apiResponse: response });
});

app.listen(3000, () => console.log('Rodando'));
