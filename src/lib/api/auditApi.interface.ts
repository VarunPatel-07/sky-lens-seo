import { AuditErrorResponse, AuditResult } from "@/types/audit.interface";

export interface AuditApiSuccess {
  ok: true;
  data: AuditResult;
}

export interface AuditApiFailure {
  ok: false;
  error: AuditErrorResponse;
}

export type AuditApiResponse = AuditApiSuccess | AuditApiFailure;
