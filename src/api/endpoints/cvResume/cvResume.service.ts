import { Injectable } from '@nestjs/common';
import { cvScannerPrompt } from 'src/constants/geminiPrompt';
import { FirebaseService } from 'src/integrations/firebase/firebase.service';
import { GeminiService } from 'src/integrations/gemini/gemini.service';

@Injectable()
export class CVResumeService {
  constructor(
    private readonly geminiService: GeminiService,
    private readonly firebaseService: FirebaseService,
  ) {}
  async uploadFile({ filePath }: { filePath: string }) {
    const upload = await this.geminiService.uploadFile({
      displayName: 'teste',
      filePath,
      mimeType: 'application/pdf',
    });

    const response = await this.geminiService.generateContent({
      upload,
      text: cvScannerPrompt,
    });

    const responseText = response.response
      .text()
      .replaceAll('`', '')
      .replaceAll('json', '');

    const responseJSON = JSON.parse(responseText);

    return responseJSON;
  }

  async teste({ idToken }: { idToken: string }) {
    return await this.firebaseService.verifyIdToken({ idToken });
  }

  getHello(): string {
    return 'Hello World!';
  }
}
