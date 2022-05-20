import { Router } from "express";
import IndexController from "../controller/IndexController";
const router = Router();

router.get("/",IndexController.BatchesController.findAllRows);
router.get("/talent",IndexController.BatchesController.findTalentBatch);
router.get("/batch",IndexController.BatchesController.findBatch);
router.post("/",IndexController.BatchesController.createBatch,IndexController.BatchesController.updateCurriculumData,IndexController.BatchesController.updateTalent,IndexController.BatchesController.createTalentBatch);
export default router;