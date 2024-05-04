import Auth from "@/components/custom/auth";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { supabaseServer } from "@/lib/supabase/server";
import FormComment from "./form-comment";

interface CommentProps {
  blogId: string;
}

const Comment = async ({ blogId }: CommentProps) => {
  const supabase = await supabaseServer();
  const {
    data: { user },
  } = await supabase.auth.getUser();

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
