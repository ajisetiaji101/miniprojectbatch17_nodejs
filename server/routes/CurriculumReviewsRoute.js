import { Router } from "express";
import IndexController from "../controller/IndexController";
import uploadDownload from "../middleware/uploadDownload";

const router = Router()

router.get('/',IndexController.CurriculumReviewsController.findAll)
router.get('/:id',IndexController.CurriculumReviewsController.findOne)
router.get('/images/:filename',uploadDownload.show_curr_logo)
router.put('/:id',uploadDownload.uploadFiles,IndexController.CurriculumReviewsController.updateCure)

export default router