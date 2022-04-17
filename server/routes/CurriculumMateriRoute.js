import { Router } from "express";
import IndexController from "../controller/IndexController";
//import uploadDownloadHelper from "../helpers/uploadDownloadHelper";

const router = Router()

router.get('/',IndexController.CurriculumMateriController.findAll)
router.post('/',IndexController.CurriculumMateriController.create)
//router.get('/images/:filename',uploadDownload.showProfile)
//router.post('/cuma',uploadDownloadHelper.uploadSingleFile,indexCtrl.curriculum_materiCtrl.createCuma)
// router.post('/cumacuma',uploadDownload.uploadFiles,indexCtrl.curriculum_materiCtrl.createCumacuma)
// router.post('/sub',uploadDownload.uploadFiles,indexCtrl.curriculum_materiCtrl.createCumaSub)
// router.put('/:id',uploadDownload.uploadFiles,indexCtrl.curriculum_materiCtrl.updateCuma)
router.delete('/:id',IndexController.CurriculumMateriController.remove)

export default router