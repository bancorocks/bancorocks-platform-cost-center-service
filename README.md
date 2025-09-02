# Cost Center Service

Platform service for cost center management.

## Features
- GET `/api/cost-center/budget/v1/systems/:systemSlug`
- Swagger UI at `/docs`
- Healthcheck at `/health`
- Money values in integer cents

## Scripts
- `yarn dev`   : Run in watch mode on port 7070
- `yarn build` : Build to `dist/`
- `yarn start` : Run compiled server

## Route
- Example:
  ```
  GET http://localhost:7070/api/cost-center/budget/v1/systems/payments
  ```
  Response:
  ```json
  {
    "system": "payments",
    "currency": "BRL",
    "resetAt": "2025-10-01T00:00:00-03:00",
    "budgetCents": 1000000,
    "usageCents": 500000,
    "pendingCents": 80000,
    "policy": { "blockWhenOver": true, "thresholdWarnPct": 80 }
  }
  ```