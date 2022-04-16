import { Router } from "express";
import IndexController from "../controller/IndexController";
import uploadDownload from "../middleware/uploadDownload";


const router = Router()

router.get('/',IndexController.CurriculumController.findAll)
router.get("/images/:filename",uploadDownload.show_curr_logo)
router.post('/',uploadDownload.uploadFiles,IndexController.CurriculumController.createCurr)


export default router
