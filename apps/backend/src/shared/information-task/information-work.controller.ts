import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';
import { createBaseResponse } from '@/common/base.response';

import { InformationWorkService } from './information-work.service';

@Controller('information-work')
export class InformationWorkController {
  constructor(
    private readonly informationWorkService: InformationWorkService,
  ) {}

  @Get()
  async getInformationTasks() {
    try {
      const data = await this.informationWorkService.getInformationTasks();
      return createBaseResponse(
        200,
        data,
        'Successfully fetched information tasks',
      );
    } catch (error) {
      return createBaseResponse(500, null, error.message);
    }
  }
}
