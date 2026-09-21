import { z } from "zod";

export const urlInputSchema = z
  .string()
  .trim()
  .min(1, "Enter a URL to audit.")
  .url("Enter a full URL, including https://.")
  .refine((value) => /^https?:\/\//i.test(value), {
    message: "Only http and https URLs are supported.",
  });

export const URL_INPUT_PLACEHOLDER = "Enter your website URL (e.g. mysite.com)";
export const URL_INPUT_SUBMIT_LABEL = "Analyze site";
export const URL_INPUT_LOADING_LABEL = "Analyzing…";
