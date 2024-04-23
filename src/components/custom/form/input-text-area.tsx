import React from "react";
import { UseFormReturn } from "react-hook-form";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/tw";

type Props = {
  form: UseFormReturn<any> | undefined;
  fieldName: string;
  className?: string;
  label?: string;
  placeHolder?: string;
};

export default function InputTextArea({
  fieldName,
  form,
  label,
  placeHolder,
  className,
}: Props) {
  const value = form?.watch(fieldName);
  return (
    <FormField
      control={form?.control}
      name={fieldName}
      render={({ field }) => (
        <FormItem>
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            <Textarea
              className={cn("resize-y", className)}
              placeholder={placeHolder}
              {...field}
              value={value || ""}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
