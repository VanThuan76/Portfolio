import { Controller, Get } from '@nestjs/common';
import { createBaseResponse } from '@/common/base.response';

import { TagsService } from './tags.service';

@Controller('tags')
export class TagsController {
  constructor(private readonly tagsService: TagsService) {}

  @Get()
  async getTags() {
    try {
      const tags = await this.tagsService.getTags();
      return createBaseResponse(200, tags, 'Successfully fetched tags');
    } catch (error) {
      return createBaseResponse(500, null, error.message);
    }
  }
}
