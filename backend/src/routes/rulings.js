import { Router } from "express";
import * as rulingController from "../controllers/rulings";

const router = Router();

router.get("/", rulingController.findAll);
router.post("/", rulingController.create);
router.put("/:id", rulingController.update);

export default router;
