import { Router } from "express";
import IndexController from "../controller/IndexController";
import UploadDownloadHelper from "../helpers/UploadDownloadHelper";

const router = Router();

router.get("/:id", IndexController.SettingController.getTalent);
router.put("/:id", UploadDownloadHelper.uploadMultipleFile, IndexController.SettingController.updateSettings);
router.put("/data/:id", IndexController.SettingController.updateSettingsNoFile);
router.get("/images/:filename", UploadDownloadHelper.showProductImage);

export default router;
