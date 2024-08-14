import { UseFormReturn } from "react-hook-form";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@ui/organisms/forms/form";
import { Textarea } from "@ui/atoms/textarea";

import { cn } from "@utils/tw";

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
          {label && <FormLabel className="text-sm">{label}</FormLabel>}
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
