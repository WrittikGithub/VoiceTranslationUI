# Voice Translation API Integration Guide

This file shows examples of how to integrate with real voice translation APIs.

## Option 1: Google Cloud Speech-to-Text + Translate API

```typescript
import { SpeechClient } from '@google-cloud/speech';
import { Translate } from '@google-cloud/translate/build/src/v2';

const speechClient = new SpeechClient();
const translate = new Translate();

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const audioFile = formData.get('audio') as File;
  const audioBuffer = Buffer.from(await audioFile.arrayBuffer());

  // Step 1: Speech-to-Text
  const [response] = await speechClient.recognize({
    config: {
      encoding: 'WEBM_OPUS',
      sampleRateHertz: 48000,
      languageCode: 'en-US',
    },
    audio: {
      content: audioBuffer,
    },
  });

  const transcription = response.results[0].alternatives[0].transcript;

  // Step 2: Translate
  const [translation] = await translate.translate(transcription, 'es');
  
  return NextResponse.json({
    translatedText: translation,
    originalText: transcription,
  });
}
```

## Option 2: Azure Cognitive Services

```typescript
import { SpeechConfig, SpeechRecognizer } from 'microsoft-cognitiveservices-speech-sdk';
import axios from 'axios';

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const audioFile = formData.get('audio') as File;

  // Step 1: Speech-to-Text using Azure
  const speechConfig = SpeechConfig.fromSubscription(
    process.env.AZURE_SPEECH_KEY!,
    process.env.AZURE_SPEECH_REGION!
  );

  // Step 2: Translate using Azure Translator
  const audioBuffer = await audioFile.arrayBuffer();
  const translateResponse = await axios.post(
    'https://api.cognitive.microsofttranslator.com/translate',
    [{ text: transcribedText }],
    {
      params: {
        'api-version': '3.0',
        from: 'en',
        to: 'es',
      },
      headers: {
        'Ocp-Apim-Subscription-Key': process.env.AZURE_TRANSLATOR_KEY!,
        'Ocp-Apim-Subscription-Region': process.env.AZURE_TRANSLATOR_REGION!,
      },
    }
  );

  return NextResponse.json({
    translatedText: translateResponse.data[0].translations[0].text,
  });
}
```

## Option 3: OpenAI Whisper API + Translation

```typescript
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const audioFile = formData.get('audio') as File;

  // Step 1: Transcribe with Whisper
  const transcription = await openai.audio.transcriptions.create({
    file: audioFile,
    model: 'whisper-1',
  });

  // Step 2: Translate with GPT
  const translation = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: [
      {
        role: 'system',
        content: 'You are a professional translator. Translate the following text to Spanish.',
      },
      {
        role: 'user',
        content: transcription.text,
      },
    ],
  });

  return NextResponse.json({
    translatedText: translation.choices[0].message.content,
    originalText: transcription.text,
  });
}
```

## Environment Variables Needed

Add these to your `.env.local` file:

```env
# Google Cloud
GOOGLE_APPLICATION_CREDENTIALS=path/to/service-account-key.json
GOOGLE_CLOUD_PROJECT_ID=your-project-id

# Azure
AZURE_SPEECH_KEY=your-speech-key
AZURE_SPEECH_REGION=your-region
AZURE_TRANSLATOR_KEY=your-translator-key
AZURE_TRANSLATOR_REGION=your-region

# OpenAI
OPENAI_API_KEY=your-openai-key
```
