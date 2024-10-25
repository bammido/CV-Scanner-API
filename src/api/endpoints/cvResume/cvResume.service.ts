import { Injectable } from '@nestjs/common';
import { cvScannerPrompt } from 'src/constants/geminiPrompt';
import { GeminiService } from 'src/integrations/gemini/gemini.service';

@Injectable()
export class CVResumeService {
  constructor(private readonly geminiService: GeminiService) {}
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
