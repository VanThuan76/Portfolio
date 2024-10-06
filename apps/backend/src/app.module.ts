import { Module } from '@nestjs/common';

import { EnvModule } from '@/config/env.module';
import { SupabaseModule } from '@/supabase/supabase.module';

import { TagsModule } from '@/shared/tags/tags.module';
import { ProjectModule } from '@/shared/project/project.module';
import { InformationWorkModule } from '@/shared/information-task/information-work.module';
import { BlogModule } from '@/shared/blog/blog.module';

@Module({
  imports: [
    EnvModule,
    SupabaseModule,
    TagsModule,
    ProjectModule,
    BlogModule,
    InformationWorkModule,
  ],
})
export class AppModule {}