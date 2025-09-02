import express from "express";
import cors from "cors";
import path from "node:path";
import fs from "node:fs";
import YAML from "yaml";
import swaggerUi from "swagger-ui-express";
import budgetRoute from "@/routes/budget-route";

const app = express();
app.use(cors());
app.use(express.json());

// Healthcheck
app.get("/health", (_req, res) => res.status(200).json({ ok: true }));

// API routes
app.use(budgetRoute);

// Swagger UI at /docs
const openapiPath = path.resolve(process.cwd(), "src", "openapi.yaml");
const openapiDoc = YAML.parse(fs.readFileSync(openapiPath, "utf-8"));
app.use("/docs", swaggerUi.serve, swaggerUi.setup(openapiDoc));

const PORT = process.env.PORT ? Number(process.env.PORT) : 7070;
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(
    `[cost-center] listening on ${PORT} (docs at http://localhost:${PORT}/docs)`,
  );
});
