import pino from "pino";

// En develop usamos pino-pretty
// En prod, JSON por stdout + transports a Sentry
const isProd = process.env.NODE_ENV === "production";

export const logger = pino({
  level: isProd ? "info" : "debug",
  browser: {
    asObject: true,
    write: (o) => {
      console.log(JSON.stringify(o));
    },
  },
  transport: {
    target: isProd ? "pino" : "pino-pretty",
    options: {
      colorize: true,
      translateTime: "SYS:Standard",
      ignore: "pid, hostname",
    },
  },
  redact: {
    paths: [
      "req.headers.authorization",
      "authorization",
      "headers.authorization",
      "*.password",
      "*.secret",
      "*.token",
      "*.apiKey",
      "*.apikey",
    ],
    remove: true,
  },
});

/**
 * -------------------------------------------------------
 *  Logger interface
 * -------------------------------------------------------
 */
export interface AppLogger {
  info: (msg: string, meta?: unknown) => void;
  warn: (msg: string, meta?: unknown) => void;
  error: (msg: string, meta?: unknown) => void;
}

export const pinoLog: AppLogger = {
  info: (msg, meta) => logger.info({ ...(meta as object) }, msg),
  warn: (msg, meta) => logger.warn({ ...(meta as object) }, msg),
  error: (msg, meta) => logger.error({ ...(meta as object) }, msg),
};
