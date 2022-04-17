import { Router } from "express";
import IndexController from "../controller/IndexController";
import uploadDownloadHelper from "../helpers/uploadDownloadHelper";

const router = Router()

router.get('/',IndexController.InstructorController.findAll)
router.get('/images/:filename',uploadDownloadHelper.showProductImage)
router.post('/',uploadDownloadHelper.uploadSingleFile,IndexController.InstructorController.createInst)
router.put('/:id',uploadDownloadHelper.uploadSingleFile,IndexController.InstructorController.updateInst)
router.delete('/:id',IndexController.InstructorController.remove)

export default router