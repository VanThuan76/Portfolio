import { Controller, Get } from '@nestjs/common';
import { createBaseResponse } from '@/common/base.response';

import { ProjectService } from './project.service';

@Controller('projects')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Get()
  async getProjects() {
    try {
      const projects = await this.projectService.getProjects();
      return createBaseResponse(200, projects, 'Successfully fetched projects');
    } catch (error) {
      return createBaseResponse(500, null, error.message);
    }
  }
}
