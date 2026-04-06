/**
 * Base URL for the portfolio Go API (includes `/api` path prefix).
 * Override with NEXT_PUBLIC_PORTFOLIO_API_URL if your dev server uses another host/port.
 */
export const PORTFOLIO_API_URL =
  process.env.NEXT_PUBLIC_PORTFOLIO_API_URL?.replace(/\/$/, "").trim() ||
  (process.env.NODE_ENV === "development"
    ? "http://localhost:8080/api"
    : "https://api.takedi.com/api");
