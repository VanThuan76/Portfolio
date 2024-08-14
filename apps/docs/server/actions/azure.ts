"use server";

import { AzureKeyCredential, OpenAIClient } from "@azure/openai";

async function transcript(prevState: any, formData: FormData) {
  console.log("Previous state:", prevState);
  const id = Math.random().toString(36);
  if (
    process.env.NEXT_PUBLIC_AZURE_URL === undefined ||
    process.env.AZURE_API_KEY === undefined ||
    process.env.AZURE_DEVELOPMENT_NAME === undefined ||
    process.env.AZURE_DEVELOPMENT_COMPLETIONS_NAME === undefined
  ) {
    console.error("Azure credentials not set");
    return {
      sender: "",
      response: "Azure credentials not set",
    };
  } else {
    const file = formData.get("audio") as File;
    if (file.size === 0) {
      return {
        sender: "",
        response: "No audio file provided",
      };
    }
    console.log(">>", file);
    const arrayBuffer = await file.arrayBuffer();
    const audio = new Uint8Array(arrayBuffer);
    console.log("--------");
    const client = new OpenAIClient(
      process.env.NEXT_PUBLIC_AZURE_URL,
      new AzureKeyCredential(process.env.AZURE_API_KEY),
    );
    const result = await client.getAudioTranscription(
      process.env.AZURE_DEVELOPMENT_NAME,
      audio,
    );
    console.log("Transcription", result);
    const messages = [
      {
        role: "system",
        content:
          "You are a helpful assistant. You will answer your questions and rely I cannot answer that if you don't know the answer",
      },
      {
        role: "user",
        content: result.text,
      },
    ];
    const completions = await client.getChatCompletions(
      process.env.AZURE_DEVELOPMENT_COMPLETIONS_NAME,
      messages,
      { maxTokens: 128 },
    );
    const response = completions.choices[0]?.message?.content;
    return {
      sender: result.text,
      response: response,
      id: id,
    };
  }
}
export default transcript;

export async function prompt(query: any) {
  const id = Math.random().toString(36);
  if (
    process.env.NEXT_PUBLIC_AZURE_URL === undefined ||
    process.env.AZURE_API_KEY === undefined ||
    process.env.AZURE_DEVELOPMENT_NAME === undefined ||
    process.env.AZURE_DEVELOPMENT_COMPLETIONS_NAME === undefined
  ) {
    console.error("Azure credentials not set");
    return {
      sender: "",
      response: "Azure credentials not set",
    };
  } else {
    const client = new OpenAIClient(
      process.env.NEXT_PUBLIC_AZURE_URL,
      new AzureKeyCredential(process.env.AZURE_API_KEY),
    );
    const messages = [
      {
        role: "system",
        content: "Welcome to the chatbot AI",
      },
      {
        role: "user",
        content: query,
      },
    ];
    const completions = await client.getChatCompletions(
      process.env.AZURE_DEVELOPMENT_COMPLETIONS_NAME,
      messages,
      { maxTokens: 128 },
    );
    const response = completions.choices[0]?.message?.content;
    return {
      sender: "ai-chatbot",
      response: response,
      id: id,
    };
  }
}
