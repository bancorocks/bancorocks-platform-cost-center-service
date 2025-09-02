export type Currency = "BRL" | "USD" | "EUR";

export interface BudgetPolicy {
  blockWhenOver: boolean;
  thresholdWarnPct: number; // e.g., 80
}

export interface BudgetResponse {
  system: string;
  currency: Currency;
  resetAt: string; // ISO-8601
  budgetCents: number; // allocation for the window
  usageCents: number; // already spent
  pendingCents: number; // pending/committed reservations
  policy: BudgetPolicy;
}
