import { Module } from '@nestjs/common';
import { SupabaseModule } from '@/supabase/supabase.module';

import { ProjectService } from './project.service';
import { ProjectController } from './project.controller';

@Module({
  imports: [SupabaseModule],
  providers: [ProjectService],
  controllers: [ProjectController],
})
export class ProjectModule {}
