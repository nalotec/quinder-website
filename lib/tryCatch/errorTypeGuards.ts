/**
 * -------------------------------------------------------
 *  Supabase type guards
 * -------------------------------------------------------
 */
// PostgresError shape
export function isPostgrestError(e: any): boolean {
  return (
    !!e &&
    typeof e === "object" &&
    typeof e.message === "string" &&
    "details" in e &&
    "hint" in e &&
    "code" in e
  );
}

// AuthApiError (goTrue): Error con status
export function isAuthApiError(e: any): boolean {
  return (
    !!e &&
    typeof e === "object" &&
    typeof e.message === "string" &&
    typeof e.status === "number" &&
    e.name === "AuthApiError"
  );
}

// AuthError generico (supabase-js)
export function isSupabaseAuthError(e: any): boolean {
  return (
    !!e &&
    typeof e === "object" &&
    typeof e.message === "string" &&
    (e.name === "AuthError" || e.__isAuthError === true)
  );
}

/**
 * -------------------------------------------------------
 *  Stripe Type guards
 * -------------------------------------------------------
 */
// Duck-typing StripeError
export function isStripeError(e: any): boolean {
  return (
    !!e &&
    typeof e === "object" &&
    (e.type?.startsWith("Stripe") ||
      e.rawType?.startsWith("card_error") ||
      (typeof e.code === "string" && ("decline_code" in e || "param" in e)))
  );
}
