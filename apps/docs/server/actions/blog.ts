import { IBlogSupabase } from "@server/data/types/blog";
import { IBlogCommentWithUser, readCommentByBlogId } from "./comment";

type ArticleBlogResult = {
  blog: IBlogSupabase;
  comments: IBlogCommentWithUser[];
} | null;

// get article(detail) blog
export async function getArticleBlog(
  client: any,
  slug: string,
): Promise<ArticleBlogResult | null> {
  const { data: blog, error: blogError } = await client
    .from("blog")
    .select("*")
    .eq("slug", slug)
    .single();

  if (blogError || !blog) {
    console.error("Error fetching blog:", blogError);
    return null;
  }

  const { data: blogContent, error: contentError } = await client
    .from("blog_content")
    .select("content")
    .eq("blog_id", blog.id)
    .single();

  if (contentError || !blogContent) {
    console.error("Error fetching blog content:", contentError);
    return null;
  }

  const comments = await readCommentByBlogId(blog.id);

  return {
    blog: {
      ...blog,
      content: blogContent.content,
    },
    comments: comments.data,
  };
}

//get all blog
// export function getBlog(client: any): any {
//   return client
//     .from("blog")
//     .select("*")
//     .eq("is_published", true)
//     .then(({ data: blogs, error }) => {
//       if (error) {
//         throw error;
//       }

//       const blogIds = blogs.map((blog) => blog.id);

//       return client
//         .from("blog_tag")
//         .select("*")
//         .in("blog_id", blogIds)
//         .then(({ data: blogTagsData, error: tagsError }) => {
//           if (tagsError) {
//             throw tagsError;
//           }

//           const tagIds = blogTagsData.map((tag) => tag.tag_id);

//           return client
//             .from("tag")
//             .select("*")
//             .in("id", tagIds)
//             .then(({ data: tagsData, error: tagsDataError }) => {
//               if (tagsDataError) {
//                 throw tagsDataError;
//               }

//               const tagsById: Record<string, any> = {};
//               tagsData.forEach((tag) => {
//                 tagsById[tag.id] = tag;
//               });

//               const blogsWithTags = blogs.map((blog) => {
//                 const blogTags = blogTagsData
//                   .filter((tag) => tag.blog_id === blog.id)
//                   .map((tag) => tagsById[tag.tag_id!]);
//                 return {
//                   ...blog,
//                   tags: blogTags || [],
//                 };
//               });

//               return client
//                 .from("blog_comment")
//                 .select("*")
//                 .in("blog_id", blogIds)
//                 .then(({ data: commentsData, error: commentsDataError }) => {
//                   if (commentsDataError) {
//                     throw commentsDataError;
//                   }

//                   const commentsByBlogId: Record<string, any[]> = {};
//                   commentsData.forEach((comment) => {
//                     if (!commentsByBlogId[comment.blog_id]) {
//                       commentsByBlogId[comment.blog_id] = [];
//                     }
//                     commentsByBlogId[comment.blog_id]?.push(comment);
//                   });

//                   const blogsCurrent = blogsWithTags.map((blog) => {
//                     return {
//                       ...blog,
//                       comments: commentsByBlogId[blog.id] || [],
//                     };
//                   });

//                   return blogsCurrent;
//                 });
//             });
//         });
//     });
// }

// export async function createBlog(data: any) {
//     const { ...blog } = data;
//     const resultBlog = await supabase
//         .from("blog")
//         .insert(blog)
//         .select("id")
//         .single();
//     if (resultBlog.error) {
//         return JSON.stringify(resultBlog);
//     } else {
//         const resultBlogContent = await supabase
//             .from("blog_content")
//             .insert({ blog_id: resultBlog.data.id, content: data.content })
//             .select("id")
//             .single();
//         if (data.tags.length > 0) {
//             const blogTags = [];
//             for (const tag of data.tags) {
//                 const blogTag = {
//                     blog_id: resultBlog.data.id,
//                     tag_slug: tag,
//                 };
//                 const insertPromise = await supabase.from("blog_tag").insert(blogTag);
//                 blogTags.push(insertPromise);
//             }
//             await Promise.all(blogTags);
//         }
//         return JSON.stringify(resultBlogContent);
//     }
// }
