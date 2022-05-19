import { Router } from "express";
import IndexController from "../controller/IndexController";
import UploadDownloadHelper from "../helpers/UploadDownloadHelper";


const router = Router()

router.get('/',IndexController.CurriculumReviewsController.findAll)
router.get('/:id',IndexController.CurriculumReviewsController.findOne)
router.put('/:id',UploadDownloadHelper.uploadSingleFile,IndexController.CurriculumReviewsController.updateCure)
router.get("/images/:filename",UploadDownloadHelper.showProductImage)

export default router