import Auth from "@/components/custom/auth";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";

import { IAuthSupabase } from "@/server/data/types/supabase";

import FormComment from "./form-comment";

interface CommentProps {
  user: IAuthSupabase;
  blogId: string;
}

const Comment = ({ user, blogId }: CommentProps) => {
  return (
    <div className="w-full h-full mx-auto">
      {user ? (
        <FormComment user={user} blogId={blogId} />
      ) : (
        <Dialog>
          <DialogTrigger>
            <Textarea placeholder="Add to the discussion" />
          </DialogTrigger>
          <DialogContent>
            <Auth user={undefined} />
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default Comment;
