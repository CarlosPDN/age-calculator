import type { ResultRowProps } from "../types";

export function ResultRow({ value, label }: ResultRowProps) {
  return (
    <div class="flex items-baseline gap-3">
      <span class="min-w-30 text-right text-[104px] leading-none font-extrabold text-purple-500 italic max-sm:min-w-20 max-sm:text-[64px]">
        {value !== undefined ? value : "--"}
      </span>
      <span class="text-[104px] leading-none font-extrabold text-black italic max-sm:text-[64px]">
        {label}
      </span>
    </div>
  );
}
