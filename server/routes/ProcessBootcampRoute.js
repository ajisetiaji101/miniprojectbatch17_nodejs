import { Router } from "express";
import IndexController from "../controller/IndexController";
import UploadDownloadHelper from "../helpers/UploadDownloadHelper";

const router = Router();
router.post("/", UploadDownloadHelper.uploadMultipleFile, IndexController.ProcessBootcampController.createProcessBootamp);
router.put("/:id", UploadDownloadHelper.uploadMultipleFile, IndexController.ProcessBootcampController.updateProcessBootamp);
router.put("data/:id", IndexController.ProcessBootcampController.updateProcessBootampNoFile);

export default router;
