import { Injectable } from '@nestjs/common';
import { SupabaseService } from '@/supabase/supabase.service';

@Injectable()
export class ProjectService extends SupabaseService {
  async getProjects() {
    const { data, error } = await this.getSupabaseClient()
      .from('project')
      .select('*');

    if (error) {
      throw new Error('Failed to fetch projects');
    }
    return data;
  }
}
