import { UseFormReturn } from "react-hook-form";
import { CloudUpload } from "lucide-react";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@ui/organisms/forms/form";
import { Input } from "@ui/atoms/input";
import { TypographyP } from "@ui/molecules/ui-elements/typography-p";

type Props = {
  form: UseFormReturn<any> | undefined;
  fileName: string;
  fieldName: string;
  label?: string;
  placeHolder?: string;
  className?: string;
  disabled?: boolean;
  accept?: string;
  handleFileChange: any;
};

export default function InputFile({
  fieldName,
  fileName,
  form,
  label,
  placeHolder,
  className,
  disabled = false,
  accept,
  handleFileChange,
}: Props) {
  const value = form?.watch(fieldName);

  return (
    <FormField
      disabled={disabled}
      control={form?.control}
      name={fieldName}
      render={({ field }) => (
        <FormItem className="w-full text-start">
          {label && <FormLabel className="text-sm">{label}</FormLabel>}
          <FormControl>
            <div className="flex items-center">
              <label
                htmlFor="upload_input"
                className={`flex cursor-pointer items-center ${className}`}
              >
                <CloudUpload className="mr-2 h-5 w-5" />
                <TypographyP
                  className="!m-0"
                  title={fileName ? fileName : "Nhập liệu"}
                />
              </label>
              <Input
                id="upload_input"
                type="file"
                placeholder={placeHolder}
                {...field}
                value={value || ""}
                className="hidden"
                onChange={handleFileChange}
                accept={accept}
              />
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
