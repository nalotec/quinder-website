export function newRequestId() {
  // UUID-lite sin dependencia
  return "req_" + Date.now().toString(36) + Math.random().toString(36).slice(2);
}
