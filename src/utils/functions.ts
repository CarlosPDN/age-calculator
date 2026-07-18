import type { AgeResult, Errors } from "../types";

export function isValidDate(day: number, month: number, year: number): boolean {
  const date = new Date(year, month - 1, day);
  return (
    date.getFullYear() === year &&
    date.getMonth() === month - 1 &&
    date.getDate() === day
  );
}

export function calculateAge(day: number, month: number, year: number): AgeResult {
  const today = new Date();
  const birthDate = new Date(year, month - 1, day);

  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  if (days < 0) {
    months--;
    const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    days += prevMonth.getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  return { years, months, days };
}

export function validateInputs(day: string, month: string, year: string): Errors {
  const newErrors: Errors = {};
  const today = new Date();

  const dayNum = parseInt(day, 10);
  const monthNum = parseInt(month, 10);
  const yearNum = parseInt(year, 10);

  if (!day.trim()) {
    newErrors.day = "This field is required";
  } else if (isNaN(dayNum) || dayNum < 1 || dayNum > 31) {
    newErrors.day = "Must be a valid day";
  }

  if (!month.trim()) {
    newErrors.month = "This field is required";
  } else if (isNaN(monthNum) || monthNum < 1 || monthNum > 12) {
    newErrors.month = "Must be a valid month";
  }

  if (!year.trim()) {
    newErrors.year = "This field is required";
  } else if (isNaN(yearNum) || yearNum < 1) {
    newErrors.year = "Must be a valid year";
  } else if (yearNum > today.getFullYear()) {
    newErrors.year = "Must be in the past";
  }

  if (!newErrors.day && !newErrors.month && !newErrors.year) {
    if (!isValidDate(dayNum, monthNum, yearNum)) {
      newErrors.day = "Must be a valid date";
    } else {
      const birthDate = new Date(yearNum, monthNum - 1, dayNum);
      if (birthDate > today) {
        newErrors.year = "Must be in the past";
      }
    }
  }

  return newErrors;
}
