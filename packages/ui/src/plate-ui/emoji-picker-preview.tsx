import type { UseEmojiPickerType } from "@udecode/plate-emoji/react";

export type EmojiPickerPreviewProps = Pick<
  UseEmojiPickerType,
  "emoji" | "hasFound" | "i18n" | "isSearching"
>;

export type EmojiPreviewProps = Pick<UseEmojiPickerType, "emoji">;

export type NoEmojiPreviewProps = Pick<UseEmojiPickerType, "i18n">;

export type PickAnEmojiPreviewProps = NoEmojiPreviewProps;

function EmojiPreview({ emoji }: EmojiPreviewProps) {
  return (
    <div className="flex items-center p-2 border-t h-14 max-h-14 min-h-14 border-muted">
      <div className="flex items-center justify-center text-2xl">
        {emoji?.skins[0]?.native}
      </div>
      <div className="pl-2 overflow-hidden">
        <div className="text-sm font-semibold truncate">{emoji?.name}</div>
        <div className="text-sm truncate">{`:${emoji?.id}:`}</div>
      </div>
    </div>
  );
}

function NoEmoji({ i18n }: NoEmojiPreviewProps) {
  return (
    <div className="flex items-center p-2 border-t h-14 max-h-14 min-h-14 border-muted">
      <div className="flex items-center justify-center text-2xl">😢</div>
      <div className="pl-2 overflow-hidden">
        <div className="text-sm font-bold truncate">
          {i18n.searchNoResultsTitle}
        </div>
        <div className="text-sm truncate">{i18n.searchNoResultsSubtitle}</div>
      </div>
    </div>
  );
}

function PickAnEmoji({ i18n }: PickAnEmojiPreviewProps) {
  return (
    <div className="flex items-center p-2 border-t h-14 max-h-14 min-h-14 border-muted">
      <div className="flex items-center justify-center text-2xl">☝️</div>
      <div className="pl-2 overflow-hidden">
        <div className="text-sm font-semibold truncate">{i18n.pick}</div>
      </div>
    </div>
  );
}

export function EmojiPickerPreview({
  emoji,
  hasFound = true,
  i18n,
  isSearching = false,
  ...props
}: EmojiPickerPreviewProps) {
  const showPickEmoji = !emoji && (!isSearching || hasFound);
  const showNoEmoji = isSearching && !hasFound;
  const showPreview = emoji && !showNoEmoji && !showNoEmoji;

  return (
    <>
      {showPreview && <EmojiPreview emoji={emoji} {...props} />}
      {showPickEmoji && <PickAnEmoji i18n={i18n} {...props} />}
      {showNoEmoji && <NoEmoji i18n={i18n} {...props} />}
    </>
  );
}
