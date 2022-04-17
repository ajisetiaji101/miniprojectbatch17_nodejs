import { Router } from "express";
import IndexController from "../controller/IndexController";
import UploadDownloadHelper from "../helpers/UploadDownloadHelper"

const router = Router()

router.get('/',IndexController.TalentController.findAll)
router.post('/',UploadDownloadHelper.uploadSingleFile,IndexController.TalentController.createEmp)

export default router