import {
  Controller,
  Get,
  Post,
  UploadedFile,
  UseInterceptors,
  Param,
} from '@nestjs/common';
import { CVResumeService } from './cvResume.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller()
export class CVResumeController {
  constructor(private readonly cvResumeService: CVResumeService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    const filePath = file.path;
    return await this.cvResumeService.uploadFile({ filePath });
  }

  @Get('/:idToken')
  async teste(@Param('idToken') idToken) {
    return await this.cvResumeService.teste({ idToken });
  }
}
