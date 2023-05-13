import { config } from "dotenv";
config();

import { Configuration, OpenAIApi } from "openai";

const openai = new OpenAIApi(
  new Configuration({
    apiKey: process.env.API_KEY,
  })
);
console.log(process.env.APY_KEY);

openai
  .createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: "Hello chat GPT" }],
  })
  .then((res) => {
    console.log(res);
  });
