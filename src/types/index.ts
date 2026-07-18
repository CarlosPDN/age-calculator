export interface AgeResult {
  years: number;
  months: number;
  days: number;
}

export interface Errors {
  day?: string;
  month?: string;
  year?: string;
}

export interface InputFieldProps {
  label: string;
  placeholder: string;
  value: string;
  onChange: (val: string) => void;
  error?: string;
  hasError: boolean;
}

export interface ResultRowProps {
  value: number | undefined;
  label: string;
}
