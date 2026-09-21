"use client";

import { FormEvent, useState } from "react";
import clsx from "clsx";
import {
  URL_INPUT_LOADING_LABEL,
  URL_INPUT_PLACEHOLDER,
  URL_INPUT_SUBMIT_LABEL,
} from "./UrlInputForm.constant";
import { validateUrlInput } from "./UrlInputForm.helper";
import { UrlInputFormProps } from "./UrlInputForm.interface";

export function UrlInputForm({ onSubmit, isLoading }: UrlInputFormProps) {
  const [rawValue, setRawValue] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const validation = validateUrlInput(rawValue);
    setErrorMessage(validation.errorMessage);

    if (validation.isValid) {
      onSubmit(validation.value);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-xl flex-col gap-2">
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          type="text"
          inputMode="url"
          value={rawValue}
          onChange={(event) => setRawValue(event.target.value)}
          placeholder={URL_INPUT_PLACEHOLDER}
          disabled={isLoading}
          className={clsx(
            "flex-1 rounded-full border bg-surface px-5 py-3 text-ink shadow-lg shadow-primary/10 placeholder:text-muted",
            "focus:outline-none focus:ring-2 focus:ring-primary",
            errorMessage ? "border-amber-text" : "border-border",
          )}
        />
        <button
          type="submit"
          disabled={isLoading}
          className={clsx(
            "shrink-0 rounded-full bg-primary px-6 py-3 font-medium text-white shadow-lg shadow-primary/20 transition-colors",
            "hover:bg-primary-hover disabled:cursor-not-allowed disabled:opacity-60",
          )}
        >
          {isLoading ? URL_INPUT_LOADING_LABEL : URL_INPUT_SUBMIT_LABEL}
        </button>
      </div>
      {errorMessage && <p className="text-sm text-amber-text">{errorMessage}</p>}
    </form>
  );
}
