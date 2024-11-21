import { UseFormReturn } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@repo/design-system/components/organisms/forms/form";
import { Input } from "@repo/design-system/components/atoms/input";

type Props = {
  form: UseFormReturn<any> | undefined;
  fieldName: string;
  label?: string;
  placeHolder?: string;
  className?: string;
  disabled?: boolean;
};

export default function InputText({
  fieldName,
  form,
  label,
  placeHolder,
  className,
  disabled = false,
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
            <Input
              placeholder={placeHolder}
              {...field}
              value={value || ""}
              className={`${className}`}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
