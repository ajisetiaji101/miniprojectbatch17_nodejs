import { Router } from "express";
import IndexController from "../controller/IndexController";
import UploadDownloadHelper from "../helpers/UploadDownloadHelper";

const router = Router();

router.get("/:id", IndexController.TalentTimelineController.findTime);
router.post("/", UploadDownloadHelper.uploadMultipleFile, IndexController.TalentTimelineController.createTale);
router.get("/", IndexController.TalentTimelineController.List);

export default router;
