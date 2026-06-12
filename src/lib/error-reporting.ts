type ErrorOptions = {
  mechanism?: "manual" | "onerror" | "unhandledrejection" | "react_error_boundary";
  handled?: boolean;
  severity?: "error" | "warning" | "info";
};

/**
 * Reporta erros da aplicação para a consola (e para qualquer sistema de
 * monitorização que venha a ser integrado no futuro).
 */
export function reportError(
  error: unknown,
  context: Record<string, unknown> = {},
  options: ErrorOptions = {},
) {
  const { mechanism = "manual", handled = false, severity = "error" } = options;
  if (typeof window === "undefined") return;
  console.error("[VerifiCa]", { error, context, mechanism, handled, severity });
}
