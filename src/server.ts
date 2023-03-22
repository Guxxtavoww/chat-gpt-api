import { config } from 'dotenv';
import readline from 'readline';
import { Configuration, OpenAIApi } from 'openai';

config();

const openAi = new OpenAIApi(
  new Configuration({
    apiKey: process.env.OPEN_AI_API_KEY,
  })
);

const userInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

userInterface.prompt();

userInterface.on('line', async (input) => {
  const response = await openAi.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'user', content: input }],
  });

  console.log({ apiResponse: response.data.choices[0].message?.content });

  userInterface.prompt();
});
