import { Router } from "express";
import IndexController from "../controller/IndexController";

const router = Router();

router.get("/detail", IndexController.TalentController.detail);
router.get("/", IndexController.TalentController.findAll);

export default router;
