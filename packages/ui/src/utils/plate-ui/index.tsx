const { DndProvider } = require("react-dnd");
const { HTML5Backend } = require("react-dnd-html5-backend");
import { Plate } from "@udecode/plate-common";
import { CommentsProvider } from "@udecode/plate-comments";
import { cn } from "@utils/tw";

import { MentionCombobox } from "./mention-combobox";
import { Editor } from "./editor";
import { FixedToolbar } from "./fixed-toolbar";
import { FixedToolbarButtons } from "./fixed-toolbar-buttons";
import { FloatingToolbar } from "./floating-toolbar";
import { FloatingToolbarButtons } from "./floating-toolbar-buttons";
import { plugins } from "./plugins";

interface Props {
  handleChangeContent: any;
  initialValue?: any;
  placeholder?: string;
  className?: string;
  modeEditor?: "comment" | "form";
}
export function PlateEditor({
  handleChangeContent,
  initialValue,
  placeholder,
  className,
  modeEditor = "form",
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
          <FixedToolbar className={cn("w-full max-h-[100px] z-30", className)}>
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
