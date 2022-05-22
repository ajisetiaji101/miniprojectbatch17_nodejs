import { Router } from "express";
import IndexController from "../controller/IndexController";
import UploadDownloadHelper from "../helpers/UploadDownloadHelper";

const router = Router();

router.post("/", IndexController.JobController.create);
router.get("/", IndexController.JobController.list);
router.put(
  "/:id",
  UploadDownloadHelper.uploadMultipleFile,
  IndexController.JobController.update
);
router.get("/:id", IndexController.JobController.findOne);

export default router;
