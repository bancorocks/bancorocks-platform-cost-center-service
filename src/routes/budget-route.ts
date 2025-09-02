import { Router, Request, Response } from "express";
import { getBudgetBySystem } from "@/models/budget-model";

const router = Router();

router.get(
  "/api/cost-center/budget/v1/systems/:systemSlug",
  (req: Request, res: Response) => {
    const { systemSlug } = req.params;
    if (!systemSlug) {
      return res.status(400).json({ error: "missing_system_slug" });
    }

    const data = getBudgetBySystem(systemSlug);
    if (!data) {
      return res
        .status(404)
        .json({ error: "system_not_found", system: systemSlug });
    }

    return res.status(200).json(data);
  },
);

export default router;
