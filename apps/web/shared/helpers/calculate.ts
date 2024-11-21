export const calculateReadTime = (content: any | null) => {
  const wordsPerMinute = 200;
  if (!content) return;

  const blocks = Array.isArray(content) ? content : [content];

  const extractText = (blocks: any) => {
    if (!Array.isArray(blocks)) return "";

    return blocks
      .map((block) => {
        if (block.children) {
          return extractText(block.children);
        }
        if (block.text) {
          return block.text;
        }
        return "";
      })
      .join(" ");
  };

  const allText = extractText(blocks);

  const wordCount = allText.split(/\s+/).filter(Boolean).length;

  const minutes = Math.ceil(wordCount / wordsPerMinute);
  return minutes > 0 ? minutes : 1;
};

export const calculateWordCount = (content: any | null) => {
  if (!content) return 0;

  const blocks = Array.isArray(content) ? content : [content];

  const extractText = (blocks: any): string => {
    if (!Array.isArray(blocks)) return "";

    return blocks
      .map((block) => {
        if (block.children) {
          return extractText(block.children);
        }
        if (block.text) {
          return block.text;
        }
        return "";
      })
      .join(" ");
  };

  const allText = extractText(blocks);

  const wordCount = allText.split(/\s+/).filter(Boolean).length;
  return wordCount;
};
