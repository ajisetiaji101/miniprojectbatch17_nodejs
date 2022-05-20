import { Router } from "express";
import IndexController from "../controller/IndexController";
import UploadDownloadHelper from "../helpers/UploadDownloadHelper";

const router = Router();

router.get("/", IndexController.BootcampController.Bootcamp);
router.get("/regular", IndexController.BootcampController.Regular);
router.get("/berbayar", IndexController.BootcampController.Berbayar);
router.get("/images/:filename",UploadDownloadHelper.showProductImage)

export default router;
