import fs from "node:fs";
import path from "node:path";
import { BudgetResponse } from "@/types";

type DbShape = {
  systems: Record<string, Omit<BudgetResponse, "system">>;
};

const DB_PATH = path.resolve(process.cwd(), "src", "db.json");

function loadDb(): DbShape {
  const raw = fs.readFileSync(DB_PATH, "utf-8");
  return JSON.parse(raw) as DbShape;
}

export function getBudgetBySystem(
  systemSlug: string,
): BudgetResponse | undefined {
  const db = loadDb();
  const row = db.systems[systemSlug];
  if (!row) return undefined;
  return { system: systemSlug, ...row };
}
