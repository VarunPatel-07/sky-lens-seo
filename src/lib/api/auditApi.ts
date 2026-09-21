import { API_ROUTES } from "@/constants/routes.constant";
import { AuditErrorResponse } from "@/types/audit.interface";
import { AuditApiResponse } from "./auditApi.interface";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL ?? "";

const UNREACHABLE_ERROR: AuditErrorResponse = {
  error: "internal_error",
  message: "Could not reach the audit service. Check your connection and try again.",
};

// Calls the backend audit endpoint and returns a typed success or failure result
export async function runAudit(
  url: string,
  signal?: AbortSignal,
): Promise<AuditApiResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}${API_ROUTES.AUDIT}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url }),
      signal,
    });

    const body = await response.json();

    if (!response.ok) {
      return { ok: false, error: body as AuditErrorResponse };
    }

    return { ok: true, data: body };
  } catch {
    return { ok: false, error: UNREACHABLE_ERROR };
  }
}
