import { Configuration, OpenAIApi } from 'openai';
import { config } from 'dotenv';

config();

export async function getChatCompletion(
  content: string
): Promise<string | undefined> {
  const openAi = new OpenAIApi(
    new Configuration({
      apiKey: process.env.OPEN_AI_API_KEY,
    })
  );

  const chatResponse = await openAi
    .createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content }],
    })
    .catch((err) => {
      throw err;
    });

  return chatResponse.data.choices[0].message?.content;
}
