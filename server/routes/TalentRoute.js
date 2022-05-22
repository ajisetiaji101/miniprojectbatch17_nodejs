import { Router } from "express";
import IndexController from "../controller/IndexController";
import UploadDownloadHelper from "../helpers/UploadDownloadHelper";

const router = Router();

router.get("/detail", IndexController.TalentController.detail);
router.get("/:id", IndexController.TalentController.findOne);
router.get("/", IndexController.TalentController.findAll);
router.get("/images/:filename", UploadDownloadHelper.showProductImage);
router.post('/',UploadDownloadHelper.uploadMultipleFile,IndexController.TalentController.createEmp)

export default router;
