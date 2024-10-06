import { Module } from '@nestjs/common';
import { SupabaseModule } from '@/supabase/supabase.module';

import { InformationWorkController } from './information-work.controller';
import { InformationWorkService } from './information-work.service';

@Module({
  imports: [SupabaseModule],
  controllers: [InformationWorkController],
  providers: [InformationWorkService],
})
export class InformationWorkModule {}
