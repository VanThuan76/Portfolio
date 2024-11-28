"use client";

import React, { SVGProps } from "react";
import { useTranslations } from "next-intl";
import { cn, withRef } from "@udecode/cn";
import { useCodeBlockElementState } from "@udecode/plate-code-block/react";

import { CodeBlockCombobox } from "./code-block-combobox";
import { PlateElement } from "./plate-element";

import "./code-block-element.css";

const CopyIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
     <svg
        xmlns="http://www.w3.org/2000/svg"
        width="36"
        height="36"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="ai ai-Copy"
      {...props}
        >
            <path d="M8 4v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7.242a2 2 0 0 0-.602-1.43L16.083 2.57A2 2 0 0 0 14.685 2H10a2 2 0 0 0-2 2z"/>
            <path d="M16 18v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h2"/>
    </svg>
  );
};


export const CodeBlockElement = withRef<typeof PlateElement>(
  ({ children, className, ...props }, ref) => {
    const { element } = props;

    const t = useTranslations("udecode-plate");
    const state = useCodeBlockElementState({ element });

    const [isCopied, setIsCopied] = React.useState(false);

    const getCodeText = (children) => {
        return children
          .map((line) => line.children.map((textNode) => textNode.text).join(''))
          .join('\n');
    };

    const handleCopy = React.useCallback(() => {
        const codeText = getCodeText(element.children);
        navigator.clipboard
          .writeText(codeText)
          .then(() => {
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000);
          })
          .catch((err) => {
            console.error(err);
          });
      }, [element.children]);

    return (
      <PlateElement
        ref={ref}
        className={cn("relative py-1", state.className, className)}
        {...props}
      >
        <pre className="overflow-x-auto rounded-md bg-gray-200 px-6 py-8 font-mono text-sm leading-[normal] [tab-size:2]">
          <code>{children}</code>
        </pre>

        <button
          onClick={handleCopy}
          className="absolute z-10 p-2 text-gray-600 right-2 top-2 hover:text-gray-800"
          aria-label="Copy to clipboard"
        >
          {isCopied ? <span className="ml-2 text-sm text-green-500">{t('copied')}!</span> : <CopyIcon className="w-5 h-5" /> }
        </button>

        {state.syntax && (
          <div
            className="absolute z-10 select-none left-2 top-2"
            contentEditable={false}
          >
            <CodeBlockCombobox />
          </div>
        )}
      </PlateElement>
    );
  },
);
