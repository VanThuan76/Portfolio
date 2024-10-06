import { Injectable } from '@nestjs/common';
import { SupabaseService } from '@/supabase/supabase.service';

@Injectable()
export class BlogService extends SupabaseService {
  async getPublishedBlogs() {
    const { data: blogs, error } = await this.getSupabaseClient()
      .from('blog')
      .select('*')
      .eq('is_published', true);

    if (error) {
      throw new Error('Failed to fetch blogs');
    }

    const blogIds = blogs.map((blog) => blog.id);
    const { data: blogTagsData, error: tagsError } =
      await this.getSupabaseClient()
        .from('blog_tag')
        .select('*')
        .in('blog_id', blogIds);

    if (tagsError) {
      throw tagsError;
    }

    const tagIds = blogTagsData.map((tag) => tag.tag_id);
    const { data: tagsData, error: tagsDataError } =
      await this.getSupabaseClient().from('tag').select('*').in('id', tagIds);

    if (tagsDataError) {
      throw tagsDataError;
    }

    const tagsById: Record<string, any> = {};
    tagsData.forEach((tag) => {
      tagsById[tag.id] = tag;
    });

    const blogsWithTags = blogs.map((blog) => {
      const blogTags = blogTagsData
        .filter((tag) => tag.blog_id === blog.id)
        .map((tag) => tagsById[tag.tag_id!]);
      return {
        ...blog,
        tags: blogTags || [],
      };
    });

    const { data: commentsData, error: commentsDataError } =
      await this.getSupabaseClient()
        .from('blog_comment')
        .select('*')
        .in('blog_id', blogIds);

    if (commentsDataError) {
      throw commentsDataError;
    }

    const commentsByBlogId: Record<string, any[]> = {};
    commentsData.forEach((comment) => {
      if (!commentsByBlogId[comment.blog_id]) {
        commentsByBlogId[comment.blog_id] = [];
      }
      commentsByBlogId[comment.blog_id]?.push(comment);
    });

    const blogsCurrent = blogsWithTags.map((blog) => {
      return {
        ...blog,
        comments: commentsByBlogId[blog.id] || [],
      };
    });

    return blogsCurrent;
  }

  async getBlogBySlug(slug: string) {
    const { data: blog, error: blogError } = await this.getSupabaseClient()
      .from('blog')
      .select('*')
      .eq('slug', slug)
      .single();

    if (blogError || !blog) {
      throw new Error('Failed to fetch blog by slug');
    }

    const { data: blogContent, error: blogContentError } =
      await this.getSupabaseClient()
        .from('blog_content')
        .select('content')
        .eq('blog_id', blog.id)
        .single();

    if (blogContentError || !blogContent) {
      throw new Error('Failed to fetch blog content');
    }

    const { data: blogComment, error: blogCommentError } =
      await this.getSupabaseClient()
        .from('blog_comment')
        .select(
          `
                *,
                users:user_id (
                    id,
                    display_name,
                    avatar_url
                )
            `,
        )
        .eq('blog_id', blog.id);

    if (blogCommentError) {
      throw new Error('Failed to fetch blog comments');
    }

    return {
      blog: {
        ...blog,
        content: blogContent.content,
      },
      comments: blogComment || [],
    };
  }

  async getBlogCategories() {
    const { data, error } = await this.getSupabaseClient()
      .from('blog_category')
      .select('*')
      .order('created_at', { ascending: true });

    if (error) {
      throw new Error('Failed to fetch blog categories');
    }

    return data;
  }

  async getBlogContent(blogId: string) {
    const { data, error } = await this.supabase
      .from('blog_content')
      .select('content')
      .eq('blog_id', blogId)
      .single();

    if (error) throw new Error(error.message);
    return data;
  }
}
