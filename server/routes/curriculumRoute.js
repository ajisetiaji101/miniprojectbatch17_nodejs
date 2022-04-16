import { Router } from "express";
import indexController from "../controller/indexController";
import uploadDownload from "../middleware/uploadDownload";

const router = Router()

router.get('/',indexController.curriculumController.findAll)
router.get("/images/:filename",uploadDownload.show_curr_logo)
router.post('/',uploadDownload.uploadFiles,indexController.curriculumController.createEmp)
export default router