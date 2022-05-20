import { Router } from "express";
import IndexController from "../controller/IndexController";
import UploadDownloadHelper from "../helpers/UploadDownloadHelper";

const router = Router();

router.get("/", IndexController.CurriculumMateriController.findAll);
router.post(
  "/",
  UploadDownloadHelper.uploadSingleFile,
  IndexController.CurriculumMateriController.create
);
router.get("/:id", IndexController.CurriculumMateriController.findOne);

export default router;
