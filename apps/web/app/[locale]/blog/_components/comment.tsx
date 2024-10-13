import { Textarea } from "@ui/atoms/textarea";

import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@ui/molecules/modals/dialog";

import FormComment from "./form-comment";

interface CommentProps {
  user: null;
  blogId: string;
}

const Comment = ({ user, blogId }: CommentProps) => {
  return (
    <>
      {user ? (
        <FormComment user={user} blogId={blogId} />
      ) : (
        <Dialog>
          <DialogTrigger>
            <Textarea placeholder="Add to the discussion" />
          </DialogTrigger>
          <DialogContent>{/* <Auth user={undefined} /> */}</DialogContent>
        </Dialog>
      )}
    </>
  );
};

export default Comment;
