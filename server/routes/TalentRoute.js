import { Router } from "express";
import IndexController from "../controller/IndexController";
import UploadDownloadHelper from "../helpers/UploadDownloadHelper";

const router = Router();

router.get("/detail", IndexController.TalentController.detail);
router.get("/", IndexController.TalentController.findAll);

export default router;
