import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { CVResumeService } from './cvResume.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller()
export class CVResumeController {
  constructor(private readonly cvResumeService: CVResumeService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    console.log(file);
    const filePath = file.path;
    return await this.cvResumeService.uploadFile({ filePath });
  }
}
