import { Router } from "express";
import IndexController from "../controller/IndexController";
import UploadDownloadHelper from "../helpers/UploadDownloadHelper";
import uploadDownload from "../middleware/uploadDownload";

const router = Router();

router.get("/", IndexController.JobController.list);
router.put(
  "/:id",
  UploadDownloadHelper.uploadMultipleFile,
  IndexController.JobController.update
);
router.put("/data/:id", IndexController.JobController.updateJobsNoFile);
router.get("/:id", IndexController.JobController.findOne);
router.post(
  "/",
  uploadDownload.uploadFiles,
  IndexController.JobController.create
);
router.get("/images/:filename", UploadDownloadHelper.showProductImage);

export default router;
