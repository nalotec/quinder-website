import { isAuthApiError } from "@supabase/supabase-js";
import {
  isPostgrestError,
  isStripeError,
  isSupabaseAuthError,
} from "./errorTypeGuards";
import { AppError } from "./typesTryCatch";

/**
 * -------------------------------------------------------
 *  Normalizador de errores
 * -------------------------------------------------------
 */
export function normalizeError(e: unknown, fallbackStatus = 500): AppError {
  // Ya es AppError
  if (e instanceof AppError) return e;

  // Supabase: Postgrest
  if (isPostgrestError(e)) {
    const { message, details, hint, code } = e as any;
    return new AppError(message || "Database error", {
      code: code || "POSTGREST_ERROR",
      status: 400,
      details: { details, hint },
      cause: e,
    });
  }

  // Supabase: Auth API
  if (isAuthApiError(e)) {
    const { message, status } = e as any;
    return new AppError(message || "Auth API error", {
      code: "SUPABASE_AUTH_API_ERROR",
      status: status || 401,
      cause: e,
    });
  }

  // Supabase: Auth genérico
  if (isSupabaseAuthError(e)) {
    const { message } = e as any;
    return new AppError(message || "Authentication error", {
      code: "SUPABASE_AUTH_ERROR",
      status: 401,
      cause: e,
    });
  }

  // Stripe
  if (isStripeError(e)) {
    const se = e as any;

    const status = Number(se.statusCode ?? se.raw?.statusCode ?? 402) || 402;
    const code = se.code || se.type || "STRIPE_ERROR";
    const message = se.message || se.decline_code || "Stripe error";
    const details = {
      param: se.param,
      requestId: se.requestId ?? se.raw?.requestId,
      decline_code: se.decline_code,
      doc_url: se.doc.url ?? se.raw?.doc_url,
    };
    return new AppError(message, { code, status, details, cause: e });
  }

  // Error con status (fetch/HTTP libs)
  if (e instanceof Error && "status" in (e as any)) {
    const status = Number((e as any).status || fallbackStatus);
    return new AppError(e.message || "HTTP error", { status, cause: e });
  }

  // Error generico
  if (e instanceof Error) {
    return new AppError(e.message || "Unexpected error", {
      status: fallbackStatus,
      cause: e,
    });
  }

  // Si es un tipo de error desconocido
  return new AppError("Unknown error", { status: fallbackStatus, details: e });
}
