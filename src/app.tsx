import { useState } from "preact/hooks";
import type { AgeResult, Errors } from "./types";
import { calculateAge, validateInputs } from "./utils/functions";
import { InputField } from "./components/InputField";
import { ResultRow } from "./components/ResultRow";

export function App() {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [result, setResult] = useState<AgeResult | null>(null);
  const [errors, setErrors] = useState<Errors>({});

  const handleSubmit = (e: Event) => {
    e.preventDefault();

    const newErrors = validateInputs(day, month, year);
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setResult(
        calculateAge(
          parseInt(day, 10),
          parseInt(month, 10),
          parseInt(year, 10),
        ),
      );
    } else {
      setResult(null);
    }
  };

  return (
    <main class="flex min-h-screen items-center justify-center p-4">
      <div class="w-full max-w-210 rounded-3xl rounded-br-[200px] bg-white p-12 shadow-sm max-sm:rounded-br-[100px] max-sm:p-6">
        {/* Form */}
        <form onSubmit={handleSubmit} noValidate>
          <div class="flex gap-8 max-sm:gap-4">
            <InputField
              label="DAY"
              placeholder="DD"
              value={day}
              onChange={setDay}
              error={errors.day}
              hasError={!!Object.keys(errors).length}
            />
            <InputField
              label="MONTH"
              placeholder="MM"
              value={month}
              onChange={setMonth}
              error={errors.month}
              hasError={!!Object.keys(errors).length}
            />
            <InputField
              label="YEAR"
              placeholder="YYYY"
              value={year}
              onChange={setYear}
              error={errors.year}
              hasError={!!Object.keys(errors).length}
            />
          </div>

          {/* Divider + Button */}
          <div class="relative my-8 flex items-center max-sm:justify-center">
            <div class="bg-grey-200 h-px w-full" />
            <button
              type="submit"
              class="absolute right-0 flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-purple-500 transition-colors hover:bg-black max-sm:right-auto max-sm:h-14 max-sm:w-14"
            >
              <img
                src="/icon-arrow.svg"
                alt="Calculate age"
                class="w-7 max-sm:w-6"
              />
            </button>
          </div>
        </form>

        {/* Results */}
        <div class="mt-4">
          <ResultRow value={result?.years} label="years" />
          <ResultRow value={result?.months} label="months" />
          <ResultRow value={result?.days} label="days" />
        </div>
      </div>
    </main>
  );
}
