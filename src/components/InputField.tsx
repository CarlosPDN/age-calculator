import type { InputFieldProps } from "../types";

export function InputField({
  label,
  placeholder,
  value,
  onChange,
  error,
}: InputFieldProps) {
  const hasError = !!error;
  return (
    <div class="flex flex-col gap-1">
      <label
        class={`text-xs font-bold tracking-[0.2em] max-sm:text-[10px] ${
          hasError ? "text-red-400" : "text-grey-500"
        }`}
      >
        {label}
      </label>
      <input
        type="number"
        placeholder={placeholder}
        value={value}
        onInput={(e) => onChange((e.target as HTMLInputElement).value)}
        class={`w-full max-w-40 rounded-lg border px-4 py-3 text-[32px] font-bold text-black outline-none transition-colors placeholder:text-grey-200 focus:border-purple-500 max-sm:max-w-full max-sm:text-xl max-sm:py-2 ${
          hasError ? "border-red-400" : "border-grey-200"
        }`}
      />
      {error && (
        <span class="text-xs italic text-red-400 max-sm:text-[10px]">
          {error}
        </span>
      )}
    </div>
  );
}
