import { Router } from "express";
import IndexController from "../controller/IndexController";
import UploadDownloadHelper from "../helpers/UploadDownloadHelper";

const router = Router();

router.get("/", IndexController.PlacementController.List);
router.get("/images/:filename", UploadDownloadHelper.showProductImage);
router.delete("/:id", IndexController.PlacementController.hapusPlace);

export default router;
