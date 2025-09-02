# Cost Center Service

Platform service for cost center management.

## Requirements

- Node.js 18.x or higher
- npm or yarn package manager
- TypeScript 5.9 or higher

## Features
- GET `/v1/cost-center/systems/:systemSlug`
- Swagger UI at `/docs`
- Healthcheck at `/health`
- Money values in integer cents

## Get started

Step 1. Clone this repository

```bash
git clone https://github.com/bancorocks/bancorocks-platform-cost-center-service.git
```

Step 2. Install dependencies
```bash
yarn install
```

Step 3. Start local server


```bash
yarn dev
```

Step 4. Open in your browser: http://localhost:7070/docs

## Route
- Example:
  ```
  GET http://localhost:7070/v1/cost-center/systems/banking-accounts-system
  ```
  Response:
  ```json
  {
    "system": "banking-accounts-system",
    "currency": "BRL",
    "resetAt": "2025-10-01T00:00:00-03:00",
    "budgetCents": 1000000,
    "usageCents": 500000,
    "pendingCents": 80000,
    "policy": { "blockWhenOver": true, "thresholdWarnPct": 80 }
  }
  ```