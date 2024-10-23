import { Injectable } from '@nestjs/common';
import { GeminiService } from './integrations/gemini/gemini.service';
import { filePath } from '../teste';
import { cvScannerPrompt } from './constants/geminiPrompt';
@Injectable()
export class AppService {
  constructor(private readonly geminiService: GeminiService) {}

  async testeGemini() {
    const upload = await this.geminiService.uploadFile({
      displayName: 'teste',
      filePath,
      mimeType: 'application/pdf',
    });

    console.log(upload);
  }

  async uploadFile({ filePath }: { filePath: string }) {
    const upload = await this.geminiService.uploadFile({
      displayName: 'teste',
      filePath,
      mimeType: 'application/pdf',
    });

    console.log(upload);

    const response = await this.geminiService.generateContent({
      upload,
      text: cvScannerPrompt,
    });

    console.log(response.response.text());

    return response.response.text();
  }

  getHello(): string {
    return 'Hello World!';
  }
}
