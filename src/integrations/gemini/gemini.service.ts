import { Injectable } from '@nestjs/common';

import { GoogleGenerativeAI } from '@google/generative-ai';
import {
  GoogleAIFileManager,
  UploadFileResponse,
} from '@google/generative-ai/server';

// Access your API key as an environment variable (see "Set up your API key" above)
// const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

// export const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

// export const fileManager = new GoogleAIFileManager(process.env.GEMINI_API_KEY!);

@Injectable()
export class GeminiService {
  genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
  model = this.genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
  fileManager = new GoogleAIFileManager(process.env.GEMINI_API_KEY!);

  async uploadFile({
    mimeType,
    filePath,
    displayName,
  }: {
    mimeType: string;
    filePath: string;
    displayName: string;
  }) {
    const uploadResponse = await this.fileManager.uploadFile(filePath, {
      mimeType: mimeType,
      displayName: displayName,
    });

    return uploadResponse;
  }

  async generateContent({
    upload,
    text,
  }: {
    text: string;
    upload: UploadFileResponse;
  }) {
    const result = await this.model.generateContent([
      {
        fileData: {
          mimeType: upload.file.mimeType,
          fileUri: upload.file.uri,
        },
      },
      { text },
    ]);

    return result;
  }
}
