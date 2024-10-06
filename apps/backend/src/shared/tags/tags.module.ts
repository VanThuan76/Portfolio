import { Module } from '@nestjs/common';
import { SupabaseModule } from '@/supabase/supabase.module';

import { TagsService } from './tags.service';
import { TagsController } from './tags.controller';

@Module({
  imports: [SupabaseModule],
  providers: [TagsService],
  controllers: [TagsController],
  exports: [TagsService],
})
export class TagsModule {}
