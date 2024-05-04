import { Plate } from "@udecode/plate-common";
import { CommentsProvider } from "@udecode/plate-comments";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import { MentionCombobox } from "@/components/plate-ui/mention-combobox";
import { Editor } from "@/components/plate-ui/editor";
import { FixedToolbar } from "@/components/plate-ui/fixed-toolbar";
import { FixedToolbarButtons } from "@/components/plate-ui/fixed-toolbar-buttons";
import { FloatingToolbar } from "@/components/plate-ui/floating-toolbar";
import { FloatingToolbarButtons } from "@/components/plate-ui/floating-toolbar-buttons";
import { plugins } from "@/lib/plate";
import { cn } from "@/lib/tw";

interface Props {
  handleChangeContent: any;
  initialValue?: any;
  placeholder?: string;
  className?: string;
  modeEditor?: 'comment' | 'form'
}
export function PlateEditor({
  handleChangeContent,
  initialValue,
  placeholder,
  className,
  modeEditor = 'form'
}: Props) {
  return (
    <DndProvider backend={HTML5Backend}>
      <CommentsProvider users={{}} myUserId="1">
        <Plate
          plugins={plugins}
          initialValue={initialValue ? initialValue : ""}
          onChange={(value: any) => {
            handleChangeContent(value);
          }}
        >
          <FixedToolbar className={cn("w-full max-h-[100px]", className)}>
            <FixedToolbarButtons mode={modeEditor} />
          </FixedToolbar>
          <Editor
            placeholder={placeholder}
            className="mt-5 md:mt-0 min-h-[100px] focus-visible:ring-0 focus-within:ring-offset-0 border-t-0 rounded-t-none"
          />
          <FloatingToolbar>
            <FloatingToolbarButtons />
          </FloatingToolbar>
          <MentionCombobox items={[]} />
        </Plate>
      </CommentsProvider>
    </DndProvider>
  );
}
