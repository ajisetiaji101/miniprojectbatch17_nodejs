import { Router } from "express";
import IndexController from "../controller/IndexController";
//import uploadDownloadHelper from "../helpers/uploadDownloadHelper";

const router = Router()

router.get('/',IndexController.CurriculumMateriController.findAll)
router.get('/:id',IndexController.CurriculumMateriController.findOne)

export default router