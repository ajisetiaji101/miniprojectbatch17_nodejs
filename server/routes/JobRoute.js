import { Router } from "express";
import IndexController from "../controller/IndexController";
import UploadDownloadHelper from "../helpers/UploadDownloadHelper";
import uploadDownload from "../middleware/uploadDownload";

const router = Router();

router.post("/", IndexController.JobController.create);
router.get("/", IndexController.JobController.list);
router.put(
  "/:id",
  UploadDownloadHelper.uploadMultipleFile,
  IndexController.JobController.update
);
router.get("/:id", IndexController.JobController.findOne);
router.post(
  "/",
  uploadDownload.uploadFiles,
  IndexController.JobController.create
);
router.get("/images/:filename", uploadDownload.show_curr_logo);

export default router;
