/**
 * -------------------------------------------------------
 *  Clase AppError. Error estandarizado
 * -------------------------------------------------------
 */
export class AppError extends Error {
  readonly code?: string;
  readonly status?: number;
  readonly cause?: unknown;
  readonly details?: unknown;

  constructor(
    message: string,
    opts?: {
      code?: string;
      status?: number;
      cause?: unknown;
      details?: unknown;
    },
  ) {
    super(message);
    this.name = "AppError";
    this.code = opts?.code;
    this.status = opts?.status;
    this.cause = opts?.cause;
    this.details = opts?.details;
  }
}

/**
 * -------------------------------------------------------
 *  Tipos base
 * -------------------------------------------------------
 */
export type Ok<T> = { ok: true; data: T };
export type Err<E = AppError> = { ok: false; error: E };
export type Result<T, E = AppError> = Ok<T> | Err<E>;

export const ok = <T>(data: T): Ok<T> => ({ ok: true, data });
export const err = <E = AppError>(error: E): Err<E> => ({ ok: false, error });
