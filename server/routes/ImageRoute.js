import { Router } from "express";
import UploadDownloadHelper from "../helpers/UploadDownloadHelper";

const router = Router();

router.get("/:filename", UploadDownloadHelper.showProductImage);

export default router;
