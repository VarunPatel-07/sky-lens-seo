import { urlInputSchema } from "./UrlInputForm.constant";

export interface UrlValidationResult {
  isValid: boolean;
  value: string;
  errorMessage: string | null;
}

// Validates raw input against the URL schema and returns a normalized result
export function validateUrlInput(rawValue: string): UrlValidationResult {
  const result = urlInputSchema.safeParse(rawValue);

  if (!result.success) {
    return {
      isValid: false,
      value: rawValue,
      errorMessage: result.error.issues[0]?.message ?? "Enter a valid URL.",
    };
  }

  return { isValid: true, value: result.data, errorMessage: null };
}
