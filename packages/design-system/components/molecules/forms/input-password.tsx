import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
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
  form: UseFormReturn<any>;
  fieldName: string;
  label?: string;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
};

export default function InputPassword({
  fieldName,
  form,
  label,
  placeholder,
  className,
  disabled = false,
}: Props) {
  const [passwordReveal, setPasswordReveal] = useState(false);

  return (
    <FormField
      control={form.control}
      name={fieldName}
      render={({ field }) => (
        <FormItem className="w-full text-start">
          {label && (
            <FormLabel className="text-sm font-semibold">{label}</FormLabel>
          )}
          <FormControl>
            <div className="relative">
              <Input
                className={`h-8 ${className}`}
                type={passwordReveal ? "text" : "password"}
                disabled={disabled}
                placeholder={placeholder}
                {...field}
              />
              <div
                className="absolute right-2 top-[12%] cursor-pointer group"
                onClick={() => setPasswordReveal(!passwordReveal)}
              >
                {passwordReveal ? (
                  <Eye className="w-6 h-6 transition-all group-hover:scale-105" />
                ) : (
                  <EyeOff className="w-6 h-6 transition-all group-hover:scale-105" />
                )}
              </div>
            </div>
          </FormControl>
          <FormMessage className="text-red-500" />
        </FormItem>
      )}
    />
  );
}
