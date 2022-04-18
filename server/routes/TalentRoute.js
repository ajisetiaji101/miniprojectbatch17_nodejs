import { Router } from "express";
import IndexController from "../controller/IndexController";

const router = Router();

router.get("/detail", IndexController.TalentController.detail);
router.get("/", IndexController.TalentController.findAll);
router.post('/',UploadDownloadHelper.uploadMultipleFile,IndexController.TalentController.createEmp)

export default router;
