"use client";
import {
  MultiSelector,
  MultiSelectorTrigger,
  MultiSelectorInput,
  MultiSelectorContent,
  MultiSelectorList,
  MultiSelectorItem,
} from "@/components/ui/multi-select";
import { UseFormReturn } from "react-hook-form";
import { FormField, FormItem, FormLabel } from "@/components/ui/form";

type Props = {
  className?: string;
  form: UseFormReturn<any> | undefined;
  fieldName: string;
  label?: string;
  hint?: string;
  placeHolder?: string;
  options?: { value: any; label: string }[];
  itemsSelect?: any[];
  setItemsSelect?: any;
  disabled?: boolean;
};
const InputMultiSelect = ({
  className,
  form,
  label,
  fieldName,
  placeHolder,
  options = [],
  itemsSelect = [],
  setItemsSelect,
  disabled = false,
}: Props) => {
  return (
    <FormField
      disabled={disabled}
      control={form?.control}
      name={fieldName}
      render={({ field }) => (
        <FormItem className={`w-full ${className}`}>
          {label && <FormLabel>{label}</FormLabel>}
          <MultiSelector
            values={itemsSelect}
            onValuesChange={setItemsSelect && setItemsSelect}
            loop={false}
          >
            <MultiSelectorTrigger>
              <MultiSelectorInput placeholder={placeHolder || ""} />
            </MultiSelectorTrigger>
            <MultiSelectorContent>
              <MultiSelectorList>
                {options.map((option, i) => (
                  <MultiSelectorItem key={i} value={option.value}>
                    {option.label}
                  </MultiSelectorItem>
                ))}
              </MultiSelectorList>
            </MultiSelectorContent>
          </MultiSelector>
        </FormItem>
      )}
    />
  );
};

export default InputMultiSelect;
