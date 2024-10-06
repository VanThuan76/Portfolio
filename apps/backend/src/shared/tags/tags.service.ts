import { Injectable } from '@nestjs/common';
import { SupabaseService } from '@/supabase/supabase.service';

@Injectable()
export class TagsService extends SupabaseService {
  async getTags() {
    const { data, error } = await this.getSupabaseClient()
      .from('tag')
      .select('*')
      .order('created_at', { ascending: true });

    if (error) {
      throw new Error('Failed to fetch tags');
    }
    return data;
  }
}
