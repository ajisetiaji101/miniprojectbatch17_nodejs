import { Router } from "express";
import IndexController from "../controller/IndexController";
import uploadDownloadHelper from "../helpers/uploadDownloadHelper";

const router = Router()

router.get('/',IndexController.InstructorController.findAll)
router.get('/images/:filename',uploadDownloadHelper.showProductImage)
router.get('/:id',IndexController.InstructorController.findOne)
router.put('/:id',uploadDownloadHelper.uploadSingleFile,IndexController.InstructorController.updateInst)

export default router