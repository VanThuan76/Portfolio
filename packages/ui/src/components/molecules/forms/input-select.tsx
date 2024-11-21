"use client";

import { UseFormReturn } from "react-hook-form";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@repo/design-system/components/organisms/forms/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@repo/design-system/components/molecules/other-utils/select";
import { cn } from "@repo/design-system/utils/tw";

export interface ItemsSelect {
  value: number;
  label: string;
  property: string;
}

type Props = {
  id?: string;
  className?: string;
  form: UseFormReturn<any> | undefined;
  fieldName: string;
  label?: string;
  placeHolder?: string;
  options?: { value: any; label: string }[];
  disabled?: boolean;
};

export default function InputSelect({
  disabled = false,
  id,
  className,
  form,
  label,
  placeHolder,
  fieldName,
  options = [],
}: Props) {
  return (
    <FormField
      disabled={disabled}
      control={form?.control}
      name={fieldName}
      render={({ field }) => {
        return (
          <FormItem
            id={id}
            key={field.value}
            className={cn("w-full", className)}
          >
            <FormLabel>{label}</FormLabel>
            <Select
              onValueChange={(value) => field.onChange(Number(value))}
              value={field.value}
            >
              <FormControl>
                <SelectTrigger className="focus:ring-0">
                  <SelectValue placeholder={placeHolder} />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {options.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
}
