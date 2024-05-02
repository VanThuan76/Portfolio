import { UseFormReturn } from "react-hook-form";
import { Checkbox } from "@/components/ui/checkbox";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
type Props = {
  form: UseFormReturn<any> | undefined;
  fieldName: string;
  title?: string;
  label?: string;
  description?: string;
};

export default function InputCheckBox({
  form,
  fieldName,
  title,
  label,
  description,
}: Props) {
  return (
    <FormField
      control={form?.control}
      name={fieldName}
      render={({ field }) => (
        <FormItem className="space-y-0">
          {label && <FormLabel className="text-sm">{label}</FormLabel>}
          <FormDescription>{description}</FormDescription>
          <FormField
            control={form?.control}
            name={fieldName}
            render={({ field }) => {
              return (
                <FormItem className="flex flex-row items-center space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      disabled={!form ? true : false}
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <FormLabel className="text-sm font-normal">{title}</FormLabel>
                </FormItem>
              );
            }}
          />
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
