import { Router } from "express";
import IndexController from "../controller/IndexController";

const router = Router();

router.get("/", IndexController.BootcampController.Bootcamp);
router.get("/regular", IndexController.BootcampController.Regular);
router.get("/berbayar", IndexController.BootcampController.Berbayar);

export default router;
