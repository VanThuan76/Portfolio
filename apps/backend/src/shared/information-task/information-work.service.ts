import { Injectable } from '@nestjs/common';
import { SupabaseService } from '@/supabase/supabase.service';

@Injectable()
export class InformationWorkService extends SupabaseService {
  async getInformationTasks() {
    const { data, error } = await this.getSupabaseClient()
      .from('infomation_work')
      .select('*');

    if (error) {
      throw new Error('Failed to fetch information tasks');
    }
    return data;
  }
}
