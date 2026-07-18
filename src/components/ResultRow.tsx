import type { ResultRowProps } from "../types";

export function ResultRow({ value, label }: ResultRowProps) {
  return (
    <div class="flex items-baseline gap-3">
      <span class="min-w-[120px] text-right text-[104px] font-extrabold italic leading-none text-purple-500 max-sm:min-w-[80px] max-sm:text-[64px]">
        {value !== undefined ? value : "--"}
      </span>
      <span class="text-[104px] font-extrabold italic leading-none text-black max-sm:text-[64px]">
        {label}
      </span>
    </div>
  );
}
