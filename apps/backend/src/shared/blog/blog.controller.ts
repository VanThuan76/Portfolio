import { Controller, Get, Param } from '@nestjs/common';
import { createBaseResponse } from '@/common/base.response';

import { BlogService } from './blog.service';

@Controller('blogs')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @Get()
  async getBlogs() {
    try {
      const blogs = await this.blogService.getPublishedBlogs();
      return createBaseResponse(200, blogs, 'Successfully fetched blogs');
    } catch (error) {
      return createBaseResponse(500, null, error.message);
    }
  }

  @Get(':slug')
  async getBlogBySlug(@Param('slug') slug: string) {
    try {
      const data = await this.blogService.getBlogBySlug(slug);
      return createBaseResponse(200, data, 'Successfully fetched blog by slug');
    } catch (error) {
      return createBaseResponse(500, null, error.message);
    }
  }

  @Get('categories')
  async getBlogCategories() {
    try {
      const categories = await this.blogService.getBlogCategories();
      return createBaseResponse(
        200,
        categories,
        'Successfully fetched blog categories',
      );
    } catch (error) {
      return createBaseResponse(500, null, error.message);
    }
  }

  @Get('content/:blog_id')
  async getBlogContent(@Param('blog_id') blogId: string) {
    try {
      const { content } = await this.blogService.getBlogContent(blogId);
      return createBaseResponse(
        200,
        { content },
        'Successfully fetched blog content',
      );
    } catch (error) {
      return createBaseResponse(500, null, error.message);
    }
  }
}
