"use client";
import { X } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export function MultiSelect({ value, onChange, options, placeholder }) {
  return (
    <div className="space-y-2">
      <Select
        onValueChange={(selectedValue) => {
          if (!value.includes(selectedValue)) {
            onChange([...value, selectedValue]);
          }
        }}
      >
        <SelectTrigger>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <div className="flex flex-wrap gap-2">
        {value.map((item) => {
          const option = options.find((opt) => opt.value === item);
          return (
            <div key={item} className="flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-full text-sm">
              {option?.label || item}
              <button
                type="button"
                onClick={() => onChange(value.filter((v) => v !== item))}
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
