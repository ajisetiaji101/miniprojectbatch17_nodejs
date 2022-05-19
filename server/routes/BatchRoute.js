import { Router } from "express";
import IndexController from "../controller/IndexController";
import UploadDownloadHelper from "../helpers/UploadDownloadHelper";

const router = Router();

router.get("/",IndexController.BatchController.findBatch);
router.get("/:id",IndexController.BatchController.findBatchById);
router.put("/:id",IndexController.BatchController.UpdateBatch,IndexController.BatchController.AddMembers);
router.put("/status/:id",IndexController.BatchController.UpdateBatchStatus)
router.delete("/:id",IndexController.BatchController.deleteBatch);
router.get("/images/:filename",UploadDownloadHelper.showProductImage)

export default router;
