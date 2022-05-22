import { Router } from "express";
import IndexController from "../controller/IndexController";
import UploadDownloadHelper from "../helpers/UploadDownloadHelper";

const router = Router();

router.get("/", IndexController.CurriculumController.findAll);
router.post(
  "/",
  UploadDownloadHelper.uploadSingleFile,
  IndexController.CurriculumController.createCurr
);
router.get("/:id", IndexController.CurriculumController.findOne);
router.put(
  "/:id",
  UploadDownloadHelper.uploadSingleFile,
  IndexController.CurriculumController.update
);

export default router;
