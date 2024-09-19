import { Heart } from "lucide-react";

import { IBlogCommentWithUser } from "@server/actions/comment";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@ui/molecules/ui-elements/avatar";
import { TypographyP } from "@ui/molecules/ui-elements/typography-p";

import { convertStringDay } from "@utils/helpers/convert-time";

import ContentBlog from "./content-blog";

const ListComment = ({ comments }: { comments: IBlogCommentWithUser[] }) => {
  return (
    <div className="w-full h-full">
      {comments &&
        comments.length > 0 &&
        comments.map((comment, i) => {
          return (
            <div
              key={i}
              className="flex flex-col items-start justify-start w-full gap-2 my-5"
            >
              <div className="flex items-start justify-start w-full gap-2">
                <Avatar>
                  <AvatarImage
                    src={comment.users?.avatar_url as string}
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="flex flex-col items-start justify-start w-full p-4 border rounded-md">
                  <div className="flex items-center justify-start w-full gap-2">
                    <TypographyP
                      title={comment.users?.display_name as string}
                      className="font-medium"
                    />
                    <span className="text-xs text-zinc-500">
                      {convertStringDay(comment.created_at)}
                    </span>
                  </div>
                  <ContentBlog
                    content={JSON.parse(comment.content as string)}
                  />
                </div>
              </div>
              <div className="flex items-center justify-start gap-2 ml-12">
                <Heart className="w-[16px] h-[16px]" />
                <span className="text-xs text-zinc-700">
                  {comment.like} likes
                </span>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default ListComment;
